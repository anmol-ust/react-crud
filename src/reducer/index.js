import { combineReducers } from 'redux';
import productReducer from './ProductReducer';

const rootReducer = combineReducers({
    productStore: productReducer
});

export default rootReducer;