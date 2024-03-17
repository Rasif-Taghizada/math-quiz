import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import {
  addStudentToFirestore,
  updateStudentInFirestore,
} from "../redux/students/studentSlice";
import { auth, storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { removeUser, saveUser } from "../redux/auth/authSlice";

import { store } from "../redux/store";
import { toast } from "react-toastify";

export const useAuth = () => {
  const storageRef = ref(storage, `users/${auth?.currentUser?.uid}`);

  const signIn = async (user) => {
    try {
      //* sign in with email and password
      const { email, password } = user;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Sign in successful");
      return userCredential.user;
    } catch (error) {
      toast.error(error.message);
      return null;
    }
  };

  const signUp = async (user) => {
    try {
      const { email, password } = user;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (email !== "admin@gmail.com" && password !== "admin123") {
        store
          .dispatch(
            addStudentToFirestore({
              email: email,
              token: userCredential.user.refreshToken,
            })
          )
          .then((result) => {
            store.dispatch(
              saveUser({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                token: userCredential.user.refreshToken,
                id: result.payload.id,
              })
            );
          });
      }

      store.dispatch(
        saveUser({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          token: userCredential.user.refreshToken,
        })
      );

      toast.success("Sign up successful");
      return userCredential.user;
    } catch (error) {
      toast.error(error.message);
      return null;
    }
  };

  const signWithGoogle = async () => {
    try {
      //* sign in with google
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      //* add student to firestore
      if (
        userCredential.user.email !== "admin@gmail.com" &&
        userCredential.user.password !== "admin123"
      ) {
        store
          .dispatch(
            addStudentToFirestore({
              email: userCredential.user.email,
              token: userCredential.user.refreshToken,
            })
          )
          .then((result) => {
            store.dispatch(
              saveUser({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                token: userCredential.user.refreshToken,
                id: result.payload.id,
              })
            );
          });
      }
      toast.success("Sign in with Google successful");
      return userCredential.user;
    } catch (error) {
      toast.error(error.message);
      return null;
    }
  };

  const signOutCall = async () => {
    try {
      await signOut(auth);
      store.dispatch(removeUser());
      toast.success("Sign out successful");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  const updateProfileCall = async (user) => {
    try {
      //* update profile picture in storage
      const userProfileURL = await getDownloadURL(storageRef);
      //* set photoURL in auth
      await updateProfile(auth.currentUser, {
        displayName: user.displayName,
        photoURL: userProfileURL,
      });
      //* update student in firestore
      store.dispatch(
        updateStudentInFirestore({
          email: user.email,
          displayName: user.displayName,
          phoneNumber: user.phone,
          photoURL: userProfileURL,
          id: store.getState().user.id,
        })
      );
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updatePasswordCall = async (newPassword) => {
    try {
      await updatePassword(auth.currentUser, newPassword);
      toast.success("Password updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateEmailCall = async (newEmail) => {
    try {
      await updateEmail(auth.currentUser, newEmail);
      toast.success("Email updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const verifyEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      toast.success("Verification email sent");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const uploadImage = async (file) => {
    try {
      if (typeof file === "string" || file === null) return;
      await uploadBytes(storageRef, file);
      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    signIn,
    signUp,
    signWithGoogle,
    signOutCall,
    resetPassword,
    updateEmailCall,
    updateProfileCall,
    updatePasswordCall,
    verifyEmail,
    uploadImage,
  };
};
