import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from  './Person/Person'

class App extends Component {

  state = {
    person:[{name:"Manu",age:"8"},
            {name:"Shruthika",age:"6"}],
    otherProperty : "other"
  }

  switchPersonHandler = (newName)=>{
    this.setState({
          person:[
            {name:newName,age:"9"},
            {name:"Shruthika",age:"7"}]
    });
  }

  nameChangeHandler = (event) =>{
    this.setState({
      person:[
        {name:event.target.value,age:"9"},
        {name:"Shruthika",age:"7"}]
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '18px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>I'm React App</h1>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}
          click={this.switchPersonHandler.bind(this,'Manasvi')}
          changed={this.nameChangeHandler}>
            Racing
        </Person>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}>Playing</Person>
        <Person name="Max" age="30"/>
        <button style={style} onClick={this.switchPersonHandler.bind(this,'Sravan')} >Switch Name</button>
      </div>
    );
  }
}

export default App;
