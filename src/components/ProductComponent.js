import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../action/ProductActions';
import { Link } from 'react-router-dom';

class Product extends Component {

    deleteProduct = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            this.props.handleDeleteProduct(id);
        }
    }

    render() {
        const { id, name, price } = this.props.product;
        return (
            <tr key={id}>
                <td>{this.props.index + 1}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                    <Link className="btn btn-link" to={`/edit-product/${id}`} >Edit</Link> |&nbsp;
                    <Link className="btn btn-link" to="undefined" onClick={() => this.deleteProduct(id)} >Delete</Link>
                </td>
            </tr>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    handleDeleteProduct(id) {
        dispatch(deleteProduct(id))
    }
});

export default connect(null, mapDispatchToProps)(Product)