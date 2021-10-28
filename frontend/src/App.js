import './App.css';
import React, {useEffect} from "react";
import Login from "./components/Login/index.jsx";
import Form from "./components/Form/index.jsx";
import {useDispatch} from "react-redux";
import {getTenants} from "./actions/tenants";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTenants());
  }, [dispatch])

  return (
    <>
      {/* <Login /> */}
      <Form />
    </>
  );
}

export default App;
