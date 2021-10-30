import React from 'react'
import {useSelector} from "react-redux";
import SingleTenant from "../SingleTenant/index"


const Tenants = ({currentId, setCurrentId}) => {

    const tenants = useSelector((state) => state.tenants)

    return (
        <>
            <h1>Tenants</h1>

            {tenants.map((tenant) => {
                return <div>
                    <SingleTenant key={tenant._id} tenant={[tenant]} 
                        currentId={currentId} setCurrentId={setCurrentId}
                    />
                </div>
            })}
        </>
    )
}

export default Tenants
