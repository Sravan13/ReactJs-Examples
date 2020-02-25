import React, { Component } from 'react';
import Radium,{StyleRoot} from 'radium';
import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoudary/ErrorBoundary';
import Person from  './components/Persons/Person/Person-ErrorBoundary'

class App extends Component {

  state = {
    person:[{name:"Manu",age:"8"},
            {name:"Shruthika",age:"6"}],
    otherProperty : "other",
    showPersons : false
  }

  deletePersonHandler = (personIndex)=>{
    //const persons = this.state.person.slice();
    const persons = [...this.state.person];
    persons.splice(personIndex,1);
    this.setState({person:persons});
  }

  nameChangeHandler = (event,id) =>{

    let personIdx = this.state.person.findIndex((person)=>{person.id==id});

    const person = {...this.state.person[personIdx]};
    Person.name  = event.target.value;

    let persons = {...this.state.person};
    persons[personIdx] = person;

    this.setState({person:persons});

  }

  toggleName = ()=>{
    let showPerson = this.state.showPersons;
    this.setState({showPersons : !showPerson});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '18px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor:'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
      <div> {
     this.state.person.map((person,index)=>
       <ErrorBoundary> <Person  name={person.name} 
        age={person.age}
        click={()=>{this.deletePersonHandler(index)}}
        changed={(event)=>this.nameChangeHandler(event,person.id)} key={person.id} /></ErrorBoundary>
        )
      }
      </div>);

    style.backgroundColor= 'red';
    style[':hover'] = {
      backgroundColor : 'salmon',
      color: 'black'
    }
      
    }

    const classes = [];

    if(this.state.person.length <= 2){
      classes.push('red');
    }

    if(this.state.person.length == 1){
      classes.push('bold');      
    }

    return (
      <StyleRoot>
      <div className="App">
        <p className={classes.join(' ')}>I'm Really Working</p>
        <h1>I'm React App</h1>
        <button style={style} onClick={this.toggleName} >Switch Name</button>
        {persons}       
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
