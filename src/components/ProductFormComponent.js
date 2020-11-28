import React, { Component, Fragment } from 'react';

class ProductForm extends Component {

    render() {
        const { handleSubmit, handleChange, name, price } = this.props;
        return (
            <Fragment>
                <div className="row">
                    <div className="col-lg-6 container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="font-weight-bold">Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Enter Name" value={name} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label className="font-weight-bold">Price</label>
                                <input type="text" className="form-control" name="price" placeholder="Enter Price" value={price} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default ProductForm;