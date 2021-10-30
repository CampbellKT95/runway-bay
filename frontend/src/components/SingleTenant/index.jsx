import React, {useEffect} from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

const SingleTenant = ({...props}) => {
    const receivedProp = props.tenant
    console.log("received prop", receivedProp)

    useEffect(() => {
        console.log("id", props.currentId)
  }, [props.currentId])
    
    return (
        <div>
            <h1>{receivedProp[0].name}</h1>

            <p>{receivedProp[0].company}</p>
            
            <button onClick={() => props.setCurrentId(receivedProp[0]._id)}>
                <ModeEditIcon />
            </button>
            <button onClick={() => {}}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default SingleTenant;
