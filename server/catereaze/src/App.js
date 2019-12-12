import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OrderForm from './components/order';
import OrdersList from './components/orders-list';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className= 'container-fluid justify-content-center'>
                <Navbar bg='primary' variant='dark'>
                    <Navbar.Brand>CaterEaze</Navbar.Brand>
                <Button href='/'variant="outline-light">Place an Order</Button>     <Button href='/caterer'variant="outline-light">View Current Orders</Button>
                </Navbar>
                <div className= 'hero row'>
                    <div className= 'col-md-6 offset-3 d-flex justify-content-center'>
                        {/* <Image src='https://www.osf.com/wp-content/uploads/2018/10/OSF-Catering-chafers-scooping-linguini-768x512.jpg'
                             rounded 
                             width= '100%'
                             height= '80%'/> */}
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