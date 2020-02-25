import React, { Component } from 'react';
import './App.css';
import Person from  '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends Component {

  state = {
    person:[{id:1, name:"Manu", age:"8"},
            {id:2, name:"Shruthika", age:"6"}],
    otherProperty : "other",
    showPersons : false,
    showCockpit : true
  }

  deletePersonHandler = (personIndex)=>{
    //const persons = this.state.person.slice();
    const persons = [...this.state.person];
    persons.splice(personIndex,1);
    this.setState({person:persons});
  }

  nameChangeHandler = (event,id) =>{

    let personIdx = this.state.person.findIndex((person)=>{
      return person.id==id;
    });

    const person = {...this.state.person[personIdx]};
    person.name  = event.target.value;

    let persons = [...this.state.person];
    persons[personIdx] = person;

    this.setState({person:persons});

  }

  toggleName = ()=>{
    let showPerson = this.state.showPersons;
    this.setState({showPersons : !showPerson});
  }

  loginHandler = ()=>{
    this.setState({authenticated:true});
  }

  render() {

   /* const style = {
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
    }*/

    let persons = null;

    if(this.state.showPersons){
      persons = <Persons 
          persons={this.state.person} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>
      ;

   /* style.backgroundColor= 'red';
    style[':hover'] = {
      backgroundColor : 'salmon',
      color: 'black'
    }*/
      
    }



    return (
     
      <div className="App">
        <button onClick={()=>{this.setState({showCockpit : false})}}>Remove cockpit</button>

        <AuthContext.Provider 
        value={{authenticated:this.state.authenticated,
        login:this.loginHandler}}>
          
        { this.state.showCockpit ? (
        <Cockpit 
        showPersons={this.state.showPersons} 
        persons={this.state.person}
        clicked={this.toggleName}/>) : null}
        {persons} 
        </AuthContext.Provider>      
      </div>
      
    );
  }
}

export default App;
