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
};

export const createTenant = (tenant) => async (dispatch) => {
    try {
        //makes an api request to backend
        const { data } = await api.createTenant(tenant);

        dispatch({type: "CREATE", payload: data});

    } catch (error) {
        console.log(error)
    }
}

export const updateTenant = (id, tenant) => async (dispatch) => {
    try {
        const {data} = await api.updateTenant(id, tenant);

        dispatch({type: "UPDATE", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}