const FetchAccessToken = async (code) => {
  try {
    const response = await fetch("http://localhost:4000/get-token", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    console.log('Code:', code);
    if (!response.ok) {
      throw new Error('Kunde inte byta ut kod för åtkomsttoken');
    }
  
    const tokenData = await response.json();
    console.log('Token data:', tokenData);

    console.log('Åtkomsttoken erhållet!');
  } catch (error) {
    console.error('Fel vid försök att byta ut kod för åtkomsttoken:', error.message);
  }
};

export default FetchAccessToken;
