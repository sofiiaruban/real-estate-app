// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'real-estate-app-1ad8f.firebaseapp.com',
  projectId: 'real-estate-app-1ad8f',
  storageBucket: 'real-estate-app-1ad8f.appspot.com',
  messagingSenderId: '1018395863739',
  appId: '1:1018395863739:web:352d92b5634705f58e579e'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
