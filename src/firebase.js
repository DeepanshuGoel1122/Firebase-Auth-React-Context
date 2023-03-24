import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAPaGGiXWrV0r_zrHEdLaPvAOCId2kQ8zQ",
    authDomain: "fir-test-75a96.firebaseapp.com",
    projectId: "fir-test-75a96",
    storageBucket: "fir-test-75a96.appspot.com",
    messagingSenderId: "240537146507",
    appId: "1:240537146507:web:b5243733cd975fdd08b08e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;