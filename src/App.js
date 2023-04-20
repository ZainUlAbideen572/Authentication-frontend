import React, { useState } from "react";
function App(){
  const[Search,setSearch]=useState('')
  const [data,setdata]=useState([])
  const submit=(evt)=>{
    evt.preventDefault()
    fetch(`http://www.omdbapi.com/?s=${Search}&apikey=263d22d8`).then(res=>res.json())
    .then(value=>setdata(value.Search))
  }
 
   
  return<center>
    <div>
    <form onSubmit={submit}>
     <div>
      <h1>Search</h1>
      <input type="text" value={Search} onChange={(e)=>setSearch(e.target.value)}/><br/>
      <hr/>
      <input type='submit' className="btn btn-success"/>
      <div className="row" >
          {data.length>=1?data.map(movie=>
          <div className="col-md-4" key={movie.imdbID}>
            <div className="card" style={{"width": "18rem"}}>
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
              <h4 className="card-title">{movie.Title} {movie.Year}</h4>
              </div>
              </div>
          </div>
            ):null}
            </div>
     </div>
    </form>
  </div>
  </center>
}

export default App;