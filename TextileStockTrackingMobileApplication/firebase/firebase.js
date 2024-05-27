import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDbJCT3uDdCJ5I8AOPzA3_VK1zuIE9Lhtk",
    authDomain: "https://textilestocktrackingapp-default-rtdb.firebaseio.com/",
    projectId: "textilestocktrackingapp",
    storageBucket: "textilestocktrackingapp.appspot.com",
    messagingSenderId: "328287536522",
    appId: "1:328287536522:android:4605cc892bee3f3111b473"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = firebase.database();

export { auth, database  };