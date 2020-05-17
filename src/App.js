import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import FirstScreen from './Components/FirstScreen';
import SignInScreen from './Components/SignInScreen';
import SecondScreen from './Components/SecondScreen';

function App() {

  return (
    <React.Fragment>
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={FirstScreen}/>
        <Route path="/otp" component={SecondScreen}/>
       
     </Switch>
     </BrowserRouter>


     
    </React.Fragment>
  );
}

export default App;
