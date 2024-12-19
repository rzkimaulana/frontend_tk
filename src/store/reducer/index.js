import { combineReducers } from "redux";
import {
    createSiswaReducer, getSiswaReducer
} from "./siswareducer";


const rootReducer = combineReducers({
    createSiswaReducer, getSiswaReducer
});

export default rootReducer;