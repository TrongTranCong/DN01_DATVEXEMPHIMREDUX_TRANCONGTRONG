import { combineReducers, createStore } from "redux";
import {DatVeXemPhimReducer} from './DatVeXemPhimReducer'
const rootReducer = combineReducers({
    DatVeXemPhimReducer:DatVeXemPhimReducer//state của datvexemphim
})
export const store=createStore(rootReducer);