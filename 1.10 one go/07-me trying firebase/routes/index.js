const express = require('express');
const router = express.Router();
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA1t8O7l7RbdECrBLf1p7-Evbx7R4Avdv4",
  authDomain: "fir-first-time-tbh.firebaseapp.com",
  projectId: "fir-first-time-tbh",
  storageBucket: "fir-first-time-tbh.appspot.com",
  messagingSenderId: "306202127668",
  appId: "1:306202127668:web:167efbd52d2706d62d8961"
};

firebase.initializeApp(firebaseConfig);

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/profile', isAuthenticated, (req, res) => {
  res.render('profile');
});

router.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registered successfully
      res.redirect('/profile');
    })
    .catch((error) => {
      // Handle errors
      console.error('Error registering user:', error);
      res.status(500).send('Error registering user');
    });
});

router.post('/login', (req, res) => {
  // Login code
});

router.get('/logout', (req, res) => {
  firebase.auth().signOut()
    .then(() => {
      // Sign-out successful
      res.redirect('/');
    })
    .catch((error) => {
      // Handle errors
      console.error('Error signing out:', error);
      res.status(500).send('Error signing out');
    });
});

function isAuthenticated(req, res, next) {
  // Check if user is authenticated using Firebase authentication
  const user = firebase.auth().currentUser;

  if (user) {
    // User is authenticated, proceed to the next middleware or route handler
    next();
  } else {
    // User is not authenticated, redirect to login page or send an error response
    res.status(401).send("Unauthorized");
  }
}

module.exports = router;
