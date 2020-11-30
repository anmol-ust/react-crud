import React, { Component, Fragment } from 'react';
import ProductForm from '../components/ProductFormComponent';
import { createProduct } from '../action/ProductActions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class AddProductContainer extends Component {

    constructor() {
        super();
        this.state = {
            name: "", price: 0
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
        const { name, price } = this.state;
        const createProduct = {
            id: this._createIds(),
            name: name,
            price: Number(price)
        }
        this.props.handleSubmitForm(createProduct);
        this.setState({ name: '', price: 0 });
        this.redir.redirectToReferer = true;
    }

    _createIds = () => {
        return Math.floor(100 + Math.random() * 900)
    }

    render() {
        const redirectToReferer = this.redir.redirectToReferer;
        if (redirectToReferer === true) {
            return <Redirect to="/product-list" />
        }
        return (<Fragment>
            <h2>Add Product</h2>
            <ProductForm
                key="createProduct"
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state}
            />
        </Fragment>)
    }

}

const mapDisPatchToProps = (dispatch) => ({
    handleSubmitForm(payload) {
        dispatch(createProduct(payload))
    }
})


export default connect(null, mapDisPatchToProps)(AddProductContainer);