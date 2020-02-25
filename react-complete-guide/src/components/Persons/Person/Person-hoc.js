import React,{Component} from 'react';
import Aux from '../../../hoc/Auxilary';
import classes from './Person.css';
import hocWrapComponent from '../../../hoc/hocWrapComponent';

class Person extends Component{

   render(){
        return (  

                <Aux>
                {/* <div className="Person" style={classes.Person}> */}
                <p onClick={this.props.click}>I'm {this.props.name}  age is {this.props.age} , favourite number is {Math.floor(Math.random()*30)}</p>
                <p>Hobbies : {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                {/* </div>  */}
                </Aux>

               );
   }


}

export default hocWrapComponent(Person,classes.Person);