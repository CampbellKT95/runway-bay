import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from "./components/Form/index.jsx";
import Auth from './components/Auth/index.jsx';
import {useDispatch} from "react-redux";
import {getTenants} from "./actions/tenants";
import Tenants from "./components/Tenants/Tenants";

function App() {
  const [currentId, setCurrentId] = useState(null);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTenants());
  }, [currentId, dispatch])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Auth user={user} setUser={setUser}/>
        </Route>

        <Route exact path="/tenants">
          <Tenants currentId={currentId} setCurrentId={setCurrentId} setUser={setUser}/>
        </Route>

        <Route exact path="/form">
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
