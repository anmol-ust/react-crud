import React, { Component, Fragment } from 'react';
import Product from './ProductComponent';

class ProductList extends Component {

    render() {
        const { products } = this.props;
        return (
          <Fragment>
              <h3>List of Products</h3>
              <table className="table table-hover">
                  <thead>
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          products.length > 0 && products.map( prod => <Product key={prod.id} product={prod} />)
                      }
                  </tbody>
              </table>
          </Fragment>
        )
    }
    
}

export default ProductList;