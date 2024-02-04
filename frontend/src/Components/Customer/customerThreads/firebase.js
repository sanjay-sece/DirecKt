// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATJ2VufGhk3e6Mi89FGxoiTtL1KdvkBSs",
  authDomain: "uploadingfile-af46b.firebaseapp.com",
  projectId: "uploadingfile-af46b",
  storageBucket: "uploadingfile-af46b.appspot.com",
  messagingSenderId: "671660554926",
  appId: "1:671660554926:web:952a513097e18f6f588b3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);












// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyA1tcQWS05tHSIaWsGS733f-S3kIZ5QdD0",
//   authDomain: "fileupload-50d69.firebaseapp.com",
//   projectId: "fileupload-50d69",
//   storageBucket: "fileupload-50d69.appspot.com",
//   messagingSenderId: "524568518779",
//   appId: "1:524568518779:web:e6f17150e1ce2097b9c2de"
// };


// const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);