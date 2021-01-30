import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCE0eCUhaQwUhD4zHwt1iD_SADveXAkbQs",
  authDomain: "clone-45d5d.firebaseapp.com",
  projectId: "clone-45d5d",
  storageBucket: "clone-45d5d.appspot.com",
  messagingSenderId: "1032126963411",
  appId: "1:1032126963411:web:97d827acfed267c1b8be26",
  measurementId: "G-3C6P8C3ZD3",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
