import {
    httpClient
} from './httpClient';

const END_POINT = '/users';


const getAllUsers = () => httpClient.get(END_POINT);

// you can pass arguments to use as request parameters/data
//Create User
const createUser = (userObj) => httpClient.post(END_POINT, {
    userObj
});
//Update User
const updateUser = (userObj) => httpClient.post(END_POINT, {
    userObj
});

export {
    getAllUsers,
    createUser
}
