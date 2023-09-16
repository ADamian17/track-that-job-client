// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDoW79FqLVTvrmYeQkw8gHS51fHMqX45tY',
  authDomain: 'track-that-job.firebaseapp.com',
  databaseURL: 'https://track-that-job-default-rtdb.firebaseio.com',
  projectId: 'track-that-job',
  storageBucket: 'track-that-job.appspot.com',
  messagingSenderId: '23179505800',
  appId: '1:23179505800:web:3b8095746e9c3f6b0a2f3d',
  measurementId: 'G-HZ6J1HN7X8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
