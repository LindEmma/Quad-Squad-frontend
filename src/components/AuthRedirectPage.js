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

  // Hämta JSON-strängen från localStorage
  const userDataString = localStorage.getItem('userData');

  // Omvandla JSON-strängen till ett JavaScript-objekt
  const userData = JSON.parse(userDataString);

  useEffect(() => {
    if (userData) {
      // Hämtar användarens roll och kör en switch case beroende på vilken roll användaren har
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
          history.push('/'); // Login sidan
      }
    }
  }, [userData, history]);

  return (
    <>
    </>
  );
}

export default AuthRedirectPage;
