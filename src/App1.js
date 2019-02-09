import React, { Component } from 'react';
import './App.css';
import SignUpForm from "../src/components/Forms/SignUpForm";


class App1 extends Component {
    state = {
        showData: false
    }

    toggleForm = () => {
        const doesShow = this.state.showData;
        this.setState({showData: !doesShow}); 
    }
    
    render() {
        let form1 = null;
        if (this.state.showData) {
            form1 = (
                <div>
                  <SignUpForm />
                </div>
            )
        }
        return (
            <div className = "SignUp">
                <h1>Welcome to Summi!</h1>
                <p>Your subscription service market.</p>
                <button onClick = {this.toggleForm} className = "letsBegin">Let's Begin!</button>
                 {form1}
            </div>
        )
    }

}


export default App1;
