import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QuadSquadLogo from "../img/QuadSquad 1.png";
import "../css/Login.css";



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
          history("/default-page");
          break;
      }
    }
  }, [userRole, history]);

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

      }
    } catch (error) {
      console.log("Error: ", error);
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

            <div class="inputBox w50">
              <button type="submit">Logga in</button>
            </div>
          </form>
        </section>

      </section>
    </div>
  );
};

export default Login;
