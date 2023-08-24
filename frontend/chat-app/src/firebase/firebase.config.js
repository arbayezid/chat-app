// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB08vegnCsyu-zECEomFYMyCl5QUtTokJw",
  authDomain: "bayezid-chat-app.firebaseapp.com",
  projectId: "bayezid-chat-app",
  storageBucket: "bayezid-chat-app.appspot.com",
  messagingSenderId: "597851521420",
  appId: "1:597851521420:web:59cc93595b266e84da96a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;