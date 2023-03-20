// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQKQZ6zvyll-KynpBOFrNI5PuAjUrgMtE",
  authDomain: "cilla-cili.firebaseapp.com",
  databaseURL: "https://cilla-cili-default-rtdb.firebaseio.com",
  projectId: "cilla-cili",
  storageBucket: "cilla-cili.appspot.com",
  messagingSenderId: "757569810225",
  appId: "1:757569810225:web:3096539fdd60ffd4208a10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
