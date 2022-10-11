import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBHihGg6TbXmFwFP5lIa8CTqx7NQnT4QsQ",
  authDomain: "proyecto-coder-javiermaita.firebaseapp.com",
  projectId: "proyecto-coder-javiermaita",
  storageBucket: "proyecto-coder-javiermaita.appspot.com",
  messagingSenderId: "612492579725",
  appId: "1:612492579725:web:d29cd8da0ed70e78ef63c4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)