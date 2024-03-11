import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QuadSquadLogo from "../img/QuadSquad 1.png";
import "../css/Login.css";
import NotionLogin from "../components/NotionLogin";
// import { ToastContainer, toast } from 'react-toastify';



const Login = () => {
  const [employeID, setEmployeID] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const history = useNavigate();

  useEffect(() => {
    if (userRole) {
      switch (userRole) {
        case "Anställd":
          history("/Employee");
          break;
        case "Chef":
          history("/Manager");
          break;
        case "Projektledare":
          history("/ProjectManager");
          break;
        default:
          history("/");
          break;
      }
    }
  }, [userRole, history]);

  async function GetUsernameAndRole() {
    try {
      const getResponse = await axios.get("http://localhost:4000/usernameAndRole");
      if (getResponse.status === 200) {
        const userData = getResponse.data;
        setUserRole(userData.userRole[0]);
      }else {
        console.log("Failed to fetch username and role");
      }
    } catch (error) {
      console.log("Error fetching username and role: ", error);
    }
  }
  
  async function LoginHandler() {
    try {
      const response = await axios.post(
        "http://localhost:4000/submitFormToNotion",
        {
          employeID,
          password
        }
      );
      if (response.status === 200) {

        const userData = response.data;
        setUserRole(userData.userRoles[0]);


        GetUsernameAndRole();
      } else {
        console.log("Login failed: Incorrect employeID or password");

      }
    } catch (error) {
      console.log("Error during login: ", error);
    }
  }
  return (
    <div>

      <section className="login-page">
        <section className="picture-container">
        </section>

        <section className="login-container">
          <div class="logo">
            <img src={QuadSquadLogo} alt="Loga" />
          </div>
          <form className="formBox"
            onSubmit={(e) => {
              e.preventDefault();
              LoginHandler();
            }}
          >
            <div className="inputBox w70">
              <input
                type="text"
                name="employeID"
                value={employeID}
                placeholder="Anställnings ID"
                required
                onChange={(e) => setEmployeID(e.target.value)}
              /></div>

            <div class="inputBox w70">
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Lösenord"
                required
                onChange={(e) => setPassword(e.target.value)}
              /></div>

            <div class="login">
              <button id="login-btn" type="submit">Logga in</button>
              <NotionLogin/>
            </div>
          </form>
        </section>

      </section>
    </div>
  );
};

export default Login;
