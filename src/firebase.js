import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyABcUJCGYnerJPtfXKWJC0k7GSFYau4PXo",
    authDomain: "linkedin-clone-63adb.firebaseapp.com",
    projectId: "linkedin-clone-63adb",
    storageBucket: "linkedin-clone-63adb.appspot.com",
    messagingSenderId: "866499938246",
    appId: "1:866499938246:web:994227983872dcc77b94c7",
    // measurementId: "G-9PH8Y1ZSEM"
  };

//   Initialize
  const firebaseApp = firebase.initializeApp(firebaseConfig);

//   Get DB and Auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

//export the features
  export {db,auth};
