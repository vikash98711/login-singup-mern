import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {RegistrationUser} from '../Api-calling/api';
import Header from './Header';
import './login.css';
 const intialvalue={

  fname:"",
  email:"",
  password:"",
  cpassword:""
}
 const Register = () => {
  const Navigate = useNavigate();
  const [spassword, showpassword]=useState(false )

  const [confirmpassword, cshowpassword]=useState(false)
const [get, setdata]= useState(intialvalue)
const {fname, email, password, cpassword}= get;
 
const getdata = (e)=>{

setdata({...get, [e.target.name]:e.target.value})
// console.log(get);
}


const addUserData = async(e)=>{
  e.preventDefault();
  // const {fname, email, password, cpassword}= get;

// if(fname === ""){
//   alert("plz enter your name")
// }else if(email === ""){
//   alert("enter your name")
// }
// else if(!email.includes("@")){
//   alert("enter you valid email")
// }
// else if(password === ""){
//   alert("plz enter your password")

// }else if(password.length < 6){
//   alert("password must be 6 char")
// }

// else if(cpassword === ""){
//   alert("plz enter your cpassword")

// }
// else if(cpassword.length < 6){
//   alert("cpassword must be 6 char")
// }
// else if(password !== cpassword){
//   alert("password and confirm password not match")
// }
// else{
//   const res =  await Loginuser(get) 
//    console.log(res.status);
//      if(res.status === 201){
//      console.log("user registration done");
//      setdata({...get,fname:"",email:"", password:"",cpassword:""} )
//    }else{
//     console.log("user not successfully");
//    }


// }


try {
  if(fname === ""){
    alert("plz enter your name")
  }else if(email === ""){
    alert("enter your name")
  }
  else if(!email.includes("@")){
    alert("enter you valid email")
  }
  else if(password === ""){
    alert("plz enter your password")
  
  }else if(password.length < 6){
    alert("password must be 6 char")
  }
  
  else if(cpassword === ""){
    alert("plz enter your cpassword")
  
  }
  else if(cpassword.length < 6){
    alert("cpassword must be 6 char")
  }
  else if(password !== cpassword){
    alert("password and confirm password not match")
  } else {
   const res = await RegistrationUser(get);
   console.log(res);
    alert("user registration done");
    setdata({fname:'', email:'', password:'', cpassword:''})
    Navigate("/");
  }
  
} catch (error) {
  console.log(error);
}


}




  return (
    <>
    <Header/>
    
    <section>
        <div className='form_data'>
          <div className='form_heading'>
            <h1>Welcome Back, Log In</h1>
            <p>We are glad that you will be using Project with this site </p>
          </div>
          <form>
            <div className='form_input'>
              
              <label>Name</label>
              <input type="text" name="fname" id="name" value={get.fname} placeholder="enter your Name" onChange={(e)=>getdata(e)} />
              </div>

              <div className='form_input'>
              
              <label>Email</label>
              <input type="email" name="email" value={get.email}   id="email" placeholder="enter your email"  onChange={(e)=>getdata(e)}/>
              </div>
            

            <div className='form_input'>
              <label>Password</label>
              <div className='two'>
                <input type={!spassword ? "password" :"text"} name="password" value={get.password} id="password" onChange={(e)=>getdata(e)} placeholder="enter your password" />
                <div className='show' onClick={()=>showpassword(!spassword)}>
                  {
                    !spassword ? "show" : "hide"
                  }
                
                </div>
              </div>
            </div>

            <div className='form_input'>
              <label>Confirm Password</label>
              <div className='two'>
                <input type={!confirmpassword ? "password" :"show"} name="cpassword"  value={get.cpassword}id="cpassword" onChange={(e)=>getdata(e)} placeholder="Confirm password" />
                <div className='show' onClick={()=>cshowpassword(!confirmpassword)}>
                  {
                    !confirmpassword ? "show" : "hide"
                  }
                
                </div>
              </div>
            </div>
            


            <button className='btn' onClick={addUserData}>SignUp</button>
            <p>Already have an account?<NavLink to="/">LogIn</NavLink></p>
          </form>
        </div>
      </section>

    
    </>
  )
}

export default Register;
