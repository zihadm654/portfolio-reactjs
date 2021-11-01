import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwO36iIL2JBsrn-9XFWIiuKrMiuLP5pgU',
  authDomain: 'portfolio-react-c2b80.firebaseapp.com',
  projectId: 'portfolio-react-c2b80',
  storageBucket: 'portfolio-react-c2b80.appspot.com',
  messagingSenderId: '557270704860',
  appId: '1:557270704860:web:24bb5d9ec285e3f2d88a19',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
