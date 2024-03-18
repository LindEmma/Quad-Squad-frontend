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
        if (response.status === 200) {
          const userData = response.data;
          setUserName(userData.userName);
        } else {
          console.log("Failed to fetch user name");
        }
      } catch (error) {
        console.log("Error fetching user name: ", error);
      }
    }
    fetchUsername();
  }, []);
  return (
      <div className="username-container"> {/* Tilldela klassen här */}
      <h4>inloggad som: {userName}</h4>
    </div>
  );
};

export default FetchUsername;
