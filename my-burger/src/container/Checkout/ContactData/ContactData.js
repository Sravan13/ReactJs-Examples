import React,{ Component } from "react";
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../hoc/axios-orders';
class ContactData extends Component{

    state = {
        name:'',
        email:'',
        address: {
            street: '',
            postalCode:''
        },
        loading: false
    }

    orderhandler = (e) => {
        e.preventDefault();

        this.setState({loading : true});
        const order = {
            ingredients : this.props.ingredients,
            price : this.props.price,
            customer : {
                name : 'Max Schwarzmuller',
                address : {
                    street : 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            delivertMethod: 'fastest'
        }

        axios.post('/orders.json',order)
        .then(response => {
            console.log(response);
            this.setState({loading:false});
            this.props.history.push('/');
        })
        .catch(error => {
            console.log(error);
            this.setState({loading:false})
        });

        console.log(this.props.ingredients);
        
    }

    render(){
        let form = (
            <form>
            <input className={"Input"} type="text" name="name" placeholder="Your Name"/>
            <input className={"Input"} type="email" name="email" placeholder="Your Mail"/>
            <input className={"Input"} type="text" name="street" placeholder="Street"/>
            <input className={"Input"} type="text" name="postal" placeholder="Postal Code"/>
            <Button btnType="Success" clicked={this.orderhandler}>ORDER</Button>
            </form>
        );

        if(this.state.loading){
            form = <Spinner/>
        }
        return (
            <div>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }

}

export default ContactData;