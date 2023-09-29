import Image from 'next/image'

import { UserDataType } from "@/types";

import styles from "./ProfileContainer.module.scss"
import ProfileImage from '@/components/ProfileImage';

const ProfileContainer: React.FC<UserDataType> = ({ user, progress }) => {
  const { first_name, last_name, email, profession, profile_image } = user

  const progressList = progress && progress.map(item => (
    <li
      key={item.label}
      className={styles.progressItem}
    >
      <span>{item.label}:</span>
      <span>{item.count}</span>
    </li>
  ));

  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <ProfileImage imageSrc={profile_image} />

        <div>
          <h3 className={styles.headline}>full name: {first_name} {last_name}</h3>
          <p className={styles.subcopy}><span>email:</span> {email}</p>
          <small className={styles.smallcopy}><span>profession:</span> {profession}</small>
        </div>
      </div>

      <div className={styles.progressContent}>
        <h3 className={styles.progressContentCopy}>Progress</h3>

        <ul className={styles.progressList}>
          {progressList}
        </ul>
      </div>
    </section>
  )
}

export default ProfileContainer;
