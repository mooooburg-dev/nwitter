// import * as firebase from "firebase/app";
// import "firebase/auth";

import * as firebase from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// firebase.initializeApp(firebaseConfig);
// export const authService = firebase.auth();

const app = firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = getAuth();
