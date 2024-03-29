// import {useEffect} from "react";
// const FetchAccessToken = async (code) => {
  
//   useEffect(() => {
//     console.log('useEffect is running');
//     // resten av koden...
//   }, [code]); // Endast 'code' som beroende
//       try {
//         const response = await fetch("http://localhost:4001/get-token", {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ code }),
//         });
//         console.log('Code:', code);
//         if (response.status === 200) {
//            console.log('lyckad inloggning');
//            const responseData = await response.text(); // Hämta textsträngen från svaret
//           // Sparar email i localStorage
//           console.log('responseData', responseData);

//             // localStorage.setItem("oauthUser", responseData);
//         }else{  
//           console.log('misslyckad inloggnig')
//         }
      
//         const tokenData = await response.json();
//         console.log('Token data:', tokenData);
    
//         console.log('Åtkomsttoken erhållet!');
//       } catch (error) {
//         console.error('Fel vid försök att byta ut kod för åtkomsttoken:', error.message);
//       }
//     }

// export default FetchAccessToken;
//import { useEffect } from "react";

const FetchAccessToken = async (code) => {
  try {
    const response = await fetch("http://localhost:4001/get-token", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch access token: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.text();
    // console.log('Response data:', responseData);

    // Spara användarinformationen i localStorage
    //localStorage.setItem('userData', JSON.stringify(responseData));

    const tokenData = JSON.parse(responseData);
    //console.log('Token data:', tokenData);

    localStorage.setItem('userData', JSON.stringify(tokenData));

    console.log('Access token obtained successfully!');
  } catch (error) {
    console.error('Error fetching access token:', error.message);
  }
}

export default FetchAccessToken;