import {
    httpClient
} from './httpClient';

const END_POINT = '/types';


const getTypes = () => httpClient.get(END_POINT);

// you can pass arguments to use as request parameters/data
// types filtered by state
const getTypesbyState = (state) => httpClient.get(END_POINT, {
    state
});


export {
    getTypes,
    getTypesbyState
}
