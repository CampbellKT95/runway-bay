import React, {useEffect} from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./singletenant.css";
import {useDispatch} from "react-redux";
import {deleteTenant} from "../../actions/tenants";

const SingleTenant = ({...props}) => {
    const dispatch = useDispatch();

    const receivedProp = props.tenant
    
    return (
        <div className="tenant">
            <h1>{receivedProp[0].name}</h1>

            {receivedProp[0].location.property.building.map((item) => {
                return <h4>building: {item}</h4>
            })}

            {receivedProp[0].location.property.unit.map((item) => {
                return <h4>unit: {item}</h4>
            })}


            <p>{`Rent: $${receivedProp[0].lease_details.monthly_amt} on 
            ${receivedProp[0].lease_details.due_day}`}</p>
            
            <button onClick={() => props.setCurrentId(receivedProp[0]._id)}>
                <ModeEditIcon />
            </button>
            
            <button onClick={() => dispatch(deleteTenant(receivedProp[0]._id))}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default SingleTenant;
