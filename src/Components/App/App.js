import React, { useState } from 'react'
import styles from './App.module.css'
import Navbar from "../Header/Navbar"
import Content from "../Content/Content";
import Settings from "../Settings/Settings";
// import Dashboard from "../Dashboard/Dashboard";
// import Preferences from "../Preferences/Preferences";
// import {BrowserRouter, Route, Switch} from "react-router-dom";
// import Login from "../Login/Login";
// import useToken from "./useToken";


// function getToken() {
//     const tokenString = sessionStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
// }
//
// function App() {
//
//     const { setToken } = useToken();
//
//     const token = getToken();
//
//
//     if (!token) {
//         return <Login setToken={setToken}/>
//     }
const App = () => {
    return (
        <div className={styles.wrapper}>
            {/*<BrowserRouter>*/}
            {/*    <Switch>*/}
            {/*        <Route path="/dashboard">*/}
            {/*            <Dashboard/>*/}
            {/*        </Route>*/}
            {/*        <Route path="/preferences">*/}
            {/*            <Preferences/>*/}
            {/*        </Route>*/}
            {/*    </Switch>*/}
            {/*</BrowserRouter>*/}

            {/*<Navbar/>*/}
            {/*<Content/>*/}

            <Settings />
        </div>
    );
}

export default App;
