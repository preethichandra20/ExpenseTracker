import React,{useRef,useContext} from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "./store/AuthContext";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Home from "./Home";

const Register= ()=>{
   const emailInputRef=useRef();
   const passwordInputRef=useRef();
   const nameRef=useRef();
   const authCtx=useContext(AuthContext);
   const history=useHistory();
    const handleFormSubmit=async (e)=>{
        e.preventDefault();
        const email=emailInputRef.current.value;
        const password=passwordInputRef.current.value;
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArgm0dOf2LHVwbWDMwainvbPK4jF2n1bc',
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
        }
        ).then(res=>{
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
            localStorage.setItem('userId',data.localId);
            const expirationTime = new Date(new Date().getTime() + +data.expiresIn * 1000);
            authCtx.login(data.idToken,expirationTime.toISOString());
            history.push('/profile');
        }})
        .catch((err)=>{
            alert(err.message);
        });
    };
    return(
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh"  className="box">
        <Grid container justifyContent="center" alignItems="center" spacing={8}>
        <Home type="register" />
        <Grid item className="register" >
        <form onSubmit={handleFormSubmit}>
        <h2>Create an Account</h2>
        <span className="material-icons" style={{fontSize:"100px"}}>account_circle</span>
        <br></br>
        <TextField required={true} inputProps={{autoComplete: 'none'}}  id="filled-required" label="Name"  type="text" variant="filled" className="input" inputRef={nameRef}/>
        <br></br>
        <TextField required={true}  inputProps={{autoComplete: 'none'}} id="filled-required1" label="Email" type="email" variant="filled" className="input" inputRef={emailInputRef} />
        <br></br>
        <TextField required={true}   inputProps={{autoComplete: 'none'}} id="filled-password-input" label="Password" type="password" variant="filled" className="input" inputRef={passwordInputRef} />
        <br></br>
        <Button variant="contained" color="primary" type="submit">Register</Button>
        </form>
        </Grid>
        </Grid>
        </Box>
        
    );
}

export default Register;
