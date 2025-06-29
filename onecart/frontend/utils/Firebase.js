import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-b106c.firebaseapp.com",
  projectId: "loginonecart-b106c",
  storageBucket: "loginonecart-b106c.firebasestorage.app",
  messagingSenderId: "603349508766",
  appId: "1:603349508766:web:3f1c2b82f28ff861f2518f"
};

// Initialize Firebase
console.log("VITE key:", import.meta.env.VITE_FIREBASE_APIKEY);
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}