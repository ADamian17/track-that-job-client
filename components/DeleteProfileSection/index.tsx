import { useState } from 'react';
import { useSession, signOut } from "next-auth/react"

import styles from "./DeleteProfileSection.module.scss"
import Button from '../UI/Buttons/Button';
import ButtonsGroup from '../UI/Buttons/ButtonsGroup';
import { SessionDataType } from '@/types';
import { User } from '@/libs/user';
import useJobsStore from '@/zustand/jobs/useJobsStore';

const DeleteProfileSection: React.FC = () => {
  const { data: session } = useSession()
  const jwtToken = (session as SessionDataType)?.user?.signedJwt;

  const [showConfirmation, setShowConfirmation] = useState(false)
  const [inputError, setInputError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [inputVal, setInputVal] = useState("")
  const { resetJobsList } = useJobsStore(state => state)

  const handleShowConfirmation = () => {
    setShowConfirmation(true)
  }

  const handleCancel = () => {
    setShowConfirmation(false)
    setLoading(false)
    setInputError(false)
    setInputVal("")
  }

  const handleSubmit = async () => {
    try {
      if (inputVal.toLowerCase() === "delete my account") {
        setLoading(true)
        const data = await User.delete(jwtToken!);

        if (data.status === 200) {
          setLoading(false)
          resetJobsList()
          signOut();
          return
        }
      }

      setInputError(true)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.dangerZone}>
      <h3 className={styles.dangerZoneHeadline}>Danger Zone</h3>

      <div className={`${styles.dangerBtnWrapper} ${showConfirmation && styles.showConfirmation}`}>
        <div className={styles.defaultMsg}>
          <p>Once you delete your account, there is no going back. Please be certain.</p>
          <Button text='delete my account' variant='is-danger' onClick={handleShowConfirmation} />
        </div>

        <div className={styles.confirmationMsg}>
          <p dangerouslySetInnerHTML={{ __html: "Type <b>`delete my account`</b> in the box below." }} />

          <div className={styles.dangerInputWrapper}>
            <input
              className={`${styles.dangerInput} ${inputError && styles.error}`}
              onChange={(e) => setInputVal(e.target.value)}
              onFocus={() => setInputError(false)}
              value={inputVal}
            />

            <ButtonsGroup>
              <Button
                isLoading={loading}
                onClick={handleSubmit}
                text='submit'
                variant='is-danger'
              />

              <Button text='cancel' variant='is-info' onClick={handleCancel} />
            </ButtonsGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteProfileSection;
