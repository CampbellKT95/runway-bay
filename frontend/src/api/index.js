import axios from "axios";

const url = "http://localhost:5000/tenants";
// "https://runway-bay.herokuapp.com/tenants"
// "http://localhost:5000/tenants";


export const fetchTenants = () => axios.get(url);

export const createTenant = (newTenant) => axios.post(url, newTenant);

export const updateTenant = (id, updatedTenant) => axios.patch(`${url}/${id}`, updatedTenant)

export const deleteTenant = (id) => axios.delete(`${url}/${id}`); 