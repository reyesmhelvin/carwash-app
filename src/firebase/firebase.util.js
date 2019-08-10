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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {

        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error in creating user', error.message());
        }

    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;