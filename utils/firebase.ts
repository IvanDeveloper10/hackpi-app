'use client';

import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAr0KseG0YAHvUiz9Ckat3hTrtvdr9VFLk',
  authDomain: 'hackpi-app.firebaseapp.com',
  projectId: 'hackpi-app',
  storageBucket: 'hackpi-app.firebasestorage.app',
  messagingSenderId: '62962994310',
  appId: '1:62962994310:web:391120a7f2f2791f691507',
  measurementId: 'G-G4DL3R1DQ5'
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { app };
