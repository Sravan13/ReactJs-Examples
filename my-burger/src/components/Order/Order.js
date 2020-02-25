import React from 'react';
import './Order.css';

const order = (props) => {
   const ingredients =  []; 

   console.log(props.ingredients);
   for(let ingredientName in props.ingredients){
    ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }       
        );
   }

   console.log(ingredients);
   

   const ingredientOutput = ingredients.map(ig => {
    return <span
            style={{textTransform:'capitalize',
            display: 'inline-block'}}
            key={ig.name}>{ig.name}:{ig.amount} </span>
   });

   

   return (<div className={"Order"}>
        <p>ingredients: {ingredientOutput}</p>
    <p>Price <strong>USD {props.price}</strong></p>
    </div>);
}

export default order;