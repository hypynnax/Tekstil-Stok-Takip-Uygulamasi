import { auth } from './firebase/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export async function signIn(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return 0;
    }

    if (error.code === 'auth/invalid-email') {
      return 1;
    }
    return false;
  }
}

export async function signUp(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      return 0;
    }
    return false;
  }
}
