// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBXrQ-iPVOgLrDmO2oZmZSdbhNLrzhgAok",
  authDomain: "cc-project-cc898.firebaseapp.com",
  databaseURL: "https://cc-project-cc898-default-rtdb.firebaseio.com",
  projectId: "cc-project-cc898",
  storageBucket: "cc-project-cc898.appspot.com",
  messagingSenderId: "493155826741",
  appId: "1:493155826741:web:67454bff2d1877dba9c57c"
};

// Initialize Firebase
const app = firebase.initializeApp(config);
const db = firebase.firestore()
const auth = firebase.auth();
