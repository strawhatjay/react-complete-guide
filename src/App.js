import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jordan', age: 29 },
      { name: 'Austin', age: 25 },
      { name: 'Josh', age: 28 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = () => {
    // console.log('was clicked')
    // DON'T DO THIS: this.state.persons[0].name = "Yorudan";
    this.setState({
      persons: [
        { name: 'Yorudan', age: 29 },
        { name: 'Austin', age: 25 },
        { name: 'Rat', age: 28 }
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 29 },
        { name: 'Austin', age: 25 },
        { name: 'Rat', age: 28 }
      ]
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        { 
          this.state.showPersons === true ? 
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                changed={this.nameChangedHandler}> My Hobbies: Coding!</Person>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} />
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}  />
            </div> : null
          }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Does this work now?'));
  }
}

export default App;
