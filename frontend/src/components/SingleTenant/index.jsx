import React, {useEffect} from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./styles.css";
import {useDispatch} from "react-redux";
import {deleteTenant} from "../../actions/tenants";
import {Link} from "react-router-dom";

const SingleTenant = ({...props}) => {
    const dispatch = useDispatch();

    const receivedProp = props.tenant
    console.log("received prop", receivedProp)

    useEffect(() => {
        console.log("id", props.currentId)
  }, [props.currentId])
    
    return (
        <div className="tenant">
            <h1 className="tenant-name">{receivedProp[0].name}</h1>

            <h4 className="rent">{`Rent: $${receivedProp[0].lease_details.monthly_amt} on 
            ${receivedProp[0].lease_details.due_day}`}</h4>

                {receivedProp[0].location.property.building.map((item) => {
                return <p className="property-building">Building: {item}</p>
            })}

            {receivedProp[0].location.property.unit.map((item) => {
                return <p className="property-unit">Unit: {item}</p>
            })}



            
            <Link to="/form"><button onClick={() => props.setCurrentId(receivedProp[0]._id)} className="tenant-btn">
                <ModeEditIcon className="icons" />
            </button></Link>

            <button onClick={() => dispatch(deleteTenant(receivedProp[0]._id))} className="tenant-btn">
                <DeleteIcon className="icons" />
            </button>
        </div>
    )
}

export default SingleTenant;
