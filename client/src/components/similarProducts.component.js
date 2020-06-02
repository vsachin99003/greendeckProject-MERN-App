import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Similarprd = props => (
    <tr>
        <td>{props.similarprd.name}</td>
        <td>{props.similarprd.price.regular_price.value}</td>
        <td>{props.similarprd.similar_products.meta.total_results}</td>
        <td>{props.similarprd.similar_products.meta.avg_discount}</td>
    </tr>
)

class Similarproducts extends Component{
    constructor(props) {
        super(props);

        this.state = {
            similars:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/similar/similarprd')
        .then(response => {
            this.setState({
                similars:response.data
            })
            console.log(this.similars);
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
                <h3>Similar Products with total count and avg discount</h3>
                <h6>Takes few sec's to load</h6>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Regular price</th>
                            <th>Similar products - Total count</th>
                            <th>Similar products - Avg. discount</th>
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