// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp, deleteApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: import.meta.env.VITE_APIKEY,
// 	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
// 	projectId: import.meta.env.VITE_PROJECT_ID,
// 	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
// 	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
// 	appId: import.meta.env.VITE_APP_ID,
// 	measurementId: import.meta.env.VITE_MEASUREMENT_ID,
// };
const firebaseConfig = {
	apiKey: 'AIzaSyD6eZfb1M7NP_7lIgwQlS3xMvC8LVCf9DE',
	authDomain: 'thatonlinemuseum.firebaseapp.com',
	projectId: 'thatonlinemuseum',
	storageBucket: 'thatonlinemuseum.appspot.com',
	messagingSenderId: '684483382216',
	appId: '1:684483382216:web:71783ebfd3474900328efd',
	measurementId: 'G-KZQXZ2SQ12'
};
// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
	firebaseApp = initializeApp(firebaseConfig);
} else {
	firebaseApp = getApp();
	deleteApp(firebaseApp);
	firebaseApp = initializeApp(firebaseConfig);
}

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default db;
