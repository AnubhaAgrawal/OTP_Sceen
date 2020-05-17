// Import FirebaseAuth and firebase.
import React , { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyA8mLNugplWZFXG1mTSe9kv4YXTpsaPk4I',
  authDomain: 'fir-auth-f5663.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);
 
export default class SignInScreen extends React.Component {
 
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  
 
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
 
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
 
  render() {
   
      return (
        <div>
          <p>Please send OTP:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      )
    
    
  }
}