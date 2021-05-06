import {userReducer} from "./userReducer"
import {combineReducers} from "redux"
import {repositoryReducer} from "./repositoryReducer"

const allReducer = combineReducers({userReducer , repositoryReducer});

export default allReducer ;