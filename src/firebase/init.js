import firebase from 'firebase'
import firestore from 'firebase/firestore'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBUiErmzqwHQcCh9rtzu5c1MFpdLP1yxdw",
    authDomain: "practice-f6ba9.firebaseapp.com",
    databaseURL: "https://practice-f6ba9.firebaseio.com",
    projectId: "practice-f6ba9",
    storageBucket: "practice-f6ba9.appspot.com",
    messagingSenderId: "1070557051638"
  };
const firebaseApp = firebase.initializeApp(config);
 
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()