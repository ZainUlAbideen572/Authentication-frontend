import React, { useEffect, useState } from "react";
import axios from "axios"
import Useritem from "./Useritems";
import { toast, ToastContainer } from "react-toastify"; 
// import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom";

function Users() {
    const[Users,setUsers]=useState([  
   ])
   const[error,setError]=useState(false)
   const[loggedin,setLoggedin]=useState(false)
 const navigate=useNavigate()
useEffect(()=>{
     const url="http://localhost:4000/userdetails"
     const headers={}
     const userinfo=localStorage.getItem('user') 
     if(userinfo){
      const token=JSON.parse(userinfo).token
      headers.Authorization=`Bearer ${token}`
      setLoggedin(true)
      toast.success('Logged in successfully')
     }else{
      setLoggedin(false)
     }
     axios.get(url,{headers})
     .then(response=>{
      setError(true)
      setUsers(response.data)
      console.log(response.data)})
     .catch(error=>{
      if(error.response&&error.response.status==401){
        navigate('/Login')
      }else{
        setError(true)
      }
     })
     },[])
    
    return<div className="container">
      <ToastContainer/>
      {loggedin?
      <div className="row">
      {Users.map(User=><Useritem Users={User}/>)}
      </div>:<div className="alert alert-danger">
        unauthorised
        </div>}
    </div>
}    

export default Users;