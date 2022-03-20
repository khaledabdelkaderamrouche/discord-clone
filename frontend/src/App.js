import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/AuthPages/LoginPage";
import RegisterPage from "./Pages/AuthPages/RegisterPage";
import DashboardPage from "./Pages/DashboardPages/DashboardPage";
import AlertNotification from "./components/shared/AlertNotification";

function App () {
    return (
        <>
            <AlertNotification/>
            <Router>
                <Routes>
                    <Route exact path='/dashboard' element={<DashboardPage/>}/>
                    <Route exact path='/login' element={<LoginPage/>}/>
                    <Route exact path='/register' element={<RegisterPage/>}/>
                    <Route exact path='/' element={<Navigate replace to="/dashboard"/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
