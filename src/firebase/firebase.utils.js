// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfNQZtJ9nyZk7K0xAxj2ONtstYVdHQShc",
  authDomain: "sigma-store-db.firebaseapp.com",
  projectId: "sigma-store-db",
  storageBucket: "sigma-store-db.appspot.com",
  messagingSenderId: "690875778995",
  appId: "1:690875778995:web:0d109fb4cce2f98e2f2dc6",
  measurementId: "G-TVFK5RZFFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const auth = getAuth();
export const db = getFirestore(app);
export const signInWithGoogle = () => signInWithPopup(auth, provider);
