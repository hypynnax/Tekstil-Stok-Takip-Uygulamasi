import { auth } from './firebase/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

export async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { success: true, message: '' };
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return { success: false, message: 'That email address is already in use!' };
    } else if (error.code === 'auth/invalid-email') {
      return { success: false, message: 'That email address is invalid!' };
    } else if (error.code === 'auth/weak-password') {
      return { success: false, message: 'The password is too weak!' };
    } else {
      return { success: false, message: 'An unknown error occurred!' };
    }
  }
}

export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, message: '' };
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      return { success: false, message: 'That email address is invalid!' };
    } else if (error.code === 'auth/user-not-found') {
      return { success: false, message: 'No user found with this email address!' };
    } else if (error.code === 'auth/wrong-password') {
      return { success: false, message: 'Incorrect password!' };
    } else {
      return { success: false, message: 'An unknown error occurred!' };
    }
  }
}

export async function resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: 'Password reset email sent!' };
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      return { success: false, message: 'That email address is invalid!' };
    } else if (error.code === 'auth/user-not-found') {
      return { success: false, message: 'No user found with that email address!' };
    } else {
      return { success: false, message: 'An unknown error occurred!' };
    }
  }
}
