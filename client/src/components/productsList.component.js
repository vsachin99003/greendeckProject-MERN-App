import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Product = props => (
    <tr>
        <td>{props.product.name}</td>       
        <td>{props.product.brand.name}</td>
        <td>{props.product.description_text}</td>
        <td>{props.product.price.regular_price.value}</td>
    </tr>
)
class ProductsList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            productdetails:[]
        };
    }

    componentDidMount(){
        axios.get('http://localhost:4000/products/')
        .then(response => {
            this.setState({
                productdetails : response.data
            })
            console.log(this.productDetails);
        })
    }

    productDetails() {
        return this.state.productdetails.map(currentproducts => {
            return <Product product = {currentproducts} key={currentproducts._id}/>
        })
    }

    render(){
        return (
            <div>
                <h1> All products details =>   </h1>
                <h6>Takes few sec's to load</h6>
                <br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Brand Name</th>
                            <th>Description text</th>
                            <th>Regular Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.productDetails()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductsList