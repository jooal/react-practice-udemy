import React, { Component } from 'react';
import './App.css';
import Card from "./components/Cards/Card";
import Validation from '../src/components/Validation/Validation';
import Char from "../src/components/Char/Char";

class App extends Component {
  state = {
    persons: [
      {  id:"1", name: 'Max', age: 28 },
      {  id:"2", name: 'Bob', age: 22 },
      {  id:"3", name: 'Tim', age: 27 }
    ],

    showPersons: false, 
    userInput: ''
  }


  // should use const functions as much as possible, use state carefully and only when necessary bcuz more states in yoru app equals more uncertainty 
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
     ...this.state.persons[personIndex] ///create copy of array with spread operator, remember dont want to mutate original array
    }; 
    person.name = event.target.value; //this is udpating copy, not original

    const persons = [...this.state.persons];
    persons[personIndex]=person; 

    this.setState({persons:persons})
   } //set state to updated prsons array, which is copy of original

    //  DONT DO THIS: this.state.persons[0].name = "Maximus";

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons.slice(); //slice creates copy of original array so that we are not mutating original data
  //can also do const persons = [...this.state.persons];
  persons.splice(personIndex, 1); //splicing the persons array and finding it by person index and removing 1
  this.setState({persons: persons});
}


toggleForm = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

lengthHandler = (event) => {
  this.setState({userInput: event.target.value})
}

deleteCharHandler = (index) => {
const text = this.state.userInput.split(''); 
text.splice(index, 1);
const updatedText = text.join('');
this.setState({userInput:updatedText});
}


  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char 
      character={char} 
      key={index}
      clicked={() => this.deleteCharHandler(index)}/>
    });

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {//mapping the array into Card component 
            return <Card 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id} //need unique key to compare elements and update dom where changes are being made
            changed= {(event) => this.nameChangedHandler(event, person.id)}
            /> 
          })}
          <input 
          type="text" 
          onChange={this.lengthHandler} 
          value={this.state.userInput} />
          <p>{this.state.userInput}</p>
          <Validation 
          inputLength={this.state.userInput.length}
           />
          {charList}
        </div>

      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.toggleForm} >Toggle</button>
        {/* using arrow function in onclick, this may fire over and over so use bind method if possible  */}
        {/* dont add () after handler event or else fires as soon as react loads */}
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') );
    //adding classname allows css to be applied
    //div is the parent, can add as many children 
    //h1 is children of div and nested in div
    //this line of code is exact same as the return code JSX above but is not efficient 
  }
}

export default App;
