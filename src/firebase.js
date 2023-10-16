import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD1NCUeZI4hqKJzW7c9UuvPwLp9pFhnqpU",
    authDomain: "linkedin-aa5d6.firebaseapp.com",
    projectId: "linkedin-aa5d6",
    storageBucket: "linkedin-aa5d6.appspot.com",
    messagingSenderId: "237860514909",
    appId: "1:237860514909:web:182b062f7503f19b3871b4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };