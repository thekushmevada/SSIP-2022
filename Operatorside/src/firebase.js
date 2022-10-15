import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8l4I0UQDTpApi3VHhzIRTkduRxhrjhbU",
  authDomain: "evsp-23.firebaseapp.com",
  projectId: "evsp-23",
  storageBucket: "evsp-23.appspot.com",
  messagingSenderId: "935954093639",
  appId: "1:935954093639:web:3503f606a1713b28640362"
});

var db = firebaseApp.firestore();

export { db };