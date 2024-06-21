import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCPgtEhI8Kgt3-SHm37TMNWNCmej6pBh6s",
  authDomain: "acadamiaelitemx.firebaseapp.com",
  projectId: "acadamiaelitemx",
  storageBucket: "acadamiaelitemx.appspot.com",
  messagingSenderId: "716887535414",
  appId: "1:716887535414:web:0b61e19b5cb0fd8f2b0d97",
  measurementId: "G-2ENXLH29ED"
}

export const app = initializeApp(firebaseConfig);

export const db = getAuth(app);
