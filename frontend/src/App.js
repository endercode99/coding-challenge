
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import JobList from "./components/JobList"; 


export const api = axios.create({
  baseURL: `http://localhost:8000/api/v1`
})

function App() {

  const [rows, setRows] = useState([]);


  useEffect(() => { 
    api.get("/jobs")
        .then(res => {      
            setRows(res.data)
         })
         .catch(error=>{
             console.log("Error")
         })
  }, [])

  return (
    <div className="App">
      <h1>Job Board</h1>
      <JobList rows={rows}>
      </JobList>
    </div>
  );
}

export default App;
