import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register=()=>{
    const[user,setUser]=useState([]);
    const Navigate=useNavigate();
    const change=(evt)=>{
        setUser({[evt.target.name]:evt.target.value})
        evt.preventDefault();       
    }
    return<div>
      <form>
      <label for="first-name" class="form-label">firstname</label>
    <input type="text" name="firstname"onChange={change} class="form-control" id="firstname" placeholder="enter your firstname"/>
    <label for="user-name" class="form-label">username</label>
    <input type="text" name="username"onChange={change} class="form-control" id="username" placeholder="enter your name"/>
    <label for="password" class="form-label">password</label>
    <input type="password" name="password"onChange={change} class="form-control" id="password" placeholder="enter password"/>
    {/* <label for="password" class="form-label">confirm password</label>
    <input type="password" name="password"onChange={change} class="form-control" id="password" placeholder="enter password"/> */}
     </form>
    <button className="btn btn-success">Submit</button><br/> 
    <button onClick={()=>{Navigate('/Login')}} className="btn btn-danger">Already registered</button> 
    </div>
}
export default Register;