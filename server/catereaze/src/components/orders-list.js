import React, { Component } from "react";
import { fetchOrders, fetchOrderRecipes, fetchRecipeIngredientNames } from '../actions/actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class OrdersList extends Component {
    componentDidMount(){
        console.log(this.props);
        this.props.fetchOrders();
        console.log(this.props);
    }

    findOrderRecipes(mealTypeId, guestCount){
        console.log('id',mealTypeId);
        console.log('guests:', guestCount);
        let order = {}
        order.orderId= mealTypeId
        order.GuestCount= guestCount
        let recipeIngredientId;
        this.props.fetchOrderRecipes(order).then(response =>{
            this.props.fetchRecipeIngredientNames(response.payload.data.Recipes)
        });
        
        console.log(this.props);
        //this.props.fetchRecipeIngredientNames(recipeIngredientId);
        
    }

    renderShoppinglist(){
        console.log(this.props.shoppingList);
        let shoppingList= this.props.shoppingList
        // return shoppingList.map(s=>(
        //     <div>
        //         <ul>

        //         </ul>
        //     </div>
        // ))
    }

    renderOrders() {
        console.log(this.props.orders.orders);
        let orders = this.props.orders.orders
        return orders.map(o=>(
            <div>
                <a
                href='#'
                onClick={e => {
                    e.preventDefault(this.findOrderRecipes(o.mealType._id, o.GuestCount));
                  }}>
                    {o.mealType.mealType}
                </a>
                <div>
                 Event Date: {o.EventDate}
                </div>
                <div>
                Guest Count: {o.GuestCount}
                </div><br />
            </div>
        ))
    }

    render() {
        return(
            <div className= 'row'>
                <div className= 'col'>
                    <div>
                        <h2>Orders Here</h2>
                        {this.renderOrders()}
                    </div>
                </div>
                <div className= 'col'>
                        <h2>Shopping List</h2>
                        {this.renderShoppinglist()}
                </div>
            </div>
        )
    }
}

function mapStateToProps ({shoppingList, orders}) {
    return {
        shoppingList,
        orders
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { fetchOrders, fetchOrderRecipes, fetchRecipeIngredientNames }, dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList)