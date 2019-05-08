import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDKTtK-9mvNRW0nMZr9_BF2PeeV_jt9Er0",
  authDomain: "listly-app.firebaseapp.com",
  databaseURL: "https://listly-app.firebaseio.com",
  projectId: "listly-app",
  storageBucket: "listly-app.appspot.com",
  messagingSenderId: "418874969031",
  appId: "1:418874969031:web:278658ac99340e9f"
};

const fire = firebase.initializeApp(firebaseConfig);

const fireDB = fire.database()

export { fire, fireDB };