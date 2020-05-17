import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
import {Link} from 'react-router-dom';
 
export default class SecondScreen extends Component {
  render() {
    const mystyle1 = {
      color: "white",
      padding: "10px",
      fontFamily: "Arial",
      alignItem: 'center',
    };
    return (
      <div>
        <OtpInput style = {mystyle1}
          onChange={otp => console.log(otp)}
          numInputs={6}
          separator={<span>-</span>}
        />
      </div>
    );
  }
}