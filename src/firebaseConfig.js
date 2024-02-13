import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkE3fPBWwtbecBeWU535qAynWMcIK3_bg",
  authDomain: "atilahukuk-f012c.firebaseapp.com",
  projectId: "atilahukuk-f012c",
  storageBucket: "atilahukuk-f012c.appspot.com",
  messagingSenderId: "458434640995",
  appId: "1:458434640995:web:13595ab03598ede5600c56",
  measurementId: "G-NE5YWJB8QE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
