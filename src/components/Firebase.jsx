import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBJaSeHbd1ViiZKO4onMgUf8Gr4WjZUTIs",
    authDomain: "secretrecipe-378417.firebaseapp.com",
    projectId: "secretrecipe-378417",
    storageBucket: "secretrecipe-378417.appspot.com",
    messagingSenderId: "1089696147349",
    appId: "1:1089696147349:web:bde7cc08d721b974b4389c",
    measurementId: "G-3WFWRWQFDR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;

