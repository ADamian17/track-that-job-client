import { useProfile } from '@/contexts/Profile.context';
import ProfileImage from '@/components/ProfileImage';

import styles from "./ProfileContainer.module.scss"

const ProfileContainer: React.FC = () => {
  const { userData } = useProfile()

  const progressList = userData?.progress && userData?.progress.map(item => (
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
        <ProfileImage imageSrc={userData?.user?.profile_image} />

        <div>
          <h3 className={styles.headline}>full name: {userData?.user?.first_name} {userData?.user?.last_name}</h3>
          <p className={styles.subcopy}><span>email:</span> {userData?.user?.email}</p>
          <small className={styles.smallcopy}><span>profession:</span> {userData?.user?.profession}</small>
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
