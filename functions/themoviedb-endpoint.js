const fetch = require('node-fetch');
require('dotenv').config();

exports.handler = async (event, context) => {
  const query = event.queryStringParameters.query;
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}`);
    console.log('----response---', response);
    
    const data = await response.json();
    const json = JSON.stringify({ data });
    
    return { 
      statusCode: 200, 
      body: json
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
