import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useHistory, Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import SingleTenant from "../SingleTenant/index";
import "./styles.css";
import Contact from "../Contact/index";

const Tenants = ({currentId, setCurrentId, setUser}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const tenants = useSelector((state) => state.tenants)


    const logout = () => {
        dispatch({type: "LOGOUT"});
        history.push("/");
        setUser(null);
  }

  const [memo, setMemo] = useState("");

    return (
        <>
            <h1 className="tenants-title">All Tenants</h1>

            <Link to="/form"><button className="tenants-btn">Create New</button></Link>
            <button onClick={logout} className="tenants-btn">Logout</button>

            <div className="tenants-container">
                {tenants.map((tenant) => {
                    return <div>
                        <SingleTenant key={tenant._id} tenant={[tenant]} 
                            currentId={currentId} setCurrentId={setCurrentId}
                        />
                    </div>
                })}
            </div>
            <div className="memo-container">
                <textarea value={memo} className="memo" cols="30" rows="4" placeholder="Message Tenants" onChange={(e) => setMemo(e.target.value)}/>
                <button className="send-btn">Send</button>
            </div>
            <Contact />
        </>
    )
}

export default Tenants
