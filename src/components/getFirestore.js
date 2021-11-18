import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDr8upYQODcBWkj8PwbXHzvjcSXafnpYDA",
    authDomain: "react-js-podium.firebaseapp.com",
    projectId: "react-js-podium",
    storageBucket: "react-js-podium.appspot.com",
    messagingSenderId: "142440601665",
    appId: "1:142440601665:web:b3393b88ad5d41f0194ec0"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore(){
      return firebase.firestore(app)
  }