import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBYry89T8etRZ1BaK44mHTN_QT06cq1a-Q',
    authDomain: 'flex-finance-3c0cb.firebaseapp.com',
    projectId: 'flex-finance-3c0cb',
    storageBucket: 'flex-finance-3c0cb.firebasestorage.app',
    messagingSenderId: '172204487562',
    appId: '1:172204487562:web:1097ce90d621d51a290e73',
};

const app = initializeApp(firebaseConfig);
export default app;