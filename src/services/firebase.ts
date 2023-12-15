// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBolWp_ZeVphjwQ3kuFbeuK_QS7q-0en2Q',
	authDomain: 'learna-language.firebaseapp.com',
	projectId: 'learna-language',
	storageBucket: 'learna-language.appspot.com',
	messagingSenderId: '752711300994',
	appId: '1:752711300994:web:5d1f3964a7a2cdbb3d419b',
	measurementId: 'G-HX2X42M0EZ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
