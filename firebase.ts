// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDJuV8SYikvHmfdSYuL3ceeZKiWj9Uqs2Q',
  authDomain: 'netflix-clone-yt-ceeb4.firebaseapp.com',
  projectId: 'netflix-clone-yt-ceeb4',
  storageBucket: 'netflix-clone-yt-ceeb4.appspot.com',
  messagingSenderId: '253868975638',
  appId: '1:253868975638:web:3730ed4c9416128aaeb737',
}

// Initialize Firebase, esta configurarción es por typescript
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDJuV8SYikvHmfdSYuL3ceeZKiWj9Uqs2Q",
//   authDomain: "netflix-clone-yt-ceeb4.firebaseapp.com",
//   projectId: "netflix-clone-yt-ceeb4",
//   storageBucket: "netflix-clone-yt-ceeb4.appspot.com",
//   messagingSenderId: "253868975638",
//   appId: "1:253868975638:web:3730ed4c9416128aaeb737"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
