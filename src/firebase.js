import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBnMn5xMCyREK-UKGy4nuZApQuRfud_wzI",
    authDomain: "czat-5cd2c.firebaseapp.com",
    projectId: "czat-5cd2c",
    storageBucket: "czat-5cd2c.appspot.com",
    messagingSenderId: "789175740579",
    appId: "1:789175740579:web:f96aeda5500c5766cbf716",
    measurementId: "G-MY88BZ7JJJ"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();

  export default db;