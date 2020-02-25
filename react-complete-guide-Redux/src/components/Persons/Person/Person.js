import React,{Component} from 'react';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component{

   constructor(props){
      super(props);
      this.inputDomElement = React.createRef();
   }

   static contextType = AuthContext;

   componentDidMount(){
      //this.inputElement.focus()
      this.inputDomElement.current.focus();
      console.log(this.context.authenticated);
   }

   render(){
        return (        
                <div className="Person" style={classes.Person}>
               {/* <AuthContext.Consumer>
                  {context => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
               </AuthContext.Consumer> */}

               {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
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