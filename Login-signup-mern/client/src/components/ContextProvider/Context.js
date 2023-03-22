import React, {   createContext, useState } from 'react'


export const LoginContext = createContext("");
const Context = ({children}) => {
    const [Logindata,setLoginData]=useState("");

    return (
        <>
        <LoginContext.Provider value={{Logindata,setLoginData}}>
              {children}

        </LoginContext.Provider>
        </>
    )
}

export default Context;
