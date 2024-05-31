// Import necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4uqcO99dlkSNHqi0HQZr2Adh3NFxOYR8",
  authDomain: "uiux-courseenquiryform.firebaseapp.com",
  databaseURL: "https://uiux-courseenquiryform-default-rtdb.firebaseio.com",
  projectId: "uiux-courseenquiryform",
  storageBucket: "uiux-courseenquiryform.appspot.com",
  messagingSenderId: "332629674053",
  appId: "1:332629674053:web:002d0f769df1deb8373b2c",
  measurementId: "G-B17EZ6MNRD"
};

// Initialize Firebase
let firebaseApp; // Define firebaseApp variable

try {
  // Attempt to initialize Firebase app
  firebaseApp = initializeApp(firebaseConfig);
} catch (error) {
  // Handle initialization errors
  console.error("Error initializing Firebase:", error.message);
}

// Initialize Firebase Analytics (if supported)
let analytics = null;

if (typeof window !== 'undefined') {
  const initializeAnalytics = async () => {
    if (await isSupported()) {
      analytics = getAnalytics(firebaseApp);
    }
  };

  initializeAnalytics().catch(error => {
    console.error("Error initializing Firebase Analytics:", error.message);
  });
}

// Initialize Firebase Database
const database = getDatabase(firebaseApp);

// Export firebaseApp, analytics, and database
export { firebaseApp, analytics, database };
