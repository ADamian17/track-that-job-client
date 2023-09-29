// // Create the file metadata
import {
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
  ref,
} from 'firebase/storage';
import { storage } from '.';

export const uploadImageFile = (file: File | null) => {
  try {
    if (file) {
      const metadata = {
        contentType: file?.type || 'image/jpeg',
      };
      const storageRef = ref(storage, `images/${Date.now()}-${file.name}`);

      return uploadBytesResumable(storageRef, file as File, metadata);
    }
  } catch (error) {
    console.log(error);
  }
};
