import React, { useState } from 'react'
import './login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {LoginMember} from '../Api-calling/api.js'
import Header from './Header';

// import Model from './Model';


const intialvalue={

  
  email:"",
  password:""
}



const Login =() => {
  const history = useNavigate();

  const [Password, showpassword]=useState(false )
  const [get, setdata]= useState(intialvalue)
  
  const {email, password}= get;


  // console.log(get);
const SetData =(e)=>{
  const {name, value}= e.target;

  setdata(()=>{
    return{
      ...get,[name]:value }
 
  })
}

// button click perfom
const  loginUser = async  (e)=>{
  e.preventDefault()

// const {email, password}= get;

try{
if(email === ""){
  alert("plz enter your email")}

else if(!email.includes("@")){
  alert("enter you valid email")
}
else if(password === ""){
  alert("plz enter your password")

}else if(password.length < 6){
  alert("password must be 6 char")
}
else{

  const res = await LoginMember(get);
  console.log(res.data.result.userValid);
  if(res.status === 201){
    localStorage.setItem("userdatatoken",res.data.result.token)
    history("/Dashboard")
  alert("login successfully")
  setdata({ email:'', password:''})

  }

 
}

}
catch(error){
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
            <p>Hi, we are you glad you are back. Please login.</p>
          </div>
          <form>
            {/* <div className='form_input'>
              <label>Name</label>
              <input type="text"   placeholder="enter your name"/>
            </div> */}
            <div className='form_input'>
              
              <label>Email</label>
              <input type="email" name="email" value={get.email}  onChange={ SetData}id="email" placeholder="enter your email" />
              </div>
            

            <div className='form_input'>
              <label>Password</label>
              <div className='two'>
                <input type={!Password ? "password" :"show"} name="password" onChange={ SetData}  value={get.password} id="password" placeholder="enter your password" />
                <div className='show' onClick={()=>showpassword(!Password)}>
                  {
                    !Password ? "show" : "hide"
                  }
                
                </div>
              </div>
            </div>
            <button className='btn' onClick={loginUser}>Login</button>
            <p>Don't have an Account?<NavLink to="/register">SignUp</NavLink></p>
          {/* <p>  <NavLink to="">Forgot password</NavLink> </p> */}

          </form>
        </div>
      </section>
      {/* <Model/> */}
    </>
  )
}

export default Login;
