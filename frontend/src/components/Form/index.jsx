import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createTenant} from "../../actions/tenants";

const Form = () => {

    const [tenantData, setTenantData] = useState({
        name: "", 
        company: "",
        phone: "",
        cell: "",
        email: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        zip: 0,
        building: 0,
        unit: 0,
        comments: "",
        start_date: "",
        end_date: "",
        lease_length: 12,
        signing_date: "",
        rent_day: "",
        monthly_payment: 0,
        sales_tax: 0,
        subtotal: 0,
        total_paid: 0,
        security_amount: 0,
        security_date_received: ""
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        //dispatching newly created tenantData to backend
        dispatch(createTenant(tenantData));

        console.log("submitted");
    }

    return (
        <>
        <form>
            <input placeholder="name" onChange={(e) => {setTenantData({...tenantData, name: e.target.value})}}/>
            <input placeholder="company" onChange={(e) => {setTenantData({...tenantData, company: e.target.value})}}/>
            <input placeholder="phone" onChange={(e) => {setTenantData({...tenantData, phone: e.target.value})}}/>
            <input placeholder="cell" onChange={(e) => {setTenantData({...tenantData, cell: e.target.value})}}/>
            <input placeholder="email" onChange={(e) => {setTenantData({...tenantData, email: e.target.value})}}/>
            <input placeholder="address-1" onChange={(e) => {setTenantData({...tenantData, address_1: e.target.value})}}/>
            <input placeholder="address-2" onChange={(e) => {setTenantData({...tenantData, address_2: e.target.value})}}/>
            <input placeholder="city" onChange={(e) => {setTenantData({...tenantData, city: e.target.value})}}/>
            <input placeholder="state" onChange={(e) => {setTenantData({...tenantData, state: e.target.value})}}/>
            <input placeholder="zip" onChange={(e) => {setTenantData({...tenantData, zip: e.target.value})}}/>
            <input placeholder="building" onChange={(e) => {setTenantData({...tenantData, building: e.target.value})}}/>
            <input placeholder="unit" onChange={(e) => {setTenantData({...tenantData, unit: e.target.value})}}/>
            <input placeholder="comments" onChange={(e) => {setTenantData({...tenantData, comments: e.target.value})}}/>
            <input placeholder="start-date" onChange={(e) => {setTenantData({...tenantData, start_date: e.target.value})}}/>
            <input placeholder="end-date" onChange={(e) => {setTenantData({...tenantData, end_date: e.target.value})}}/>
            <input placeholder="lease-length" onChange={(e) => {setTenantData({...tenantData, lease_length: e.target.value})}}/>
            <input placeholder="signing-date" onChange={(e) => {setTenantData({...tenantData, signing_date: e.target.value})}}/>
            <input placeholder="signing-payment" onChange={(e) => {setTenantData({...tenantData, signing_payment: e.target.value})}}/>
            <input placeholder="rent-day" onChange={(e) => {setTenantData({...tenantData, rent_day: e.target.value})}}/>
            <input placeholder="monthly-payment" onChange={(e) => {setTenantData({...tenantData, monthly_payment: e.target.value})}}/>
            <input placeholder="sales-tax" onChange={(e) => {setTenantData({...tenantData, sales_tax: e.target.value})}}/>
        {/* subtotal will be displayed here automatically with state */}
            <input placeholder="total-paid" onChange={(e) => {setTenantData({...tenantData, total_paid: e.target.value})}}/>
            {/* security deposit checkbox */}
            <input placeholder="security-amount" onChange={(e) => {setTenantData({...tenantData, security_amount: e.target.value})}}/>
            <input placeholder="date security received" onChange={(e) => {setTenantData({...tenantData, security_date_received: e.target.value})}}/>
            {/* checkbox last month security */}
            {/* checkbox certificate of liability */}
            <button type="submit" onClick={handleSubmit}>submit</button>
        </form>
        </>
    )
}


export default Form;
