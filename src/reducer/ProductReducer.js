import { GET_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../action/ActionTypes';

const initialState = {
    products: [],
    product: {},
    error: ""
}

export default function productReducer(state = initialState, action) {

    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state, products: action.payload, product: {}
            }
        case CREATE_PRODUCT:
            return {
                ...state, products: [...state.products, action.payload], product: {}
            }
        case UPDATE_PRODUCT:
            const indexOfUpdatedProduct = state.products.findIndex((prod) => prod.id == action.payload.id);
            state.products.splice(indexOfUpdatedProduct, 1, action.payload);
            return {
                ...state, products: [...state.products], product: {}
            }
        case DELETE_PRODUCT:
            const indexOfDeletedProduct = state.products.findIndex((prod) => prod.id == action.id);
            state.products.splice(indexOfDeletedProduct, 1);
            return {
                ...state, products: [...state.products], product: {}
            }
        default: return state;
    }

}