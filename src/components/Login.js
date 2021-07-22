import React,{useRef,useContext} from "react";
import AuthContext from "./store/AuthContext";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Home from "./Home";
import Grid from "@material-ui/core/Grid";
import {useHistory} from "react-router-dom";


const Login= ()=>{
    const history=useHistory();
    const emailInput=useRef();
    const passwordInput=useRef();
    const authCtx=useContext(AuthContext);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const email=emailInput.current.value;
        const password=passwordInput.current.value;
       await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArgm0dOf2LHVwbWDMwainvbPK4jF2n1bc',
        {
            method:'POST',
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            if(res.ok){
                return res.json();
            }
            else
            {
                return res.json().then((data) => {
                    let errorMessage="Authentication Failed";
                    if(data && data.error && data.error.message)
                    {
                        errorMessage=data.error.message;
                    }
                    alert(errorMessage);
                });
            }
        }).then((data)=>{
            if(data!==undefined){
            localStorage.setItem("userId",data.localId);
            const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
            authCtx.login(data.idToken,expirationTime.toISOString());
            history.push('/profile');
            }
        }).catch((err)=>{
            alert("Too many requests at the moment");
            history.push("/login");
        })
};
    return(
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh"  className="box">
        <Grid container justifyContent="center" alignItems="center" spacing={8}>
        <Home type="login" />
        <Grid item className="register">
        <form onSubmit={handleSubmit}> 
        <h2>Login to your Account</h2>
        <span className="material-icons" style={{fontSize:"100px"}}>account_circle</span>
        <br></br>
        <TextField required={true} inputProps={{autoComplete: 'none'}} id="filled-required2" label="Email" type="email" variant="filled" className="input" inputRef={emailInput} />
        <br></br>
        <TextField required={true} inputProps={{autoComplete: 'none'}} id="filled-password-input" label="Password" type="password" variant="filled" className="input" inputRef={passwordInput} />
        <br></br>
        <Button variant="contained" color="primary" type="submit">Login</Button>
        </form>
        </Grid>
        </Grid>
        </Box>
    );
}

export default Login;