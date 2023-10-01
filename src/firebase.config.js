// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9i5eyouga-9Z-YDit5NyDHx-md4miKPg",
  authDomain: "auth-moha-milon-e191f.firebaseapp.com",
  projectId: "auth-moha-milon-e191f",
  storageBucket: "auth-moha-milon-e191f.appspot.com",
  messagingSenderId: "920467035068",
  appId: "1:920467035068:web:18a7bda885b29869cfd1b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
