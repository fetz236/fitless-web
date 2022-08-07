import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQfepSXAa2--wHSn2E2r8HU7azgB6Pd7c",
    authDomain: "fitless-6b2fe.firebaseapp.com",
    projectId: "fitless-6b2fe",
    storageBucket: "fitless-6b2fe.appspot.com",
    messagingSenderId: "300399637317",
    appId: "1:300399637317:web:d255d4b783e27ae226442c",
    measurementId: "G-GHDT1ZRHSV"
};
  

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;