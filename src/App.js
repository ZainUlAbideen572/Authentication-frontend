import React from "react";
import Users from "./Components/users/Users";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Header from "./Headers";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Components/login/Login";
function App(){
        return<div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/users" element={<Users/>}/> 
            <Route path="/Login" element={<Login/>}/> 
        </Routes>
        <Footer/>
        </BrowserRouter>
        </div>
 
   
}

export default App;