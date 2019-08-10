import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCasoF13YSNk-mvgChMVnNUbBZOeXp2MbI",
    authDomain: "crwn-db-a9101.firebaseapp.com",
    databaseURL: "https://crwn-db-a9101.firebaseio.com",
    projectId: "crwn-db-a9101",
    storageBucket: "",
    messagingSenderId: "1065569186229",
    appId: "1:1065569186229:web:9e336eae9ef9e71a"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;