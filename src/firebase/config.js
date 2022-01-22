// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2leTmovf0G3e3Bj0M_WI1yYiTvQndhD8",
  authDomain: "shopify-challenge-2022.firebaseapp.com",
  projectId: "shopify-challenge-2022",
  storageBucket: "shopify-challenge-2022.appspot.com",
  messagingSenderId: "406493918860",
  appId: "1:406493918860:web:8d4c19642b7a5ddf46ada9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();


export { projectStorage, projectFirestore };

 