import React,{useEffect,useRef} from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(()=>{ 
        console.log('[Cockpit.js] useEffect');

        toggleBtnRef.current.click();

        return ()=>{
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    },[]);

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
    btnClass = classes.red;
    }
    

    if(props.persons.length <= 2){
     assignedClasses.push('red');
    }

    if(props.persons.length == 1){
     assignedClasses.push('bold');      
    }

    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>I'm Really Working</p>
            <h1>I'm React App</h1>
            <button className={btnClass} ref={toggleBtnRef}
            onClick={props.clicked} >Switch Name</button>
        </div>
    );
}

export default Cockpit;