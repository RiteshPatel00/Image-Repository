// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDesIGlKhp018EMfGpqxU0iNCz-_k1N5DY",
  authDomain: "image-repository-bc0c4.firebaseapp.com",
  projectId: "image-repository-bc0c4",
  storageBucket: "image-repository-bc0c4.appspot.com",
  messagingSenderId: "625370826099",
  appId: "1:625370826099:web:86f4e38f10b82d6f2e7106"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();


export { projectStorage, projectFirestore };

 