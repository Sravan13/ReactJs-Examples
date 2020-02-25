import React,{Component} from 'react';
import classes from './Person.css';

class Person extends Component{

   constructor(props){
      super(props);
      this.inputDomElement = React.createRef();
   }

   componentDidMount(){
      //this.inputElement.focus()
      this.inputDomElement.current.focus();
   }

   render(){
        return (        
                <div className="Person" style={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name}  age is {this.props.age} , favourite number is {Math.floor(Math.random()*30)}</p>
                <p>Hobbies : {this.props.children}</p>
                <input type="text" 
                onChange={this.props.changed} 
                value={this.props.name}
                /*ref={(inputEle) => {this.inputElement = inputEle}}*/
                ref={this.inputDomElement}
                />
                </div>               
               );
   }


}

export default Person;