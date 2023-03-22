// import Loginuser from "../../client/src/Api-calling/api.js";
import userdb from "../models/userSchema.js";
import bcrypt from "bcryptjs";
// import mongoose from "mongoose";
import {authenticate} from "../middleware/authenticate.js"




// user registration 

 export const User = async(req,res)=>{
const {fname, email, password, cpassword} = req.body;
if(!fname || !email || !password || !cpassword){
    res.status(422).json({error: "fill all the details"})
}

try{
   const preuser = await userdb.findOne({email:email});
   if(preuser){
    res.status(400).json({error: "This email is already Exist"})
   } 
   else if(password !== cpassword){
    res.status(400).json({error: "password and confirm password are not match"})

   } 
   else{
    const finaluser = new userdb({
        fname,email,password,cpassword
    });

           const storedata =   await finaluser.save();
        res.status(201).json({status:201, storedata })
        //    console.log(finaluser);

   }
}catch(error){
    res.status(400).json(error);
console.log("catch block error");
}
    



}

// User Login 

export const UserLogin = async (req,res)=>{
      const {email, password} = req.body;

      if(!email || !password ){
        res.status(422).json({error:"fill all the details"})
      }
      
      try{
            const userValid = await userdb.findOne({email:email});
            if(userValid){
               const isMatch = await bcrypt.compare(password,userValid.password)
                
               if(!isMatch){
                 res.status(422).json({error:"invalid details"})
               }else{

                // token generate    
                const token = await userValid.generateAuthtoken();
                // console.log(token);

                // cookie genrate 
                res.cookie("usercookie",token,{
                  expires:new Date(Date.now()+9000000),
                  httpOnly:true
                });

                const result ={
                  userValid,
                  token
                }
                res.status(201).json({status:201,result})
               }
                        
            }
      }catch(error){
res.status(201).json(error);
console.log("catch block error");
      }
} 

export const ValidUserLogin = async(req, res)=>{
 try{
 const  ValidUserOne = await userdb.findOne({_id:req.userid })
 res.status(201).json({status:201,ValidUserOne});
 }catch(error){
  res.status(401).json({status:401,error});

 }
}


// export default User;