// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_jC4LupRmkRn8TcHKVH1rClEQx47bRvk",
  authDomain: "web-blog-3cf67.firebaseapp.com",
  projectId: "web-blog-3cf67",
  storageBucket: "web-blog-3cf67.appspot.com",
  messagingSenderId: "154983957729",
  appId: "1:154983957729:web:948a22fa446845fb4d23a0",
  measurementId: "G-7W2F9J2PWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
