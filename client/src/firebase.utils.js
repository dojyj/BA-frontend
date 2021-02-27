import dotenv from 'dotenv';
import firebase from 'firebase/app';
import 'firebase/auth';

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

console.log(firebaseConfig.apiKey);
console.log(firebaseConfig.projectId);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();            // auth 변수
// export const firestore = firebase.firestore();  // firestore 접근 변수

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;