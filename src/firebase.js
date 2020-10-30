// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcMJRPcGqdekyyZLtPbkFItyy8vOHbDDY",
  authDomain: "tik-tok-clone-4f292.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-4f292.firebaseio.com",
  projectId: "tik-tok-clone-4f292",
  storageBucket: "tik-tok-clone-4f292.appspot.com",
  messagingSenderId: "706169721810",
  appId: "1:706169721810:web:74b7b395d9a8d086a9ae0b",
  measurementId: "G-73131SSFPC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
