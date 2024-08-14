import { getAccessToken } from "../utils/authUtils.js";

export async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

        
           const accessToken=getAccessToken() 
           if (accessToken) {
           options.headers['X-Authorization'] = accessToken;
           }

    try {
        const response = await fetch( url, options);

        if (!response.ok) {
            const err = await response.json();

            if (response.status == 403 && err.message == 'Invalid access token') {
               localStorage.removeItem("auth")  
              
               return
            }

            throw new Error(err.message);
        }

       


        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
    }  catch (err) {
        
        throw new Error(err.message); 
    }
    
}


export const get = (url) => requester('get', url);
export const post = (url, data) => requester('post', url, data);
export const put = (url, data) => requester('put', url, data);
export const del = (url) => requester('delete', url);






