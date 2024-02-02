// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASEE_API_KEY,
  authDomain: env.process.FIREBASE_AUTH_DOMAIN,
  projectId: env.process.FIREBASE_PROJECT_ID,
  storageBucket: env.process.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.process.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.process.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = !getApps().length > 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
