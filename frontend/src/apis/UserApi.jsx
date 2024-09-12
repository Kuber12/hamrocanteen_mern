import React from 'react'
import axios from "axios"

const UserApi = () => {
    const URL = "http://localhost:3000";

    async function loginUser(user) {
      try{
        const EndPoint = URL + "/api/user/login";
        console.log(EndPoint)
        const response = await axios.post(EndPoint,user);
        const data = await response.data.message;
        localStorage.setItem("token",JSON.stringify(data));
        console.log(data)
        
        return true; //if response is with no error
      }catch(error){
        console.log(error + " user login error")
        return false;  //if response is with no error
      }
    }

  
    return {loginUser}
}

export default UserApi
