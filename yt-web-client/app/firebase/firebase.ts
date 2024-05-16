// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import { getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User
 } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDB1ctRC6nQeRZOzOuishMm7qgU7ITDKSk",
  authDomain: "yt-clone-9b681.firebaseapp.com",
  projectId: "yt-clone-9b681",
  appId: "1:708185572249:web:7b0ff3d16df2b914c14908",
  measurementId: "G-BP1FQKBEQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const functions = getFunctions(app);

/**
 * Signs the user in with a Google popup
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle(){
    return signInWithPopup(auth, new GoogleAuthProvider());
}
/**
 * Signs the user out
 * @returns A promise that resolves when the use us signed out.
 */
export function signOut(){
    return auth.signOut();
}
/**
 * Trigger a callback when the user auth state changes.
 * @returns A function to unsubscribe callback. 
 */
export function onAuthStateChangedHelper(callback: (user: User|null)=>void){
    return onAuthStateChanged(auth, callback);
}
