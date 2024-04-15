import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCU-d1jKoM1Wpi350AhKS-p07Uu6LY3iBo",
    authDomain: "maps-api-c6ed0.firebaseapp.com",
    projectId: "maps-api-c6ed0",
    storageBucket: "maps-api-c6ed0.appspot.com",
    messagingSenderId: "610202265700",
    appId: "1:610202265700:web:66987b73f7ad9450ef5771",
    measurementId: "G-GEYDPH5LHF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);