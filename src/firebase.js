import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA2ZViUSPY2BkXJO5lbvhfFHZQEF8ChIwE",
    authDomain: "imgur-3b5e6.firebaseapp.com",
    projectId: "imgur-3b5e6",
    storageBucket: "imgur-3b5e6.appspot.com",
    messagingSenderId: "554838602699",
    appId: "1:554838602699:web:187af53ae0c54c0fbd3c4e",
    measurementId: "G-3JPSR5LPK2"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };