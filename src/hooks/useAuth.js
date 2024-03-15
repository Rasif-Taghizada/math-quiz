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
  fetchStudents,
  updateStudentInFirestore,
} from "../redux/students/studentSlice";
import { auth, storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { removeUser, saveUser } from "../redux/auth/authSlice";

import { fetchExams } from "../redux/exams/examSlice";
import { store } from "../redux/store";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const useAuth = () => {
  useEffect(() => {
    store.dispatch(fetchStudents());
    store.dispatch(fetchExams());
  }, [store.dispatch]);

  const storageRef = ref(storage, `users/${auth?.currentUser?.uid}`);

  const signIn = async (user) => {
    try {
      const { email, password } = user;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // istifadəçi giriş etdikdə, onun fireStore-dakı İD-sini alıb, onu redux-da saxlayırıq
      const students = store.getState().students.studentsArray;
      const currentStudent = students.find(
        (student) => student.email === email
      );

      store.dispatch(
        saveUser({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          token: userCredential.user.refreshToken,
          id: currentStudent?.id,
        })
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

      store.dispatch(
        saveUser({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          token: userCredential.user.refreshToken,
        })
      );
      if (email !== "admin@gmail.com" && password !== "admin123") {
        store.dispatch(
          addStudentToFirestore({
            email: email,
            token: userCredential.user.refreshToken,
          })
        );
      }
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

      //* get student from firestore
      const students = store.getState().students.studentsArray;
      //* find student by email
      const currentStudent = students.find(
        (student) => student.email === userCredential.user.email
      );
      //* save user to redux
      store.dispatch(
        saveUser({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          token: userCredential.user.refreshToken,
          id: currentStudent?.id,
        })
      );

      //* add student to firestore
      if (
        userCredential.user.email !== "admin@gmail.com" &&
        userCredential.user.uid !== "admin123"
      ) {
        store.dispatch(
          addStudentToFirestore({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            photoURL: userCredential.user.photoURL,
          })
        );
      }
      toast.success("Sign in with Google successful");
      return userCredential.user;
    } catch (error) {
      toast.error(error.message);
      return null;
    }
  };

  const signOutCall = async () => {
    console.log("signing out");
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
      console.log("userProfileURL", userProfileURL);
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
