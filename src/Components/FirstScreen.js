import React, { Component } from 'react'
import SecondScreen from './SecondScreen';
import {Link} from 'react-router-dom';

class FirstScreen extends Component {
    constructor(props) {
        super(props)
        this.state= { 
            render: false,
            Mobile: 0,
        }
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef)
      }
      add = () => {
        this.setState({render : !this.state.render})
    }

    handleChange= (event) =>{
        this.setState({Mobile : event.target.value})
    }

    handleSubmit = event =>{
      //  alert(this.state.Mobile)
        this.setState({render : !this.state.render})
    }
    render() {
        
        
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            alignItem: 'center',
          };
          const mystyle1 = {
            color: "white",
            padding: "10px",
            fontFamily: "Arial",
            alignItem: 'center',
          };
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
               
                <h1 style={mystyle} > Admit Kard </h1>
                <h2 style={mystyle1}> Enter Your Mobile Number</h2>
                <input  type = "text" ref = {this.inputRef}  onChange = {this.handleChange}/>
                <Link to="/otp" className="nav-link">
                <button type = "submit" style={mystyle}> Send OTP </button>
            </Link>
               
                
                { this.state.render && <SecondScreen number = {this.state.Mobile}/> }

                     
                </form>
 
            </div>
        )
    }
}

export default FirstScreen
