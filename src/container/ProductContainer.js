import ProductList from '../components/ProductListComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(ProductList); // syntax to connect component with a store & also pass a props to same component