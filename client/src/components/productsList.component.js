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
class ProductsList extends Component{
    constructor(props) {
        super(props);

        this.onChangeFilValue = this.onChangeFilValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            filvalue : '',
            productdetails:[]
        };
    }



    onChangeFilValue(e) {
        this.setState({
            filvalue:e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const filterval = {
            filvalue : this.state.filvalue
        }
        console.log(filterval);

        axios.get(`http://localhost:4000/products/brval?value=${this.state.filvalue}`)
        .then(response => {
            this.setState({
                productdetails : response.data
            })
            console.log(this.state.productDetails);
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
                <h1>Filter data by entering brand name---   </h1>
                <h6>Takes few sec's to load</h6>
                <br />
                <div>
                    <form onSubmit = {this.onSubmit}>
                        <label><b>Brand value:[enter in lower cases]</b>       like-[gucci, prada, christian louboutin, balenciaga, stuart weitzman, dodo bar or etc]</label>
                        <input type ="text" placeholder="please enter full brand name" required className="form-control" value={this.state.filvalue} onChange={this.onChangeFilValue} />
                        <br />
                    <div className="form-group">
                        <input type="submit" value = "Filter according to value" className="btn btn-primary" />
                    </div>
                    </form>
                </div>
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