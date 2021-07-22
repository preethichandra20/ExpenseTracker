import React from "react";
import NavBar from "./NavBar";
import Expenses from "./Expenses";

const Profile=(props)=>{
    const userId=localStorage.getItem("userId");
    return(
        <div>
        <div>
        <br></br>
        <NavBar />
        <Expenses userId={userId}/>
        </div>
        </div>
    )
};

export default Profile;