import React from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import FirstScreen from './Components/FirstScreen';
import SignInScreen from './Components/SignInScreen';
import SecondScreen from './Components/SecondScreen';

function App() {

  return (
    <React.Fragment>
    <FirstScreen/>
     {/* <Switch>
      <Route exact path="/" component={FirstScreen}/>
        <Route path="/productlist" component={SecondScreen}/>
       
     </Switch>*/}
     
    </React.Fragment>
  );
}

export default App;
