import React, { Component } from "react";
import { fetchOrders, fetchOrderRecipes, fetchRecipeIngredientNames } from '../actions/actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';

var moment = require('moment');

class OrdersList extends Component {
    componentDidMount(){
        console.log(this.props);
        this.props.fetchOrders();
        //let shoppingList= this.props.shoppingList.shoppingList
        //this.props.fetchOrderRecipes();
        console.log(this.props);
    }


    findOrderRecipes(mealTypeId, guestCount){
        console.log('id',mealTypeId);
        console.log('guests:', guestCount);
        let order = {}
        order.orderId= mealTypeId
        order.GuestCount= guestCount
        this.props.fetchOrderRecipes(order);
        
        console.log(this.props);
        //this.props.fetchRecipeIngredientNames(recipeIngredientId);
        
    }

    renderShoppinglist(){
        console.log(this.props.shoppingList);
        let shoppingList= this.props.shoppingList
        console.log('shopping list:',shoppingList);
        if(shoppingList != undefined) {
            return shoppingList.map(item=>(
            <tr>
                <td>{item.ingredient}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
           </tr>
        ))
        }
    }

    renderOrders() {
        console.log(this.props.orders.orders);
        let orders = this.props.orders.orders
        return orders.map(o=>(
            <div>
                <ListGroup.Item>
                    <a
                    href='#'
                    onClick={e => {
                        e.preventDefault(this.findOrderRecipes(o.mealType._id, o.GuestCount));
                    }}>
                        {o.mealType.mealType}
                    </a>
                    <div>
                        Event Date: {moment(o.EventDate).format('MMMM Do YYYY, h:mm:ss a')}
                    </div>
                    <div>
                        Guest Count: {o.GuestCount}
                    </div>
                </ListGroup.Item>
            </div>
        ))
    }

    render() {
        return(
            <div className= 'row'>
                <div className= 'col'>
                    <div>
                        <h2>Orders Here</h2>
                        <ListGroup>
                            {this.renderOrders()}
                        </ListGroup>
                    </div>
                </div>
                <div className= 'col'>
                        <h2>Shopping List</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Ingredient</th>
                                <th>Quantity</th>
                                <th>Units</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderShoppinglist()}
                            </tbody>
                        </Table>
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