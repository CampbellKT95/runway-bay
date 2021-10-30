import React from 'react'
import {useSelector} from "react-redux";
import SingleTenant from "../SingleTenant/index"
import "./tenants.css";


const Tenants = ({currentId, setCurrentId}) => {

    const tenants = useSelector((state) => state.tenants)

    return (
        <>
            <h1>Tenants</h1>
            <div className="tenants-container">

                {tenants.map((tenant) => {
                    return <div className="tenant">
                        <SingleTenant key={tenant._id} tenant={[tenant]} 
                            currentId={currentId} setCurrentId={setCurrentId}
                        />
                    </div>
                    })}
            </div>
        </>
    )
}

export default Tenants
