import {MEMO} from "../constants/actionTypes.js";
import * as api from "../api";

export const sendMemo = (memo) => async (dispatch) => {
    try {
        console.log("formData", memo)

        const {data} = await api.memoAPI(memo);

        console.log("actions data", data)
        
        dispatch({type: MEMO, payload: memo})

    } catch (error) {
        console.log(error)
    }
}