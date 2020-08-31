import {
    httpClient
} from './httpClient';

const BMI_END_POINT = '/predictBMI';
const EMO_END_POINT = '/predictemotion';

// set the new base URL 
var config = {
    baseURL: "http://54.179.135.246:5000",
    timeout: 15000, // indicates, 1000ms ie. 1 second
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    responseType: 'text'
};

//httpClient.defaults.baseURL = 'http://54.179.135.246:5000';
//httpClient.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//httpClient.headers = "Content-Type": "multipart/form-data" ;
// const getTypes = () => httpClient.get(END_POINT);

const getBMI = function (FILE) {
    console.log("getBMI axios call");
    console.log(FILE);
    const formData = new FormData()
    formData.append('file', FILE, FILE.name)
    formData.append('name', FILE.name)
    return httpClient.post(BMI_END_POINT, formData, config);

}


const getEmotion = function (FILE) {
    console.log("getEmotion axios call");
    console.log(FILE);
    const formData = new FormData()
    formData.append('file', FILE, FILE.name)
    formData.append('name', FILE.name)
    return httpClient.post(EMO_END_POINT, formData, config);

}


export {
    getBMI,
    getEmotion
}
