import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
import {Link} from 'react-router-dom';
 
export default class SecondScreen extends Component {
  render() {
    return (
      <div>
        <OtpInput
          onChange={otp => console.log(otp)}
          numInputs={6}
          separator={<span>-</span>}
        />
      </div>
    );
  }
}