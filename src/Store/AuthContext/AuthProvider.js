import React, { useState } from 'react'
import CreateAuth from './Create-Auth'

const AuthProvider = (props) => {
  // const checkEmailLocaly = localStorage.getItem("email")===null?false:true;
  // const [islogin, setIsLogin] = useState(checkEmailLocaly);
  
  // const logInOutHandler = () => {
  //   setIsLogin(prev => {
  //     return !prev;
  //   });
  // }

    const context = {
      // isLoggedIn: islogin,
      // logInOut: logInOutHandler,
      
    };

  return (
    <CreateAuth.Provider value={context}>
      {props.children}
    </CreateAuth.Provider>
  )
}

export default AuthProvider
