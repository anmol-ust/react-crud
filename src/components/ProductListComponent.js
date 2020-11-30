import React, { Component, Fragment } from 'react';
import Product from './ProductComponent';

class ProductList extends Component {

    render() {
        const { products } = this.props;
        return (
            <Fragment>
                <div className="d-flex justify-content-between align-items-center">
                    <h3>List of Products</h3>
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => this.props.history.push("/add-product")}>Add</button>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 && products.map((prod,index) => <Product key={prod.id} index={index} product={prod} />)
                        }
                    </tbody>
                </table>
            </Fragment>
        )
    }

}

export default ProductList;