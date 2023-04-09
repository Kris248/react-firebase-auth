// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {

  apiKey: "AIzaSyBo0pHI6vAo_0ZGpBqaUXWRl6MainaR7TU",
  authDomain: "xometry-clone.firebaseapp.com",
  databaseURL: "https://xometry-clone-default-rtdb.firebaseio.com",
  projectId: "xometry-clone",
  storageBucket: "xometry-clone.appspot.com",
  messagingSenderId: "4049437652",
  appId: "1:4049437652:web:5d8144a1c2f0b042af8c41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
export { app, auth, storage }