import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDbJCT3uDdCJ5I8AOPzA3_VK1zuIE9Lhtk",
    authDomain: "https://textilestocktrackingapp-default-rtdb.firebaseio.com/",
    projectId: "textilestocktrackingapp",
    storageBucket: "textilestocktrackingapp.appspot.com",
    messagingSenderId: "328287536522",
    appId: "1:328287536522:android:4605cc892bee3f3111b473"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

const database = getFirestore(app);

export { auth, database };