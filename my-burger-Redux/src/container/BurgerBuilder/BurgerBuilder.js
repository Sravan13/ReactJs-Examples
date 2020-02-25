import React,{ Component } from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../hoc/axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';



class BurgerBuilder extends Component{

    state = { 
        purchasable : false,    
        purchasing : false,
        loading:false
    }

    componentDidMount(){
        console.log(this.props);

        axios.get("/ingredients.json")
        .then(response => {
            this.setState({ingredients: response.data});
        })
        .catch(error => {
            this.setState({error: true });
        });
               
    }

    purchaseHandler = ()=>{
        this.setState({purchasing:true})
    }

    purchaseCancelHandler = ()=>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = ()=>{

        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price='+this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search: '?'+queryString});
        
    }

    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum,el) => { return sum + el },0);

        //this.setState({purchasable: sum > 0})

        return (sum > 0);
    }



    render(){

        let purchasable = this.updatePurchaseState(this.props.ings);
        const disabledInfo = {
            ...this.props.ings
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = (
            <OrderSummary 
                ingredients={this.props.ings}
                price={this.props.price.toFixed(2)}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}/>
        );

        if (this.props.ings){
            orderSummary = <Spinner/>;
        }

        return (           
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.props.ings}/>
                <BuildControls 
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler}
                    price={this.props.price}/>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT,ingredientName: ingName}),
        onIngredientRemoved : (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT,ingredientName: ingName}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));