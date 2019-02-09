import React, {Component} from 'react';
import { Link, Router } from "react-router-dom";
import "../Forms/SignUpForm.css";

class SignUpForm extends Component {
    render() {
    return (
        <form className="signUpForm">
            <value>First Name</value>
            <input type="text" name="firstName"></input><br></br>
            <value>Last Name</value>
            <input type = "text" name="lastName"></input><br></br>
            <value>Email</value>
            <input type="email" name="email"></input><br></br>
            <value>Address</value>
            <input type="text" name="address"></input><br></br>
            <value>City</value>
            <input type="text" name="city"></input><br></br>
            <value>State</value>
            <input type="text" name="state"></input><br></br>
            {/* add link here  */}
            <button className="next" type="Submit" name="submit">Next</button>
        </form>
    )
    }    
}

export default SignUpForm