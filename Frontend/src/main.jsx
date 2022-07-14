import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app';
import { App } from './App';

const firebaseConfig = {
  apiKey: "AIzaSyAs6YJRRhv02pU-kRP7SddMMtTlwrPWkJo",
  authDomain: "gen-wp-b007a.firebaseapp.com",
  projectId: "gen-wp-b007a",
  storageBucket: "gen-wp-b007a.appspot.com",
  messagingSenderId: "467811900713",
  appId: "1:467811900713:web:60e82e1573f6dd06792b38",
  measurementId: "G-E39N7D6JBW"
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
