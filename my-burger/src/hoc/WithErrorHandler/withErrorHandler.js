import React,{Component} from 'react';
import Aux from '../Auxilary/Auxilary';
import Model from '../../components/UI/model/Model';
import { render } from '@testing-library/react';
import Axios from 'axios';


const WithErrorHandler = (WrapperComponent,axios) => {
    return class  extends Component {

        state= {
            error : null
        };

    componentDidMount(){
        axios.interceptors.request.use(req =>{
            this.setState({error:null});
            return req;
        })
        axios.interceptors.response.use(res=>res,error=>{
            this.setState({error:error});
        });
        
    }

    errorConfirmHandler = () =>{
        this.setState({error:null});
    }

        render() {
            return (
                <Aux>
                    <Model show={this.state.error}
                    modalClosed={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message: null}
                    </Model>
                <WrapperComponent {...this.props}/>
                </Aux>
            );
        }
    }
}

export default WithErrorHandler;