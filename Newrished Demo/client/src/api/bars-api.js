import * as request from "./requester.js";

const host = 'http://localhost:3030';

export const getAllBars = async () => {
  try {
   
    const response = await request.get("http://localhost:3030/data/bars");
    return response; 

  } catch (error) {
    console.error('Error fetching bars:', error);
    
    throw error; 
  }
};


export const getOneBar = (id) => request.get(`http://localhost:3030/data/bars/${id}`);



export const create =(data)=>request.post ('http://localhost:3030/data/bars',data)

export const remove =(id) => request.del(`http://localhost:3030/data/bars/${id}`)

export const update =(id,data) =>request.put(`http://localhost:3030/data/bars/${id}`,data)