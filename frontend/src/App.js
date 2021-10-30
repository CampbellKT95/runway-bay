import './App.css';
import React, {useEffect, useState} from "react";
import Login from "./components/Login/index.jsx";
import Form from "./components/Form/index.jsx";
import {useDispatch} from "react-redux";
import {getTenants} from "./actions/tenants";
import Tenants from "./components/Tenants/Tenants";

function App() {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTenants());
  }, [currentId, dispatch])


  return (
    <>
      <Login />
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
      <Tenants currentId={currentId} setCurrentId={setCurrentId}/>
    </>
  );
}

export default App;
