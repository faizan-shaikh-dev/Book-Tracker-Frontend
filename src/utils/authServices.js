
import API from "../api/axios";

//Register API
export const  registerUser = (payload)=>{
    return API.post('/auth/register',payload);
};

//Login API 
export const loginUser = (payload) =>{
    return API.post('/auth/login', payload);
};

