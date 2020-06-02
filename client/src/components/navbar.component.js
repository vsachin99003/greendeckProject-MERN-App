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
                    <Link to="/" className="nav-link">Products Detail</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/productPrice" className="nav-link">Product Price Details filter</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/similarProducts" className="nav-link">Similar Products details</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/stockCreate" className="nav-link">Stocks available </Link>
                </li>
                </ul>
                </div>
                </nav>
            );
        }
    }
export default Navbar