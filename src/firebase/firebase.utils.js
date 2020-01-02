import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCtpj7oOcUUHwQgW7XEQbgBj3H1l0G86es",
    authDomain: "surgesignin.firebaseapp.com",
    databaseURL: "https://surgesignin.firebaseio.com",
    projectId: "surgesignin",
    storageBucket: "surgesignin.appspot.com",
    messagingSenderId: "122602854239",
    appId: "1:122602854239:web:a824dfe236c2dea369c8ea",
    measurementId: "G-3ZHCZXE9L5"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;