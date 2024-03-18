import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FetchAccessToken from './FetchAccessToken';
import Employee from '../pages/Employee';

const AuthRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(()=>{
    if(code) FetchAccessToken(code);
  }, [code]);

  return (
    <>
      <Employee />
    </>
  );
}

export default AuthRedirectPage;