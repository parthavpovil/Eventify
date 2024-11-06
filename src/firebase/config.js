import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAm3naCrlmBu7N4yhJzCcMzbGCu5FOdevE",
  authDomain: "eventify-27f3e.firebaseapp.com",
  projectId: "eventify-27f3e",
  storageBucket: "eventify-27f3e.firebasestorage.app",
  messagingSenderId: "972088249318",
  appId: "1:972088249318:web:b55765c5ab2e74e1602427",
  measurementId: "G-GFMYCRL0J4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configure auth settings
auth.useDeviceLanguage();

// Configure Google Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('email');
googleProvider.addScope('profile');

export { auth, googleProvider }; 