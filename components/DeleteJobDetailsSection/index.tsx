import { useState } from 'react';
import { useSession } from "next-auth/react"

import { Jobs } from '@/libs/jobs';
import { SessionDataType } from '@/types';
import Button from '../UI/Buttons/Button';
import ButtonsGroup from '../UI/Buttons/ButtonsGroup';

import styles from "./DeleteJobDetailsSection.module.scss"
import { useRouter } from 'next/router';

const DeleteJobDetailsSection: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter()
  const { data: session } = useSession()
  const jwtToken = (session as SessionDataType)?.user?.signedJwt as string;

  const [showConfirmation, setShowConfirmation] = useState(false)
  const [inputError, setInputError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [inputVal, setInputVal] = useState("")

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
      if (inputVal.toLowerCase() === "delete this job") {
        setLoading(true)
        const data = await Jobs.delete(jwtToken, id);

        if (data.status === 201) {
          setLoading(false)
          router.push("/")
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
          <p>Once you delete this job, there is no going back. Please be certain.</p>
          <Button text='delete job' variant='is-danger' onClick={handleShowConfirmation} />
        </div>

        <div className={styles.confirmationMsg}>
          <p dangerouslySetInnerHTML={{ __html: "Type <b>`delete this job`</b> in the box below." }} />

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

export default DeleteJobDetailsSection;
