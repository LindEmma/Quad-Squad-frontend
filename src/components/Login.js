import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QuadSquadLogo from "../img/QuadSquad 1.png";
import "../css/Login.css";
import NotionLogin from "../components/NotionLogin";
import { Alert } from "react-bootstrap";


const Login = () => {
  const [employeID, setEmployeID] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loginError, setLoginError] = useState(false);
  const history = useNavigate();
// switch case depending on which role user have. User get redirected to that page
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
    //Axios request from server to check usersname and role
    try {
      const getResponse = await axios.get(
        "http://localhost:4000/usernameAndRole"
      );
      if (getResponse.status === 200) {
        //Save response in userData and saves userId in localstorage
        const userData = getResponse.data;
        setUserRole(userData.userRole[0]);
        localStorage.setItem("userID", JSON.stringify(userData.userId));
      } else {
        setLoginError(true);
        console.log("Failed to fetch username and role");
      }
    } catch (error) {
      console.log("Error fetching username and role: ", error);
    }
  }

  async function LoginHandler() {
    // Axios request sends employeid and password to server and check if there is a match with database
    try {
      const response = await axios.post(
        "http://localhost:4000/submitFormToNotion",
        {
          employeID,
          password,
        }
      );
      if (response.status === 200) {
        GetUsernameAndRole();
      } else {
        setLoginError(true);
        console.log("Login failed: Incorrect employee-ID or password");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setLoginError(true);
        console.log("Login failed: Incorrect employeID or password");
      } else {
        console.log("Error during login: ", error);
      }
    }
  }
  return (
    <div>
      <section className="login-page">
        <section className="picture-container"></section>

        <section className="login-container">
          <div className="logo">
            <img
              src={QuadSquadLogo}
              alt="Loga"
            />
          </div>
          {/*if login fails, an alert will show */}
          {loginError && (
            <Alert variant="danger">Fel anställnings-id eller lösenord</Alert>
          )}
          <form
            className="formBox"
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
              />
            </div>

            <div className="inputBox w70">
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Lösenord"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login">
              <button
                id="login-btn"
                type="submit"
              >
                Logga in
              </button>
              <NotionLogin />
            </div>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Login;
