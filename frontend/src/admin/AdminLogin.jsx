import React, {  useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { useNavigate} from 'react-router-dom'
import AdminApi from "../apis/AdminApi";
import "./AdminLogin.css";
import logo from '../../public/Logo.png';
const AdminLogin = () => {
const navigate = useNavigate();
  const {adminLogin} = AdminApi();
  const [admin,setAdmin] = useState(
    {
      username:"",
      password:""
    }
  );

//   console.log(admin)

  const handleSubmit = (e)=>{
    e.preventDefault();
    adminLogin(admin).then((res)=>{
      if(res == true){
        // alert("login success")
        navigate("/admin")
      }else{
        // alert("login failed")
      }
    }).catch(err=>console.log(err))
  }

  return (
    <div className="w-full h-[100vh] bg-tertiary  flex justify-center items-center">
      <div className="w-[350px] bg-secondary space-y-3  h-[450px] rounded-3xl  shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center">
          Admin <span className="text-primary">Login</span>
        </h1>
        <div className="w-full h-[40%]  flex justify-center items-center">
          <img
            className=" object-contain w-[20rem] h-[10rem]"
            src={logo}
            alt="logo image"
          />
        </div>
        <div className="w-full h-[60%]">
          <form onSubmit={handleSubmit} className="w-full h-[70%]">
            <div className="flex flex-col items-center justify-center w-full h-full gap-y-6">
              <div className="relative flex items-center justify-center w-full">
                <CiUser className="absolute z-10 left-10" size={18} />
                <input
                  onChange={(e) => {
                    setAdmin({ ...admin, username: e.target.value });
                  }}
                  type="text"
                  className="px-3 pl-10 py-1 w-[15rem] rounded-2xl drop-shadow-md"
                  placeholder="Username"
                />
              </div>

              <div className="relative flex items-center justify-center w-full">
                <CiLock className="absolute z-10 left-10" size={18} />
                <input
                  onChange={(e) => {
                    setAdmin({ ...admin, password: e.target.value });
                  }}
                  type="password"
                  className="px-3 pl-10 py-1 w-[15rem] rounded-2xl drop-shadow-md"
                  placeholder="Password"
                />
              </div>
              <button className="px-8 py-1 font-bold text-white rounded-lg bg-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
