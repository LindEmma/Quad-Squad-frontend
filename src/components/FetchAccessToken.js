import axios from 'axios';

const FetchAccessToken = async () => {
  try {
    const response = await axios.get('http://localhost:4000/get-token');
    if(response.status === 200){
      const tokenData = response.data;
      const accessToken = tokenData.accessToken;
      return accessToken;
    }
    
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
};

export default FetchAccessToken;
