import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Stockprd = props => (
    <tr>
        <td>{props.stockprd.name}</td>
        <td>{props.stockprd.stock.available}</td>
        <td>{props.stockprd.created_at}</td>
    </tr>
)

class Stocks extends Component{
    constructor(props) {
        super(props);

        this.state = {
            stockof:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/stock/stockandcreated')
        .then(response => {
            this.setState({
                stockof:response.data
            })
            console.log(this.stockof);
        })
    }


    stocksCreate() {
        return this.state.stockof.map(currentstock => {
            return <Stockprd stockprd={currentstock} key={currentstock._id} />;
        }) 
    }



    render() {
        return (
            <div>
                <h3>Stocks Avialablity of products</h3>
                <h6>Takes few sec's to load</h6>
                <br />
                <h6>True = yes and False = no</h6>
                <br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Stocks Available</th>
                            <th>Created At (date)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.stocksCreate()}
                    </tbody>
                </table>
            </div>
        )
    }
}






export default Stocks