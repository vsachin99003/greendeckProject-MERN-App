import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar.component';
import ProductsList from './components/productsList.component';
import Productprice from './components/productsPrice.component';
import Similarproducts from './components/similarProducts.component';
import Stocks from './components/stocks.component';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path='/' exact component = {ProductsList}/>
      <Route path='/productPrice' component = {Productprice} />
      <Route path ='/similarProducts' component ={Similarproducts} />
      <Route path ='/stockCreate' component ={Stocks} />
      </div>
    </Router>
  );
}

export default App;
