import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

const SingleTenant = ({...props}) => {
    const receivedProp = props.tenant
    // console.log("received prop", receivedProp)
    console.log("received contact", receivedProp[0].contact)
    
    return (
        <div>
            <h1>{receivedProp[0].name}</h1>

            <p>{receivedProp[0].company}</p>
            
            <button onClick={() => props.setCurrentId(receivedProp._id)}>
                <ModeEditIcon />
            </button>
            <button onClick={() => {}}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default SingleTenant;
