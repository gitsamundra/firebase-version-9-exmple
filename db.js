const { initializeApp } = require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyDnerof6_g6i9lslBk7m0316M4pAtCuKew",
    authDomain: "profile-project-5ec4b.firebaseapp.com",
    databaseURL: "https://profile-project-5ec4b-default-rtdb.firebaseio.com",
    projectId: "profile-project-5ec4b",
    storageBucket: "profile-project-5ec4b.appspot.com",
    messagingSenderId: "249230470441",
    appId: "1:249230470441:web:5b762de87cdf165fc2db38",
    measurementId: "G-ZXH1WGRZPT"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;