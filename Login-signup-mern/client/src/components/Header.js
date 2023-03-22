import {Avatar, Button} from '@mui/material';
import React from 'react';
import './header.css';
import LoginDialog from './LoginDialog';


const Header = () => {
  return (
    <>
  <header>
    <nav>
      <h1>Resisgter for Now! </h1>
    <div className='btns'>
{/* //     <Button  className="bt_n"  variant="contained">Login</Button> */}

      {/* <LoginDialog/> */}
        
         
         </div>
            <div className='avatar'>

      <Avatar style={{background:"blue"}}>v</Avatar>

      </div>

     
      </nav>
  </header>
    </>
  )
}

export default Header;