import { Outlet, Navigate } from "react-router-dom";
import React,{useContext} from "react";
import { userContext } from "../context.js/AuthContext";

const Private = ()=>{
    const { user } = useContext(userContext)

    return(
        user  ? <Outlet /> : <Navigate to='/login' />
    )

}

export default Private