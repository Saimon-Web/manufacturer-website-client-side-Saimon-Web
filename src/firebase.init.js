// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOm3Ehf5F5rBmDRCMe-5xIzZ_cyrYGZkk",
  authDomain: "project-53210.firebaseapp.com",
  projectId: "project-53210",
  storageBucket: "project-53210.appspot.com",
  messagingSenderId: "570701540578",
  appId: "1:570701540578:web:a95d82ec6faae78f6042bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;