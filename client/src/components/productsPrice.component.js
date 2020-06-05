import React, { Component } from 'react';
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

        this.onChangeRegOne = this.onChangeRegOne.bind(this);
        this.onChangeRegTwo = this.onChangeRegTwo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeOffOne = this.onChangeOffOne.bind(this);
        this.onChangeOffTwo = this.onChangeOffTwo.bind(this);
        this.onSubmitone = this.onSubmitone.bind(this);

        this.state = {
            regone:'',
            regtwo:'',
            offone:'',
            offtwo:'',
            prices:[]
        };
    }

    onChangeRegOne(e) {
        this.setState({
            regone : e.target.value
        })
    }

    onChangeRegTwo(e) {
        this.setState({
            regtwo : e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const filtreg = {
            regone : this.state.regone,
            regtwo : this.state.regtwo
        }
        console.log(filtreg);

        axios.get(`http://localhost:4000/prices/price?value1=${this.state.regone}&value2=${this.state.regtwo}`)
        .then(response => {
            this.setState({
                prices:response.data
            })
            console.log(this.state.prices);
        })
    }

    onChangeOffOne(e) {
        this.setState({
            offone : e.target.value
        })
    }

    onChangeOffTwo(e) {
        this.setState({
            offtwo : e.target.value
        })
    }

    onSubmitone(e) {
        e.preventDefault();

        const filtoff = {
            offone : this.state.offone,
            offtwo : this.state.offtwo
        }
        console.log(filtoff);

        axios.get(`http://localhost:4000/prices/priceoff?value3=${this.state.offone}&value4=${this.state.offtwo}`)
        .then(response => {
            this.setState({
                prices:response.data
            })
            console.log(this.state.prices);
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
                <h3>Filter on the basis of either of two prices i.e. regular_price or offer_price </h3>
                <h6>Takes few sec's to load</h6>
                <br />
                <h6><b>Enter values to get all products having values between them---</b></h6>
                <div>
                    <form onSubmit = {this.onSubmit}>
                        <label><b><u>Based on regular price:</u></b></label>
                        <input type ="number" placeholder="greater than" className="form-control" value={this.state.regone} onChange={this.onChangeRegOne} /><br/>
                        <input type ="number" placeholder="less than" className="form-control" value={this.state.regtwo} onChange={this.onChangeRegTwo} />
                        <br />
                    <div className="form-group">
                        <input type="submit" value = "Filter according to entered regular value" className="btn btn-primary" />
                    </div>
                    </form>
                </div>
                <div>
                    <form onSubmit = {this.onSubmitone}>
                        <label><b><u>Based on offer price:</u></b></label>
                        <input type ="number" placeholder="greater than" className="form-control" value={this.state.offone} onChange={this.onChangeOffOne} /><br/>
                        <input type ="number" placeholder="less than" className="form-control" value={this.state.offtwo} onChange={this.onChangeOffTwo} />
                        <br />
                    <div className="form-group">
                        <input type="submit" value = "Filter according to entered offer value" className="btn btn-primary" />
                    </div>
                    </form>
                </div>
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