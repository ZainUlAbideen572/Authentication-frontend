import React from "react";
import image from'./download.jpg'
const Useritem=({Users})=>{
   return <div>
            <h3>name:{Users.name}</h3>
            <h3>origin:{Users.origin}</h3>
            <img className="rounded-circle"src={image} alt="img"width="100"  height="100"/>
            </div>
            }
export default Useritem;
