import axios from 'axios';
const https = require('https');

const agent = new https.Agent({
    rejectUnauthorized: false,
});

const httpClient = axios.create({
    baseURL: "https://qd480p28u9.execute-api.us-west-2.amazonaws.com/dev/miiaapi",
    timeout: 5000, // indicates, 1000ms ie. 1 second
    headers: {
        "Content-Type": "application/json",
    },
    httpsAgent: agent
});

export {
    httpClient
}
