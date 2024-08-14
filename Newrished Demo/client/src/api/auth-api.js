import {post,get} from "./requester.js"

const endpoints = {
    'login': 'http://localhost:3030/users/login',
    'register': 'http://localhost:3030/users/register',
    'logout': 'http://localhost:3030/users/logout'
};
 

export const login = async (email,password) => {
   const authData= await post(endpoints.login,{email,password})
  
     return authData
}

export const register = async (email,password)=>{
    const authData= await post(endpoints.register,{email,password})
 
    return authData
}


export const logout = () => get(endpoints.logout)










