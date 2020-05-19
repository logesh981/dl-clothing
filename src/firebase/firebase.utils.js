import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyASIG8kfLEJJbZJGpk6JHePJFbKaHRdeSo",
    authDomain: "dl-db-e83bd.firebaseapp.com",
    databaseURL: "https://dl-db-e83bd.firebaseio.com",
    projectId: "dl-db-e83bd",
    storageBucket: "dl-db-e83bd.appspot.com",
    messagingSenderId: "494785188283",
    appId: "1:494785188283:web:cfd5b1e10474e95308749e",
    measurementId: "G-W11VVNMZ8Y"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
