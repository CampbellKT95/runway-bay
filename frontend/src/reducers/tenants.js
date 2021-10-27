//reducer(state, action). since state will always be tenants, can simply add it instead of state


//can export the function which will be used in index.js reducers
export default (tenants = [], action) => {
    switch(action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return tenants
        default:
            return tenants;
    }
}