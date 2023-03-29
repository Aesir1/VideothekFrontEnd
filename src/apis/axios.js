import axios from "axios";

// axios.interceptors.response.use(undefined, error =>{
//     console.log(error);
// })

export default axios.create({
    baseURL: `http://${process.env.REACT_APP_API_URL}/api/`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Credentials': true
    }
});