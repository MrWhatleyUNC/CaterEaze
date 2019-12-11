import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import OrderForm from './components/order';
import OrdersList from './components/orders-list';
class App extends Component {
    render() {
        return (
            //console.log('hello world')
            <div className= 'container-fluid'>
                <div className= 'row'>
                    <div className= 'col-md-6 offset-3 d-flex justify-content-center'>
                        <h1>CaterEaze</h1>
                    </div>
                </div>
                <div className= 'row'>
                    <div className= 'col-lg-3 col-md-3 offset-3'>
                        <Button>Place Order</Button>
                    </div>
                    <div className= 'col-lg-3 '>
                        <Button>View Orders</Button>
                    </div>
                </div>
                <div className= 'container'></div>
                <div className= 'row'>
                    <div className='col-md-6 offset-3 '>
                    <Switch>
                    <Route exact path="/" component={OrderForm} />
                    <Route exact path="/caterer" component={OrdersList} />
                    </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default App