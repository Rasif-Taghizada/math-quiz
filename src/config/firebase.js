import { GoogleAuthProvider, getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_Firebase_API_KEY,
  authDomain: import.meta.env.VITE_Firebase_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_Firebase_PROJECT_ID,
  storageBucket: import.meta.env.VITE_Firebase_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_Firebase_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_Firebase_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
