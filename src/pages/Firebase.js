import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBjxfvOZqSNDn6BpkIyUiLocwUAFhpNRSc",
  authDomain: "taskit-73d18.firebaseapp.com",
  projectId: "taskit-73d18",
  storageBucket: "taskit-73d18.appspot.com",
  messagingSenderId: "101486558434",
  appId: "1:101486558434:web:217def8617834090b872bb",
  measurementId: "G-MS7YTDPDBS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};