import {combineReducers} from "redux";
import categoryreducer from './category'
import userReducer from "./user";

const rootReducer = combineReducers({
    categoryreducer,
    userReducer,
})
export default rootReducer