import React, { Component } from 'react';

class Product extends Component {

    render() {
        const { id, name, price } = this.props.product;
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                    <a href="javascript:void(0)">Edit</a> |&nbsp;
                    <a href="javascript:void(0)" >Delete</a>
                </td>
            </tr>
        )
    }

}

export default Product;