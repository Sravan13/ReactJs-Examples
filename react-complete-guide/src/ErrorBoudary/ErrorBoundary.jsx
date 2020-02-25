import React, { Component } from 'react';

class ErrorBoundary extends Component{

    constructor(props){
        super(props);
    }

    state = {
        hasError : false,
        errorMessage:''
    }

    componentDidCatch =  (error,info)=>{
        this.setState({hasError:true,errorMessage:error});
    }
    
    render(){

        if(this.state.hasError){
            return <h1>{this.state.hasError}</h1>
        }else{
            return this.props.children;
        }

    }

}

export default ErrorBoundary;