import React from 'react'
import {useSelector} from "react-redux";
import {useHistory, Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import SingleTenant from "../SingleTenant/index"


const Tenants = ({currentId, setCurrentId, setUser}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const tenants = useSelector((state) => state.tenants)


    const logout = () => {
        dispatch({type: "LOGOUT"});
        history.push("/");
        setUser(null);
  }

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
            <Link to="/form"><button>Create New</button></Link>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default Tenants
