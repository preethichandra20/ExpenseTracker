import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArgm0dOf2LHVwbWDMwainvbPK4jF2n1bc",
  authDomain: "expense-tracker-5109c.firebaseapp.com",
  databaseURL: "https://expense-tracker-5109c-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-5109c",
  storageBucket: "expense-tracker-5109c.appspot.com",
  messagingSenderId: "270095879894",
  appId: "1:270095879894:web:a962b8a8f97b55fde28377"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

