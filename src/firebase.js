import firebase from 'firebase';

firebase.initializeApp({
        apiKey: "AIzaSyBuMu2AvRmWxSexQdft57iUPHs82aiLtSM",
        authDomain: "contact-form-7f2ee.firebaseapp.com",
        projectId: "contact-form-7f2ee",
        storageBucket: "contact-form-7f2ee.appspot.com",
        messagingSenderId: "822481051913",
        appId: "1:822481051913:web:987a9ca375710540d3f3d8"
})

const db = firebase.firestore();
export {db}