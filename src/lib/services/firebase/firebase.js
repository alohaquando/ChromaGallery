// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp, deleteApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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
