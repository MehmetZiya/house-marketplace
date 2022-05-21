import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAE45lexE8lzDyFBiIKdVjBthae8UeBtHU',
  authDomain: 'house-marketing-34013.firebaseapp.com',
  projectId: 'house-marketing-34013',
  storageBucket: 'house-marketing-34013.appspot.com',
  messagingSenderId: '552727539653',
  appId: '1:552727539653:web:4405d00953be28d35225ac',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
