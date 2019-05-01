import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCVM8lQHuaPxojjz9XfsQN2Yml7hqZ_8uM",
  authDomain: "todoapp-1a154.firebaseapp.com",
  databaseURL: "https://todoapp-1a154.firebaseio.com",
  projectId: "todoapp-1a154",
  storageBucket: "todoapp-1a154.appspot.com",
  messagingSenderId: "983556284411"
};

const fire = firebase.initializeApp(config);

export default fire;