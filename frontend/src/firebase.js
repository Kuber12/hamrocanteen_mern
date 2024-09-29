// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDUzzmTj4WXf1faJ0R2bXFrUy_6S2sZl8",
  authDomain: "image-store-ca84a.firebaseapp.com",
  projectId: "image-store-ca84a",
  storageBucket: "image-store-ca84a.appspot.com",
  messagingSenderId: "254433681567",
  appId: "1:254433681567:web:90619541c4ed6b8ce5c2aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);