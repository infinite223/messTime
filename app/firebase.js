import { initializeApp } from 'firebase/app';
// Optionally import the services that you want to use
//import { Auth } from "firebase/auth";
//import {...} from "firebase/database";
//import {fir} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDHF3Pn_imNrB-MRAO6kQtsSLCB__12k-o",
    authDomain: "cars-projects-317ef.firebaseapp.com",
    projectId: "cars-projects-317ef",
    storageBucket: "cars-projects-317ef.appspot.com",
    messagingSenderId: "612500373363",
    appId: "1:612500373363:web:661b979a1e555b4b854f06"
};


export const app = initializeApp(firebaseConfig);