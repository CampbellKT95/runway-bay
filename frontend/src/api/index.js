import axios from "axios";

//url that points to our backend route
const url = "http://localhost:5000/tenants";

export const fetchTenants = () => axios.get(url);

export const createTenant = (newTenant) => axios.post(url, newTenant);

export const updateTenant = (id, updatedTenant) => axios.patch(`${url}/${id}`, updatedTenant)