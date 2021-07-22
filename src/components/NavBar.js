import React,{useContext} from "react";
import AuthContext from "./store/AuthContext";
import {Link } from "react-router-dom";

const NavBar=()=>{
    const authContext=useContext(AuthContext);
    const handleLogout=()=>{
        authContext.logout();
        localStorage.removeItem("userId");
    }
    return(
        <nav className= "navbar">
        <h1><span class="material-icons">
        account_balance_wallet
        </span>Expense-Tracker
        </h1>
        <ul type="none">
        <li>
        <Link to="/login" className="link" onClick={handleLogout}>
        <span class="material-icons" style={{fonstSize:"25px"}}>logout</span>Logout</Link> 
        </li>
        </ul>
        </nav>

    )
}

export default NavBar;