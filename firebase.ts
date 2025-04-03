import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Remplacez cette configuration par vos propres identifiants Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "your_firebase_api_key",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "your-app.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "your-project-id",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "your-storage-bucket",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "your-messaging-sender-id",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "your-app-id"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Exporter les services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
