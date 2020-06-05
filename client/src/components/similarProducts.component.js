import React, { Component } from 'react';
import axios from 'axios';

const Similarprd = props => (
    <tr>
        <td>{props.similarprd.name}</td>
        <td>{props.similarprd.price.regular_price.value}</td>
        <td>{props.similarprd.price_positioning_text}</td>
    </tr>
)

class Similarproducts extends Component{
    constructor(props) {
        super(props);

        this.onChangePos = this.onChangePos.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            pos:'',
            similars:[]
        };
    }

    onChangePos(e) {
        this.setState({
            pos : e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const createfil = {
            pos : this.state.pos
        }
        console.log(createfil);

        axios.get(`http://localhost:4000/similar/similarprd?value=${this.state.pos}`)
        .then(response => {
            this.setState({
                similars:response.data
            })
            console.log(this.state.similars);
        })
    }



    similarProducts() {
        return this.state.similars.map(currentsimilars => {
            return <Similarprd similarprd={currentsimilars} key={currentsimilars._id} />;
        }) 
    }



    render() {
        return (
            <div>
                <h3>Filter according to price positioning of products---</h3>
                <h6>Takes few sec's to load</h6>
                <div>
                    <form onSubmit = {this.onSubmit}>
                        <div>
                        <label>Will show products based on products price postioning i.e. expensive, cheaper or equal---</label>
                        <input type ="text" placeholder="enter expensive or cheaper or equal" className="form-control" value={this.state.pos} onChange={this.onChangePos} /><br/>
                        </div>
                        <br />
                    <div className="form-group">
                        <input type="submit" value = "Filter according to entered value" className="btn btn-primary" />
                    </div>
                    </form>
                </div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Regular price</th>
                            <th>Price positioning text</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.similarProducts()}
                    </tbody>
                </table>
            </div>
        )
    }
}






export default Similarproducts