import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }
    return req;
})

export const fetchTenants = () => API.get("/tenants");

export const createTenant = (newTenant) => API.post("/tenants", newTenant);

export const updateTenant = (id, updatedTenant) => API.patch(`/tenants/${id}`, updatedTenant)

export const deleteTenant = (id) => API.delete(`$tenants/${id}`); 

export const signIn = (formData) => API.post("/users/signin", formData)   





// const url = "http://localhost:5000/tenants";
// "https://runway-bay.herokuapp.com/tenants"
// "http://localhost:5000/tenants";

// export const fetchTenants = () => axios.get(url);

// export const createTenant = (newTenant) => axios.post(url, newTenant);

// export const updateTenant = (id, updatedTenant) => axios.patch(`${url}/${id}`, updatedTenant)

// export const deleteTenant = (id) => axios.delete(`${url}/${id}`); 