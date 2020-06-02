import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Value = props => (
    <tr>
        <td>{props.value.name}</td>
        <td>{props.value.price.offer_price.value}</td>
        <td>{props.value.price.regular_price.value}</td>
        <td>{props.value.price.basket_price.value}</td>
    </tr>
)



class Productprice extends Component{
    constructor(props) {
        super(props);

        this.state = {
            prices:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/prices/price')
        .then(response => {
            this.setState({
                prices:response.data
            })
            console.log(this.prices);
        })
    }

    priceList = ()=> {
        return this.state.prices.map(pricelist => {
            return <Value value = {pricelist} key={pricelist._id} />;
        })
    }

    render() {
        return(
            <div>
                <h3>Offer price, Regular price and basket price of products</h3>
                <h6>Takes few sec's to load</h6>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Offer price</th>
                            <th>Regular price</th>
                            <th>basket price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.priceList()}
                    </tbody>
                </table>
            </div>
        );
    }



}

export default Productprice