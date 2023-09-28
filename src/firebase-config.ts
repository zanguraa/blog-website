import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3w6qVsWVA1Os3sDehYpageirzaYPy7Dg",
  authDomain: "blogproject-18325.firebaseapp.com",
  projectId: "blogproject-18325",
  storageBucket: "blogproject-18325.appspot.com",
  messagingSenderId: "552996431219",
  appId: "1:552996431219:web:2da3f40ab329f0edda9106",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
