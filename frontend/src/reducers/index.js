import {combineReducers} from "redux";

import tenants from "./tenants";
import auth from "./auth";

export default combineReducers({
    tenants,
    auth
})