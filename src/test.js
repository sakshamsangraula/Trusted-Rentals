import firebase from 'firebase/app';
import 'firebase/firestore';

export const firestore = firebase.firestore();

// collection is like an array and document is like an element in the array
// we have a collection of users which has a single user document and that single user document has a collection of 
// property cartItems which has a single Toyota Corolla document
firestore.collection('users').doc('2WFPS8QjMyhuseKjNJ7L').collection('cartItems').doc('Hef993QdFMntO02GA0K5');
firestore.doc('/users/2WFPS8QjMyhuseKjNJ7L/cartItems/Hef993QdFMntO02GA0K5');
// firestore.collection('users/2WFPS8QjMyhuseKjNJ7L/cartItems');

// uid is user id for the authenticated user