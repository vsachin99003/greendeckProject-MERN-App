import React, { Component } from 'react';
import axios from 'axios';


const Stockprd = props => (
    <tr>
        <td>{props.stockprd.name}</td>
        <td>{props.stockprd.description_text}</td>
        <td>{props.stockprd.price.regular_price.value}</td>
    </tr>
)

class Stocks extends Component{
    constructor(props) {
        super(props);

        this.onSubmitt = this.onSubmitt.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            stockof:[]
        };
    }

    onSubmit(e) {
        e.preventDefault();

        axios.get(`http://localhost:4000/stock/stockandcreatedf`)
        .then(response => {
            this.setState({
                stockof : response.data
            })
            console.log(this.state.stockof);
        })
    }

    onSubmitt(e) {
        e.preventDefault();

        axios.get(`http://localhost:4000/stock/stockandcreatedt`)
        .then(response => {
            this.setState({
                stockof : response.data
            })
            console.log(this.state.stockof);
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
                <h3>Filter products by stock availability---</h3>
                <h6>Takes few sec's to load</h6>
                <br />
                <h6>Stock available - true( yes ) or false( no ):</h6>
                <br />
                <h6>Select either button to filter---</h6>
                <div>
                    <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <input type="submit" value = "filter for false" className="btn btn-primary" />
                    </div>
                    </form>
                </div>
                <div>
                    <form onSubmit = {this.onSubmitt}>
                    <div className="form-group">
                        <input type="submit" value = "filter for true" className="btn btn-primary" />
                    </div>
                    </form>
                </div>
                <h6>You can check in console of browser to confirm the result change!!!</h6>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Description of products</th>
                            <th>Regular price</th>
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