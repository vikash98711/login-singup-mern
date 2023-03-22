// import  { useState } from 'react';
// import {  Button, Dialog, } from '@mui/material';
// // import Login from "./components/Login";
// import './login.css';
// import { NavLink } from 'react-router-dom';
// // import Register from './Register';



// const LoginDialog = () => {
//     const [showDialog, setshowDialog]=useState(false)


//     const [password, showpassword]=useState(false )

//     const openDialog =()=>{
// //         setshowDialog(true)
// //     }
// // const closeDialog =()=>{
// //     setshowDialog(false )

// // }

//   return (
//     <>
//     <Button  className="bt_n" onClick={openDialog} variant="contained">Login</Button>
    
//     <Dialog open={showDialog} onClose={closeDialog} >
//     <section>
//         <div className='form_data'>
//           <div className='form_heading'>
//             <h1>Welcome Back, Log In</h1>
//             <p>Hi, we are you glad you are back. Please login.</p>
//           </div>
//           <form>
//             <div className='form_input'>
//               <label>Name</label>
//               <input type="text"   placeholder="enter your name"/>
//             </div>
//             <div className='form_input'>
              
//               <label>Email</label>
//               <input type="email" name="email" id="email" placeholder="enter your email" />
//               </div>
            

//             <div className='form_input'>
//               <label>Password</label>
//               <div className='two'>
//                 <input type={!password ? "password" :"show"} name="passord" id="password" placeholder="enter your password" />
//                 <div className='show' onClick={()=>showpassword(!password)}>
//                   {
//                     !password ? "show" : "hide"
//                   }
                
//                 </div>
//               </div>
//             </div>
//             <button className='btn'>Login</button>
//             <p>Don't have an Account?<NavLink to="/register">SignUp</NavLink></p>
//           </form>
//         </div>
//       </section>
     
//     </Dialog>
//     </>
//   )
// }

// export default LoginDialog;
