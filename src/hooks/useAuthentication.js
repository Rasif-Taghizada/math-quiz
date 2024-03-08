import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { removeUser, saveUser } from "../redux/auth/authSlice";

import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function useAuthentication() {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        saveUser({
          email: user.email,
          uid: user.uid,
          token: user.refreshToken,
        })
      );
      setUserData(user);
    } else {
      dispatch(removeUser());
    }
  });

  const signInCall = async (user) => {
    try {
      const { email, password } = user;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.error("Error signing in with email and password", error);
      return null;
    }
  };

  const signUpCall = async (user) => {
    try {
      const { email, password } = user;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      console.error("Error signing up with email and password", error);
      return null;
    }
  };

  const signOutCall = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      return true;
    } catch (error) {
      console.error("Error signing out", error);
      return false;
    }
  };

  const signWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user;
    } catch (error) {
      console.error("Error signing in with google", error);
      return null;
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      console.error("Error sending password reset email", error);
      return false;
    }
  };

  return {
    userData,
    signInCall,
    signUpCall,
    signOutCall,
    signWithGoogle,
    resetPassword,
  };
}
