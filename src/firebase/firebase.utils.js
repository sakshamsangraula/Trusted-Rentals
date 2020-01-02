import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { car } from '../RentalCar';
import React, { Fragment } from 'react';
import value from '../select';


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



  // take user auth object from authentication and store it in the database
  export const createUserProfileDocument = async(userAuth, additionalData, value) => {
    // if the user has signed out and is not authorized
    // return and exit from function
    if(!userAuth)
    {
      return;
    }
   
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      // snapShot has exists property that tells us if the data exists in that path
      // whether or not (if we have stored this user object in the database)


     
    // if the data does not exist then create the data in the database
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      // know when we made the document
      const createdAt = new Date();

      try{
          await userRef.set({
            displayName,
            email,
           createdAt,
            ...additionalData
          })
      } catch(error)
      {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore= firebase.firestore();

  // SET UP GOOGLE AUTHENTICATION
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;