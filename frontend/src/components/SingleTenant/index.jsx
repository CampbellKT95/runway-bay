import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

const SingleTenant = (props) => {
    const receivedProp = props.tenant
    console.log(receivedProp)
    
    return (
        <div>
            <h1>{receivedProp.name}</h1>
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
