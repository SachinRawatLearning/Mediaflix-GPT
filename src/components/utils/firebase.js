// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKzh1PFvunPmsWHAtKfGOP7KQSPX3QWe8",
  authDomain: "netflix-gpt-a93ae.firebaseapp.com",
  projectId: "netflix-gpt-a93ae",
  storageBucket: "netflix-gpt-a93ae.appspot.com",
  messagingSenderId: "706791255123",
  appId: "1:706791255123:web:d6edcbd51419771b01aaa6",
  measurementId: "G-J8CR1966H8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
