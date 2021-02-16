import firebase from 'firebase';

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID
  apiKey: "AIzaSyBT3O3g1p7ESdqzgLol9t77LFm_IPy_MfU",
  authDomain: "appliance-cfb05.firebaseapp.com",
  projectId: "appliance-cfb05",
  storageBucket: "appliance-cfb05.appspot.com",
  messagingSenderId: "1003295059843",
  appId: "1:1003295059843:web:7a54f1ec07b560ae7150b6"
});

export const auth = app.auth();
export const db = app.firestore();
