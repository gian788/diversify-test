const fetch = require('node-fetch');

const url = 'https://api-pub.ethfinex.com/v2/';

async function request(pathParams, queryParams) {
  try {
    const req = await fetch(`${url}/${pathParams}?${queryParams}`);
    const response = await req.json();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

request('trades/tBTCUSD/hist', 'limit=120&sort=-1');
