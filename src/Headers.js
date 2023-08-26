import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toast related components
import "react-toastify/dist/ReactToastify.css"
const Header=()=>{
    const navigate=useNavigate();
    const onLogout=()=>{
        localStorage.removeItem('user')
        toast.success('Loggedout successfully')
        navigate('/Login')
    }
    return <div className="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <a class="navbar-brand" href="/Home">Home</a>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">        
        <li className="nav-item m-3"><Link className="nav-link active" to="/users">Users</Link></li>
        <Link className="btn btn-success m-3" to="/Login">Login</Link> 
        <ToastContainer/>
        <button className="btn btn-secondary m-3"onClick={onLogout}>Logout</button> 
        </ul>
        </div>
        </nav>
    </div>
}
export default Header;