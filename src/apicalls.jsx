import axios from 'axios'

const serverURL = "https://eflask-idb-be.herokuapp.com";

export async function getAPI(apiCall, params, setVar) {
    try {
        let URLparams = "";
        for (let i = 0; i < params.length; i++) {
            URLparams += "/" + String(params[i]);
        }
        // console.log("params", params);
        const response = await axios.get(serverURL + "/" + apiCall + URLparams);
        console.log(serverURL + "/" + apiCall + URLparams);
        console.log(response.data);
        setVar(response.data);
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            console.log(apiCall + ` Error: ${err.message}`);
        }
    }
}

export async function postAPI(apiCall, params) {
    try {
        const response = await axios.post(serverURL + "/" + apiCall, params);
        console.log(response.data);
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            console.log(apiCall + ` Error: ${err.message}`);
        }
    }
}

export async function deleteAPI(apiCall, params) {
    try {
        const response = await axios.delete(serverURL + "/" + apiCall, params);
        console.log(response.data);
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            console.log(apiCall + ` Error: ${err.message}`);
        }
    }
}

export default axios.create({
    baseURL: serverURL
});
