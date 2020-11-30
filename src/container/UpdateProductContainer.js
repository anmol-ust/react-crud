import React, { Component, Fragment } from 'react';
import ProductForm from '../components/ProductFormComponent';
import { updateProduct } from '../action/ProductActions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
class UpdateProductContainer extends Component {

    constructor() {
        super();
        this.state = {
            id: 0, name: "", price: 0
        }
        this.redir = {
            redirectToReferer: false
        }
    }

    // input change handler
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    // submit handler
    handleSubmit = (event) => {
        event.preventDefault();
        const { id, name, price } = this.state;
        const updatedProduct = {
            id: id,
            name: name,
            price: Number(price)
        }
        this.props.handleSubmitForm(updatedProduct);
        this.setState({ name: '', price: 0 });
        this.redir.redirectToReferer = true;
    }

    componentDidMount(){
        const {match:{params}} = this.props;
        console.log(params.id);
        const url = `http://localhost:5555/products/${params.id}`;
        axios.get(url)
        .then((response) => this.setState(response.data) )
        .catch((error) => console.log(error))
    }

    render() {
        const redirectToReferer = this.redir.redirectToReferer;
        if (redirectToReferer === true) {
            return <Redirect to="/product-list" />
        }
        return (<Fragment>
            <h2>Update Product</h2>
            <ProductForm
                key="updateProduct"
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state}
            />
        </Fragment>)
    }

}

const mapDisPatchToProps = (dispatch) => ({
    handleSubmitForm(payload) {
        dispatch(updateProduct(payload))
    }
})

export default connect(null, mapDisPatchToProps)(UpdateProductContainer);