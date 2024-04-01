import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/fetchUsername.css";

const FetchUsername = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    async function fetchUsername() {
      try {
        const response = await axios.get(
          "http://localhost:4000/usernameAndRole"
        );
        //If status is good, we store username in setUserName hook
        if (response.status === 200) {
          const userData = response.data;
          setUserName(userData.userName);
        } 
           else {
            // If no user is found in localstorage
            setUserName("Kunde ej hämta användarnamn");
          }
      } catch (error) {
        console.log("Error fetching user name: ", error);
      }
    }
    fetchUsername();
    //We use [] so it only shows one time
  }, []);
  return (
      <div className="username-container">
      <h4>{userName}</h4>
    </div>
  );
};

export default FetchUsername;
