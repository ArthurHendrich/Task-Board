import firebase from 'firebase/app'
import 'firebase/firestore'

let firebaseConfig = {
  apiKey: "AIzaSyC8eLKsjKly9qt4UPYAM0ljgVombUfZUsM",
  authDomain: "boardapp-4fd5d.firebaseapp.com",
  projectId: "boardapp-4fd5d",
  storageBucket: "boardapp-4fd5d.appspot.com",
  messagingSenderId: "120012020058",
  appId: "1:120012020058:web:55c635535887431ce9bb63",
  measurementId: "G-LSDSCBD8HT"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export default firebase;