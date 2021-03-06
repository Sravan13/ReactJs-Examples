import React from 'react';
import Radium,{StyleRoot} from 'radium';
import './Person.css';

var person = (props)=>{

const style = {
        '@media(min-width: 500px)' : {
                width : '450px'
        }
}

const rnd = Math.random();

return (
        
        <div className="Person" style={style}>
        <p onClick={props.click}>I'm {props.name}  age is {props.age} , favourite number is {Math.floor(Math.random()*30)}</p>
        <p>Hobbies : {props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
       
       );
}

export default person;