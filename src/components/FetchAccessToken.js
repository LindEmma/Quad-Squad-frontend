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

    // Saving the response from fecth in responseData
    const responseData = await response.text();

    const tokenData = JSON.parse(responseData);
    
    //converts this object into a JSON string
    localStorage.setItem('userData', JSON.stringify(tokenData));

    console.log('Access token obtained successfully!');
  } catch (error) {
    console.error('Error fetching access token:', error.message);
  }
}

export default FetchAccessToken;