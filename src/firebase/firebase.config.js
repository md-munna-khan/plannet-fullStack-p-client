


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC34gXmdQG-rgPnsiy_aL4gIku2eMUxig4",
//   authDomain: "plannet-fullstack.firebaseapp.com",
//   projectId: "plannet-fullstack",
//   storageBucket: "plannet-fullstack.firebasestorage.app",
//   messagingSenderId: "596876150971",
//   appId: "1:596876150971:web:25e3a8bfda16e156be019e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
