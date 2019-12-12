import React, { Component } from "react";
//import { Field, reduxForm } from "redux-form";
import DatePicker from 'react-datepicker';
import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// import FormControl from 'react-bootstrap/lib/FormControl';
import { connect } from "react-redux";
import { fetchMenus, changeMenu, changeGuest, selectDate, createOrder } from '../actions/actions';
import { bindActionCreators } from "redux";
import "react-datepicker/dist/react-datepicker.css";


class OrderForm extends Component {
    
    componentDidMount(){
        console.log(this.props);
        this.props.fetchMenus();
        console.log('props:',this.props);
    }

    selectMenu(menuId){
        console.log('meal clicked')
        this.props.changeMenu(menuId)
    }

    handleDate(e){
        console.log(e);
        this.props.selectDate(e);
        console.log(this.props)
    }

    renderMenus(){
        console.log(this.props.menus.menus);
        let menus = this.props.menus.menus;
        console.log(this.props);
        return menus.map(m =>(
        <div>
            <label><input name="meal type" 
                component='input' 
                type="radio" 
                value={m._id} 
                onClick= {e=> this.selectMenu(`${m._id}`)}/>{m.mealType}
            </label><br />
        </div>))
    }

    renderDatePicker() {
        return (
            <div>
                <DatePicker
                selected= {this.props.eventDate.eventDate}
                onChange= {e=> this.handleDate(e)} 
                showTimeSelect
                dateFormat="Pp"
                />
            </div>
        )
    }

    handleChange(e) {
        console.log(e);
        this.handleChange= this.handleChange.bind(this)
        this.updateGuestCount(parseInt(e.target.value));
    }
    updateGuestCount(guests){
        this.props.changeGuest(guests)
    }
    

    renderGuestCount(){
        return(
            <div>
               <input name= 'guest count' component='input' type='text' placeholder ='Min of 10' onChange= {e=> this.handleChange(e)}/>
            </div>
        )
    }

    submitOrder(){
        console.log('order submitted');
        console.log(this.props);
        let order = {};
        order.mealType = this.props.menus.selectedMenu
        order.GuestCount= this.props.guests.guests
        order.EventDate= this.props.eventDate.eventDate
        console.log(order)
        this.props.createOrder(order);
    }

    render() {
        return (
            <div className= 'container'> 
                <Form>
                    <div className= 'row'>
                        <div className='col-lg-3 col-md-2 text-left'>
                            <div>
                                <h4>Menu Options</h4>
                                {this.renderMenus()}
                            </div>
                        </div>
                        <div className= 'col-lg-6 col-md-3 text-center'>
                                <h4>Event Date</h4>
                                {this.renderDatePicker()}
                        </div>
                        <div className= 'col-lg-3 col-md-3 text-left'>
                            <h5>Guest Count</h5>
                            {this.renderGuestCount()}
                            <Button onClick={e=> this.submitOrder()}>Submit Order</Button>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

function mapStateToProps ({menus, guests, eventDate }) {
    return {
        menus,
        guests,
        eventDate
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {fetchMenus, changeMenu, changeGuest, selectDate, createOrder}, dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
