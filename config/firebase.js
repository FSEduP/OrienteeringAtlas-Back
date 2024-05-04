const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyCLqtbu2zWKlDa6FXmXTROs5eP5aFsWpN0",
    authDomain: "orienteeringatlas.firebaseapp.com",
    projectId: "orienteeringatlas",
    storageBucket: "orienteeringatlas.appspot.com",
    messagingSenderId: "734018310701",
    appId: "1:734018310701:web:7bfaebcccf07ea0ffc1ea4",
    measurementId: "G-C3NM1VPQM5"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

module.exports = {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
};