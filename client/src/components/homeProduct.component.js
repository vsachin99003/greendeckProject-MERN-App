import React, { Component } from 'react';
import axios from 'axios';


const Product = props => (
    <tr>
        <td>{props.product.name}</td>       
        <td>{props.product.brand.name}</td>
        <td>{props.product.description_text}</td>
        <td>{props.product.price.regular_price.value}</td>
    </tr>
)
class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            productdetails:[]
        };
    }

    componentDidMount(){
        axios.get('http://localhost:4000/home/')
        .then(response => {
            this.setState({
                productdetails : response.data
            })
        }).catch((error) => {
            console.log(error);
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
                <h6>Takes almost 30 sec's to load due to large data file</h6>
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

export default Home