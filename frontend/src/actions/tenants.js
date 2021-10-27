import * as api from "../api";

//the async comes from thunk, for async logic
export const getTenants = () => async (dispatch) => {

    try {
        //data destructured from the response (response.data)
        const {data} = await api.fetchTenants();

        dispatch({type: "FETCH_ALL", payload: data});

    } catch (error) {
        console.log(error.message);
    }
}