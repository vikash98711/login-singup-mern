import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import { AppBar, Toolbar, Avatar, Box } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import { ValidUsers } from '../Api-calling/api';

const Dashboard = () => {

    // menu itmes 

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // menu items 
    const { Logindata, setLoginData } = useContext(LoginContext)
    // console.log(Logindata.ValidUserOne.email);
    const history = useNavigate();

    const DashboardValid = async () => {

        let token = localStorage.getItem("userdatatoken")

        const res = await fetch("http://localhost:8000/validuser", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": token
            }
        });
        const data = await res.json();
        console.log(data);
        if (data.status == 401 || !data) {
            // console.log("error page is redirect");
            history("*")
        } else {
            console.log("user verfied");
            setLoginData(data)
            history("/Dashboard")
        }

    }


    useEffect(() => {
        DashboardValid();
    }, [])
    return (
        <>
            <AppBar>
                <Toolbar >
                    <Box classname="left">
                        <ul>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Shopping</li>
                            <li>Customercare</li>

                        </ul>
                    </Box>
                    <Box>

                        {Logindata.ValidUserOne ? <Avatar sx={{ bgcolor: deepOrange[500] }} onClick={handleClick}>{Logindata.ValidUserOne.fname}</Avatar> :
                            <Avatar sx={{ bgcolor: deepOrange[500] }}    >h</Avatar >

                        }
                    </Box>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>


                </Toolbar>
            </AppBar>

            <div className='center' style={{ marginTop: 30 }}>
                <img src="https://th.bing.com/th/id/OIP.W9qAAW9icI0YSXhVYwtiAAHaHa?pid=ImgDet&rs=1" width="200px" alt='no content' />
                <h1>User Email:{Logindata ? Logindata.ValidUserOne.email : ""}</h1>
            </div>
        </>
    )
}

export default Dashboard
