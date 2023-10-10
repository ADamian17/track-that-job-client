import React, { ElementRef, useRef, useState } from "react";
import { getDownloadURL } from "firebase/storage";
import { useSession } from 'next-auth/react';
import Image from "next/image";

import { SessionDataType } from "@/types";
import { uploadImageFile } from "@/libs/firebase/handlers";
import { useProfile } from "@/contexts/Profile.context";
import { User } from "@/libs/user";

import styles from "./ProfileImage.module.scss";

type ProfileImageType = {
  imageSrc: string
};

const ProfileImage: React.FC<ProfileImageType> = ({ imageSrc }) => {
  const { setCurrentUser } = useProfile()
  const { data: session } = useSession()
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const inputFileRef = useRef<ElementRef<"input">>(null)
  const [progress, setProgress] = useState<number>(0);
  const [progressState, setProgressState] = useState<'Upload is paused' | 'Upload is running' | (string & {})>('');
  const [uploadError, setUploadError] = useState(false)

  const handleClick = () => {
    dialogRef.current?.showModal()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputFileRef.current?.files?.item(0)) {
      const uploadTask = uploadImageFile(inputFileRef.current?.files?.item(0))
      if (uploadTask) {
        uploadTask?.on(
          'state_changed',
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            setProgress(
              Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              )
            )
            switch (snapshot.state) {
              case 'paused':
                setProgressState('Upload is paused')
                break;
              case 'running':
                setProgressState('Upload is running')
                break;
            }
          },
          (error) => {
            setUploadError(true)
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              if (downloadURL && (session as SessionDataType)?.user?.signedJwt!) {
                User.updateImg((session as SessionDataType)?.user?.signedJwt!, downloadURL).then(data => {
                  if (data?.status === 200) {
                    setProgress(0)
                    setProgressState("")
                    setCurrentUser(prev => ({ ...prev, user: data.updatedUser }))
                    dialogRef.current?.close()
                  }
                })
              }
            });
          }
        );
      }
    }
  }

  const handleClose = () => {
    dialogRef.current?.close()
  }

  return (
    <>
      <figure
        className={styles.profileImage}
        onClick={handleClick}
      >
        <Image
          src={imageSrc}
          width={100}
          height={100}
          alt="profile image"
          priority
        />
      </figure>

      <dialog
        ref={dialogRef}
        className={styles.imagePopup}
      >
        <form onSubmit={handleSubmit}>
          <input type="file" max={1} ref={inputFileRef} />
          {uploadError && <p>upload went wrong</p>}
          <p>{progressState}</p>
          <p style={{ maxWidth: 100, width: `${progress}%`, backgroundColor: "red", height: 10 }}></p>

          <input type="button" value="cancel" onClick={handleClose} />
          <input type="submit" value="submit" />
        </form>
      </dialog>
    </>
  )
};

export default ProfileImage;