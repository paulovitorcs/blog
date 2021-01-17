import axios from 'axios';

const http = axios.create({
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    },
    crossDomain: true,
});

export default http;
