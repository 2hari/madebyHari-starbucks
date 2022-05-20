import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'made-by-hari-starbucks.firebaseapp.com',
  projectId: 'made-by-hari-starbucks',
  storageBucket: 'made-by-hari-starbucks.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGESENDERID,
  appId: process.env.REACT_APP_APPID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
