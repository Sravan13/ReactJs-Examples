import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{

    static getDerivedStateFromProps(props,state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons)
            return true;
        else return false;
    }



    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
    }

    componentDidUpdate(){
        console.log('[Persons.js] componentDidUpdate');
    }

    render(){
        console.log('[Persons.js] rendering...');
        return ( this.props.persons.map((person,index)=>
        <Person  
        name={person.name} 
        age={person.age}
        key={Person.id}
        click={()=>{this.props.clicked(index)}}
        changed={(event)=>this.props.changed(event,person.id)} key={person.id} />
        ));
    }
}

export default Persons;

