import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OrderForm from './components/order';
import OrdersList from './components/orders-list';
import Navbar from 'react-bootstrap/Navbar';


class App extends Component {
    render() {
        return (
            <div className= 'container-fluid justify-content-center'>
                <Navbar bg='primary' variant='dark'>
                    <Navbar.Brand>CaterEaze</Navbar.Brand>
                <Button href ='/'variant="outline-light" className='myButton'>Place an Order</Button><Button href='/caterer'variant="outline-light"className='myButton'>View Current Orders</Button>
                </Navbar>
                <div className= 'hero row'>
                    <div className= 'col-md-6 offset-3 d-flex justify-content-center'>
                        <h1 className= 'header'>CaterEaze</h1>
                    </div>
                </div>
                <div className= 'row'>
                    <div className= 'col-md-6 offset-3 d-flex justify-content-center'>
                    
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