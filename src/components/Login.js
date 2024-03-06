import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router,Route,Routes, Navigate } from "react-router-dom";
import Employee from "../pages/Employee";

const Login = () => {
  const [employeID, setEmployeID] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  async function login(){
    try{
      const response = await axios.post("http://localhost:4000/submitFormToNotion",{
        employeID,
        password
      });

      if(response.status === 200){
        localStorage.setItem("user-info",JSON.stringify(response.data))
        setLoggedIn(true);
        // return(
        //   // <Router>
        //   //   <Routes>
        //   //     <Route exact path="/pages" component={Employee} />
        //   //   </Routes>
        //   // </Router>
        // );
      } else {
        console.log('wrong employeid or password')
      }
    } catch(error) {
      console.log('Error: ',error);
    }
  }

  return (
    <div>
      <h1>Logga in</h1>
      <form onSubmit={(e) => {e.preventDefault(); login();}}>
        <label htmlFor="employeID">* Anställningsid</label>
        <input type="text" name="employeID" value={employeID} placeholder="Anställningsid" required onChange={(e) => setEmployeID(e.target.value)} />
        <label htmlFor="password">* Lösenord</label>
        <input type="password" name="password" value={password} placeholder="Lösenord" required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Logga in</button>
      </form>
      {loggedIn && <Router><Navigate to={<Employee/>} /></Router>}
    </div>
  );
};


export default Login;
