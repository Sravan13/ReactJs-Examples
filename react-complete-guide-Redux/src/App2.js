import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from  './Person/Person'

const app = (props) => {

   const [personsState,setPersonsState] = useState({
      person:[{name:"Manu",age:"8"},
              {name:"Shruthika",age:"6"}],
      otherPersonState : "other Person State value"
    });

    const [otherState,setOtherState] = useState({otherState :"other state value"});
    const [someOtherState,setSomeOtherState] = useState("someother state value");

   console.log(personsState,otherState,someOtherState);
   const switchPersonHandler = ()=>{
      setPersonsState({
            person:[
              {name:"Manu",age:"9"},
              {name:"Shruthika",age:"7"}
            ],
            otherPersonState : personsState.otherPersonState
      });
    } 

    return (
      <div className="App">
        <h1>I'm React App</h1>
        <Person 
          name={personsState.person[0].name} 
          age={personsState.person[0].age}/>
        <Person 
          name={personsState.person[1].name} 
          age={personsState.person[1].age}>Playing</Person>
        <Person name="Max" age="30"/>
        <button onClick={switchPersonHandler} >Switch Name</button>
      </div>
    );
  
}

export default app;


