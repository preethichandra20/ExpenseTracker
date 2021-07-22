import React,{useState} from "react";

const AuthContext=React.createContext({
    token:'',
    isUserLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
});

export const AuthContextProvider=(props)=>{
    /*const remainingTime=((expirationTime)=>{
        const currentTime=new Date().getTime();
        const adjExpirationTime=new Date(expirationTime).getTime();
        const remTime=adjExpirationTime-currentTime;
        return remTime;
    })*/
    const initialToken=localStorage.getItem('token');
    const [token,setToken]=useState(initialToken);
    const isUserLoggedIn=!!token;
    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token');
    };
    const loginHandler=(token,expirationTime)=>{
        setToken(token);
        localStorage.setItem('token',token);
        /*const remTime=remainingTime(expirationTime);
        setTimeout(logoutHandler,remTime);*/
    };
    const contextValue={
        token:token,
        isUserLoggedIn:isUserLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    };
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;