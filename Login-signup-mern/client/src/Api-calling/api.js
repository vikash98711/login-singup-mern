import axios from 'axios';

const URL = 'http://localhost:8000';

 export const RegistrationUser= async(data)=>{
    try{
      return await axios.post(`${URL}/register`, data)
       

    }catch(error){
        console.log('api calling is not connecting correct ',error)

    }
};


export const  LoginMember = async (data)=>{
    try{
        return await axios.post(`${URL}/login`, data)
    }catch(error){

    }
}

// export const ValidUsers =async (token)=>{
//     try{
//           return await axios.get(`${URL}/validuser`,token)
//     }catch(error){
//         console.log("api calling is not perfect while calling a validusers",error);
//     }
// }

// export default RegistrationUser