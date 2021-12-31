// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDgkwgJcJeIsqnDcEg852XdHRAn4KhqhAE',
  authDomain: 'nestfirebase-6c9df.firebaseapp.com',
  projectId: 'nestfirebase-6c9df',
  storageBucket: 'nestfirebase-6c9df.appspot.com',
  messagingSenderId: '33196918261',
  appId: '1:33196918261:web:4ddc30c9fc8dfb49f70cbc',
  measurementId: 'G-8M2KC5LZWK',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth(firebaseApp);

// Detect auth state
// onAuthStateChanged(auth, (user) => {
//   if (user != null) {
//     console.log('Logged in!');
//   } else {
//     console.log('No user');
//   }
// });

export default firebaseApp;
