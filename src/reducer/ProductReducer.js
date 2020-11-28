import { GET_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../action/ActionTypes';

export default function productReducer(state = [], action) {

    switch (action.type) {
        case GET_PRODUCTS:
            return [...state, ...action.payload]

        default: return state;
    }

}