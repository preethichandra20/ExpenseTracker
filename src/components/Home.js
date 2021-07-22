import React from "react";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const Home=(props)=>{
    let content="",type="";
    if(props.type==="register")
    {
        content="Already have an account?";
        type="login";
    }
    else
    {
        content="Don't have an account?"
    }
    return(
        <Grid item>
        <h1>Expense Tracker</h1>
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_xxjvkrex.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
        <p>{content}</p>
        <Link to={"/"+type} className="link">{type.length!==0?type[0].toUpperCase()+type.slice(1,type.length):"Register"}</Link>
        </Grid>
    );
}
export default Home;