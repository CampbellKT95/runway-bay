import {AUTH} from "../constants/actionTypes.js";
import * as api from "../api";

export const signin = (username, password, history) => async (dispatch) => {
    try {
        //login

        history.push("/tenants")

    } catch (error) {
        console.log(error)
    }
}