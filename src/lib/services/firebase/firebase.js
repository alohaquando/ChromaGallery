// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp, deleteApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
// 	apiKey: 'AIzaSyD6eZfb1M7NP_7lIgwQlS3xMvC8LVCf9DE',
// 	authDomain: 'thatonlinemuseum.firebaseapp.com',
// 	projectId: 'thatonlinemuseum',
// 	storageBucket: 'thatonlinemuseum.appspot.com',
// 	messagingSenderId: '684483382216',
// 	appId: '1:684483382216:web:71783ebfd3474900328efd',
// 	measurementId: 'G-KZQXZ2SQ12'
// };
const firebaseConfig = {
	apiKey: "AIzaSyCRcQkjKjhmQJK6LWP1aV2JdxUD5w8k2EY",
	authDomain: "chromagallery-b7223.firebaseapp.com",
	projectId: "chromagallery-b7223",
	storageBucket: "chromagallery-b7223.appspot.com",
	messagingSenderId: "574408125939",
	appId: "1:574408125939:web:e54ca0ac032ba241487686",
	measurementId: "G-Y8Q5C2BN0C"
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
export const storage = getStorage(firebaseApp);
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default db;
