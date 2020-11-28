import { GET_PRODUCTS, CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from './ActionTypes';
import axios from 'axios';

// get
export function getProducts() {
    return (dispatch) => {
        axios.get("http://localhost:5555/products")
            .then(response => dispatch(getProductsSuccess(response.data)))
            .catch(error => console.error("getProducts failed: ", error))
    }
}

export function getProductsSuccess(payload) {
    return { type: GET_PRODUCTS, payload }
}