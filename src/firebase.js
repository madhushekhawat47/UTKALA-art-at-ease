// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// const firebaseConfig = {
//     apiKey: "AIzaSyC2pG_M9gACRK2S1KqFAwa_IWEHDl7gAPc",
//     authDomain: "utkala-485f5.firebaseapp.com",
//     projectId: "utkala-485f5",
//     storageBucket: "utkala-485f5.appspot.com",
//     messagingSenderId: "556470115971",
//     appId: "1:556470115971:web:f8990de143049c2b1e05b6",
//     measurementId: "G-NG895P2C7D"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = firebaseApp.firestore();

// export { db, auth };
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2pG_M9gACRK2S1KqFAwa_IWEHDl7gAPc",
    authDomain: "utkala-485f5.firebaseapp.com",
    projectId: "utkala-485f5",
    storageBucket: "utkala-485f5.appspot.com",
    messagingSenderId: "556470115971",
    appId: "1:556470115971:web:f8990de143049c2b1e05b6",
    measurementId: "G-NG895P2C7D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };
