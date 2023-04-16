// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDVHUzrvxpdMP4_yi99dItvV_Nx1Y6Dk-U',
	authDomain: 'fir-router-tailwind.firebaseapp.com',
	projectId: 'fir-router-tailwind',
	storageBucket: 'fir-router-tailwind.appspot.com',
	messagingSenderId: '638231924471',
	appId: '1:638231924471:web:b50e2acdd22344f644cdf2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;