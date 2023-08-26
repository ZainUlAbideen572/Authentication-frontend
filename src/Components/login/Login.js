import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast,  } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
const Login = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const handleChange = (evt) => {
        setUser({ ...user, [evt.target.name]: evt.target.value });
    };
    const[error,setError]=useState(false)
    const onLogin = async (evt) => {
        evt.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/new/login', user);
            console.log(res.data);
            localStorage.setItem('user',JSON.stringify(res.data))
            // toast.success('Logged in successfully')
            navigate('/users')
        } catch (error) {
                setError(true)
            console.log('Error:', error.message);
        
        }
    };

    return (
        <div className="container">
          <h1>Login</h1>
          {/* <ToastContainer/> */}
          {error?<div className="alert alert-danger">
            invalid email or password
            </div>:null}
            <form onSubmit={onLogin}>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" onChange={handleChange} className="form-control" id="email" placeholder="Enter your email" />
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name="password" onChange={handleChange} className="form-control" id="password" placeholder="Enter password" />
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
            <button onClick={() => { navigate('/Register') }}>New here</button>
        </div>
    );
};

export default Login;
