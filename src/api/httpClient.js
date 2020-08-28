import axios from 'axios';

const httpClient = axios.create({
    baseURL: "https://qd480p28u9.execute-api.us-west-2.amazonaws.com/dev/miiaapi",
    timeout: 5000, // indicates, 1000ms ie. 1 second
    headers: {
        "Content-Type": "application/json",
    }
});

export {
    httpClient
}
