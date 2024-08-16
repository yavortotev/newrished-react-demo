import { get, post } from "./requester"

const baseUrl='http://localhost:3030/data/comments'



const create =async (id,comment)=> {
    
    
   const result =await  post(baseUrl,{gameId:id,comment}) 
   const coments =Object.values(result)
   return coments
}

const getAllComents =async (id)=> {
    
    
    const result =await  get( `http://localhost:3030/data/comments?where=gameId%3D%22${id}%22`)
    const coments =Object.values(result)
    console.log(coments);
    
    return coments
 }



export default {
    create,
    getAllComents
};