import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD8GziWusHrXpyjU3yqmmz_OR25j0mjMGE",
    authDomain: "food-f1d69.firebaseapp.com",
    databaseURL: "https://food-f1d69-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "food-f1d69",
    storageBucket: "food-f1d69.appspot.com",
    messagingSenderId: "265558851254",
    appId: "1:265558851254:web:a5e37a0daba5df1ecf7017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }