import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import { useSelector } from 'react-redux';
import {createTenant, updateTenant} from "../../actions/tenants";
import "./form.css";

const Form = ({currentId, setCurrentId}) => {

    const tenant = useSelector((state) => currentId ? state.tenants.find((t) => t._id === currentId) : null);

    const [tenantData, setTenantData] = useState({
        name: "", 
        company: "",
        contact: {
            phone: {
                business: "",
                cell: ""
            },
            email: "",
        },

        location: {
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            zip: null,
            property: {
                building: null,
                unit: null,
            }
        },

        comments: "",
        lease_details: {
            start_date: "",
            end_date: "",
            lease_length: null,
            signing: {
                signing_date: "",
                signing_payment: null,
            },

            due_day: "",
            monthly_amt: null,
            sales_tax: null,
            subtotal: null,
            total_paid: null,
            security: {
                security_received: false,
                security_amt: null,
                security_date_received: "",
            },

            last_month_security: false,
            certificate_liability: false
        }

    })

    const dispatch = useDispatch();

    useEffect(() => {
        if (tenant) {
            setTenantData(tenant);
        }
    }, [tenant])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateTenant(currentId, tenantData));
            console.log("tenant updated");
        } else {
            dispatch(createTenant(tenantData));
            console.log("tenant created");
        }
        
        clear();
    }


    const clear = () => {
        setCurrentId(null);
        setTenantData({
        name: "", 
        company: "",
        contact: {
            phone: {
                business: "",
                cell: ""
            },
            email: "",
        },

        location: {
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            zip: 0,
            property: {
                building: 0,
                unit: 0,
            }
        },

        comments: "",
        lease_details: {
            start_date: "",
            end_date: "",
            lease_length: 0,
            signing: {
                signing_date: "",
                signing_payment: 0,
            },

            due_day: "",
            monthly_amt: 0,
            sales_tax: 0,
            subtotal: 0,
            total_paid: 0,
            security: {
                security_received: false,
                security_amt: 0,
                security_date_received: "",
            },

            last_month_security: false,
            certificate_liability: false
        }

    })}

    return (
        <>
        <h1>{`${currentId ? "Edit Tenant" : "Create New Tenant"}`}</h1>
        <form className="form-container">
            <div className="personal-info">

                <input value={tenantData.name} placeholder="name" onChange={(e) => {setTenantData({...tenantData, name: e.target.value})}}/>

                <input value={tenantData.company} placeholder="company" onChange={(e) => {setTenantData({...tenantData, company: e.target.value})}}/>

                <input value={tenantData.contact.phone.business} placeholder="phone" onChange={(e) => {setTenantData({...tenantData, contact: {...tenantData.contact, phone: {...tenantData.contact.phone, business: e.target.value}}})}}/>

                <input value={tenantData.contact.phone.cell} placeholder="cell" onChange={(e) => {setTenantData({...tenantData, contact: {...tenantData.contact, phone: {...tenantData.contact.phone, cell: e.target.value}}})}}/>

                <input value={tenantData.contact.email} placeholder="email" onChange={(e) => {setTenantData({...tenantData, contact: {...tenantData.contact, email: e.target.value}})}} />
            </div>

            <div className="address-info">
                <input value={tenantData.location.address_1} placeholder="address-1" onChange={(e) => {setTenantData({...tenantData, location: {...tenantData.location, address_1: e.target.value}})}}/>

                <input value={tenantData.location.address_2} placeholder="address-2" onChange={(e) => {setTenantData({...tenantData, location: {...tenantData.location, address_2: e.target.value}})}}/>

                <input value={tenantData.location.city} placeholder="city" onChange={(e) => {setTenantData({...tenantData, location: {...tenantData.location, city: e.target.value}})}}/>

                <input value={tenantData.location.state} placeholder="state" onChange={(e) => {setTenantData({...tenantData, location: {...tenantData.location, state: e.target.value}})}}/>

                <input value={tenantData.location.zip} placeholder="zip" onChange={(e) => {setTenantData({...tenantData, location: {...tenantData.location, zip: e.target.value}})}}/>

                <input value={tenantData.location.property.building} placeholder="building" onChange={(e) => {setTenantData({...tenantData, location: {...tenantData.location, property: {...tenantData.location.property, building: e.target.value}}})}}/>

                <input value={tenantData.location.property.unit} placeholder="unit" onChange={(e) => {setTenantData({...tenantData, location: {...tenantData.location, property: {...tenantData.location.property, unit: e.target.value}}})}}/>
            </div>

            <div className="comment-section">
                <textarea value={tenantData.comments} className="comments" placeholder="comments" cols="30" rows="4" onChange={(e) => {setTenantData({...tenantData, comments: e.target.value})}}/>
            </div>
            <div className="lease-info">
                <input value={tenantData.lease_details.start_date} placeholder="start-date" onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, start_date: e.target.value}})}}/>

                <input value={tenantData.lease_details.end_date} placeholder="end-date" onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, end_date: e.target.value}})}}/>

                <input value={tenantData.lease_details.lease_length} placeholder="lease-length" onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, lease_length: e.target.value}})}}/>

                <input value={tenantData.lease_details.signing.signing_date} placeholder="signing-date" onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, signing: {...tenantData.lease_details.signing, signing_date: e.target.value}}})}}/>

                <input value={tenantData.lease_details.signing.signing_payment} placeholder="signing-payment" onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, signing: {...tenantData.lease_details.signing, signing_payment: e.target.value}}})}}/>

                <input value={tenantData.lease_details.due_day} placeholder="rent-day" onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, due_day: e.target.value}})}}/>

                <input value={tenantData.lease_details.monthly_amt} placeholder="monthly-payment" onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, monthly_amt: e.target.value}})}}/>

                <input value={tenantData.lease_details.sales_tax} placeholder="sales-tax" onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, sales_tax: e.target.value}})}}/>

                <input value={tenantData.lease_details.subtotal} placeholder="subtotal" onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, subtotal: e.target.value}})}}/>

                <input value={tenantData.lease_details.total_paid} placeholder="total-paid" onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, total_paid: e.target.value}})}}/>
            </div>

            <div className="deposit-info">
                <input value={tenantData.lease_details.security.security_amt} placeholder="security-amount" onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, security: {...tenantData.lease_details.security, security_amt: e.target.value}}})}}/>

                <input value={tenantData.lease_details.security.security_date_received} placeholder="date-security-received" onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, security: {...tenantData.lease_details.security, security_date_received: e.target.value}}})}}/>


            {/* current issue with 'casting to string' */}
                <div className="security-check">
                    <input type="checkbox" name="security-deposit" 
                    value={tenantData.lease_details.security.security_received}
                    onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, security: {...tenantData.lease_details.security, security_received: true}}})}}/>
                    <label for="security-deposit">Security Deposit</label>
                </div>
            {/* current issue with "casting to string" */}


                <div className="last-check">
                    <input type="checkbox" name="last-month" 
                    value={tenantData.lease_details.last_month_security}
                    onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, last_month_security: true}})}}/>
                    <label for="last-month">Last Month's</label>
                </div>

                <div className="liability-check">
                    <input type="checkbox" name="certificate-of-liability" value={tenantData.lease_details.certificate_liability}
                    onChange={(e) => {setTenantData({...tenantData, lease_details: {...tenantData.lease_details, certificate_liability: true}})}}/>
                    <label for="last-month">Last Month's</label>

                    <label for="certificate-of-liability">Certificate of Liability</label>
                </div>

            </div>
            <div>
                <button className="btn" type="submit" onClick={handleSubmit}>
                    {`${currentId ? "Edit" : "Create"}`}
                </button>
            </div>
        </form>
        </>
    )
}


export default Form;
