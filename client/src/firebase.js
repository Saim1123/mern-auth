import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-105f6.firebaseapp.com",
  projectId: "mern-auth-105f6",
  storageBucket: "mern-auth-105f6.appspot.com",
  messagingSenderId: "867509053940",
  appId: "1:867509053940:web:5b2c1f6ebf89ee4e0e71a1",
};

export const app = initializeApp(firebaseConfig);
