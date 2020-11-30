import { GET_PRODUCT,GET_ALL_PRODUCTS, CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from './ActionTypes';
import axios from 'axios';

// get
export function getAllProducts() {
    return (dispatch) => {
        axios.get("http://localhost:5555/products")
            .then(response => dispatch(getProductsSuccess(response.data)))
            .catch(error => console.error("getProducts failed: ", error))
    }
}

export function getProductsSuccess(payload) {
    return { type: GET_ALL_PRODUCTS, payload } // action object
}

// post
export function createProduct(payload) {
    return (dispatch) => {
        axios.post("http://localhost:5555/products",payload)
            .then(() => dispatch(createProductSuccess(payload)))
            .catch(error => console.error("createProduct failed: ", error))
    }
}

export function createProductSuccess(payload) {
    return { type: CREATE_PRODUCT, payload } // action object
}

// delete
export function deleteProduct(id) {
    return (dispatch) => {
        axios.delete(`http://localhost:5555/products/${id}`)
            .then(() => dispatch(deleteProductSuccess(id)))
            .catch(error => console.error("deleteProduct failed: ", error))
    }
}

export function deleteProductSuccess(id) {
    return { type: DELETE_PRODUCT, id } // action object
}

// put
export function updateProduct(payload) {
    return (dispatch) => {
        axios.put(`http://localhost:5555/products/${payload.id}`,payload)
            .then(() => dispatch(updateProductSuccess(payload)))
            .catch(error => console.error("updateProduct failed: ", error))
    }
}

export function updateProductSuccess(payload) {
    return { type: UPDATE_PRODUCT, payload } // action object
}

// get
export function getProduct(id) {
    return (dispatch) => {
        axios.get(`http://localhost:5555/products/${id}`)
            .then(response => dispatch(getProductSuccess(response.data)))
            .catch(error => console.error("getProducts failed: ", error))
    }
}

export function getProductSuccess(payload) {
    return { type: GET_PRODUCT, payload } // action object
}