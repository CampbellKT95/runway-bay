import {AUTH} from "../constants/actionTypes.js";
import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
    try {

        const {data} = await api.signIn(formData);
        console.log("data", data)

        dispatch({type: AUTH, data})

        history.push("/tenants")

    } catch (error) {
        console.log(error)
    }
}