import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Product from "./components/Product";


import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Login from "./components/Login";
import Footer from './components/Footer';





class App extends Component {
  render() {
    return (
      
    <React.Fragment>

      <Navbar> </Navbar>
      <Main> </Main>
      <Product></Product>
      <Footer></Footer>
      
      
      <Switch> 
        <Route exact path="/"component={ProductList} /> 
        <Route exact path="/details"component={Details} /> 
        <Route path="/login"component={Login} /> 
        <Route component={Default} /> 
      </Switch>
    </React.Fragment>
  

    );
  }
}


export default App;