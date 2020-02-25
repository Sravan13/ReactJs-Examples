import React,{useEffect,useRef,useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

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
           {/* <AuthContext.Consumer>
            {context => <button onClick={context.login}>Log in</button>}   
               </AuthContext.Consumer>  */}

{        <button onClick={authContext.login}>Log in</button>}   
        </div>
    );
}

export default Cockpit;