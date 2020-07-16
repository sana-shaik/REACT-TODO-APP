import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkPReuSvtS4iUDxV50ibMKj0e3Zng9m0E",
    authDomain: "todo-app-f10d0.firebaseapp.com",
    databaseURL: "https://todo-app-f10d0.firebaseio.com",
    projectId: "todo-app-f10d0",
    storageBucket: "todo-app-f10d0.appspot.com",
    messagingSenderId: "558238886621",
    appId: "1:558238886621:web:4cd27c7ce18a3e014bc934",
    measurementId: "G-5KKHWMY4YK"
  }
);

const db = firebaseApp.firestore();

export default db;