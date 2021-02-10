import React, {useState} from 'react'
import styles from './App.module.css'
import Navbar from "../Header/Navbar"
import Content from "../Content/Content";
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../Login/Login";
import useToken from "./useToken";

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

function App() {

    const { token, setToken } = useToken();

    // const token = getToken();

    if (!token) {
        return <Login setToken={setToken}/>
    }
    return (
        <div className={styles.wrapper}>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/preferences">
                        <Preferences/>
                    </Route>
                </Switch>
            </BrowserRouter>
            <Navbar/>
            <Content/>
        </div>
    );
}

export default App;
