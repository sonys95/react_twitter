import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqyPsk60Y3zoFmar4E5LTJdH7y7uLeSFc",
  authDomain: "twitter-3fb9b.firebaseapp.com",
  projectId: "twitter-3fb9b",
  storageBucket: "twitter-3fb9b.appspot.com",
  messagingSenderId: "504906408244",
  appId: "1:504906408244:web:48b81845e6cade99f28561",
  measurementId: "G-YC78XFXS2Z",
};

firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
