import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import FetchAccessToken from './FetchAccessToken';

const AuthRedirectPage = () => {
  const history = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(()=>{
    const fetchData = async () => {
      if (code) await FetchAccessToken(code);
    };
    fetchData();
  }, [code]);

  // Get userData from localstorage
  const userDataString = localStorage.getItem('userData');

  // Converts userData to JS object
  const userData = JSON.parse(userDataString);

  useEffect(() => {
    if (userData) {
      // Returns user role in a switch case depending on what role user have
      switch(userData.oauthUserRole[0]) {
        case "Projektledare":
          history('/ProjectManager');
          break;
        case "Anställd":
          history('/Employee');
          break;
        case "Chef":
          history('/Manager')
          break;
        default:
          history.push('/'); // Login page
      }
    }
  }, [userData, history]);

  return (
    <>
    </>
  );
}

export default AuthRedirectPage;
