import React from 'react'
import {useSelector} from "react-redux";


const Tenants = () => {

    const tenants = useSelector((state) => state.tenants)

    console.log(tenants);

    return (
        <>
            <h1>Tenants</h1>
        </>
    )
}

export default Tenants
