// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9C7A9oDOC1uBLV_LabdutO0T_mfF6luA",
  authDomain: "mediaflixgpt.firebaseapp.com",
  projectId: "mediaflixgpt",
  storageBucket: "mediaflixgpt.appspot.com",
  messagingSenderId: "936861665336",
  appId: "1:936861665336:web:996b9cda266b03cde83ecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
