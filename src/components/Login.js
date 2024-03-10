import React, { useState,useEffect  } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
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
        <h1>Logga in</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          LoginHandler();
        }}
      >
        <label htmlFor="employeID">* Anställningsid</label>
        <input
          type="text"
          name="employeID"
          value={employeID}
          placeholder="Anställningsid"
          required
          onChange={(e) => setEmployeID(e.target.value)}
        />
        <label htmlFor="password">* Lösenord</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Lösenord"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Logga in</button>
        <NotionLogin/>
      </form>
    </div>
  );
};

export default Login;
