// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0BEWeq5yHH3AOHQdxaI1SlPF1pBoFcig",
  authDomain: "shuni-332320.firebaseapp.com",
  projectId: "shuni-332320",
  storageBucket: "shuni-332320.appspot.com",
  messagingSenderId: "328021313000",
  appId: "1:328021313000:web:80da96370068ec4166505d",
  measurementId: "G-VR5R7VKEKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
//const analytics = getAnalytics(app);