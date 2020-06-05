import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

class Navbar extends Component{

        render(){
            return (
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Product Inventory</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/brandValue" className="nav-link">Filter by Brand Name</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/productPrice" className="nav-link">Product Price filters</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/similarProducts" className="nav-link">Price positioning filter</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/stockCreate" className="nav-link">Filter by Stocks </Link>
                </li>
                </ul>
                </div>
                </nav>
            );
        }
    }
export default Navbar