import {userReducer} from "./userReducer"
import {combineReducers} from "redux"
import {repositoryReducer} from "./repositoryReducer"
import {userFoundReducer} from "./userFoundReducer"

const allReducer = combineReducers({userReducer , repositoryReducer,userFoundReducer});

export default allReducer ;