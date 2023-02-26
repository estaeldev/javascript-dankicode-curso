import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFunctions} from 'firebase/functions'

const firebaseConfig = {
  apiKey: "AIzaSyAmQdRxDX6lQs511iXsSoi4j7yrr-d8b0Y",
  authDomain: "instagram-clone-61974.firebaseapp.com",
  projectId: "instagram-clone-61974",
  storageBucket: "instagram-clone-61974.appspot.com",
  messagingSenderId: "124970272673",
  appId: "1:124970272673:web:ce83680d17c32220cf2de0",
  measurementId: "G-1DLH4FNMEN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
const functions = getFunctions(app)

export {db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, storage, functions}


