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
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); // If already initialized, use that one
}

const database = getDatabase(app);

let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { database, analytics};
