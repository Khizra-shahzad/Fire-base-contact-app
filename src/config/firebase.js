// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8QzTHbyjyCgp-cSPoKZSCuwsFdvUg8o8',
  authDomain: 'vite-contact-fd549.firebaseapp.com',
  projectId: 'vite-contact-fd549',
  storageBucket: 'vite-contact-fd549.firebasestorage.app',
  messagingSenderId: '812939297284',
  appId: '1:812939297284:web:b15215def32d790281eb51',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
