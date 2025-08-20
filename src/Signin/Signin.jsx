import React, { useEffect, useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Checkbox,
 
} from "@material-tailwind/react";


import { IoEye } from "react-icons/io5";
import {  useNavigate } from "react-router-dom";
import axios from "axios";


const Signin = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState("");

  const [email, setEmail] = useState("");
  const [checkemail, setcheckEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [checkpassword, setcheckPassword] = useState(false);

  const [checked, setChecked] = useState(true);


 
  const handleForm = (e) => {
    e.preventDefault();
  
let singleuser = users.find((data)=>{
  return data.email == email && data.password == password;
});
if (singleuser){
  localStorage.role = singleuser.role
  navigate("/")
}
  // console.log(singleuser);
  }


const getAlluser = () =>{
  axios({
    method:"get",
    url:"http://localhost:8000/users",
  }).then((data)=>{
setUsers(data.data)
  })
}
  const handleshowpassword = () => {
    setChecked(!checked);
  };

 useEffect(()=>{
  getAlluser()
 },[])
  return (
    <div className="flex justify-center  bg-teal-100">
      <Card color="transparent" shadow={false}>
        <form
          onSubmit={(e) => handleForm(e)}
          className=" flex mt-16  justify-center  text-base "
        >
          <div className=" flex flex-col gap-6 ">
          <Typography variant="h6" color="blue-gray" className=
         {checkemail?" text-red-500 -mb-3" : "-mb-3 text-black"}>
               { checkemail ? " invalid email " : "Your Email "}
            
          </Typography>
          <Input
            size="base"
            placeholder="name@mail.com"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

      <Typography variant="h6" 
         color="blue-gray" 
         className={checkpassword?" text-red-500 -mb-3" : "-mb-3 text-black"}>
                   { checkpassword ? " invalid password " : "Password "}
       
           <div className='flex justify-end '>
            <div className="-mb-11 -me-4 z-10 ">

         <Button variant='text'  onClick={handleshowpassword} className= "text-xl"  >
        <IoEye /></Button> 
        
           </div>
           </div>
          <Input
            type={checked?"password" : "text"}
            size="base"
            placeholder="********"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            />
   </Typography>
            <div className=" flex  gap-4 justify-center items-center">
              <Button
                className="bg-teal-500"
                type="submit"  >
                Login
              </Button>

              <Button
                className="bg-teal-500" 
                onClick={() => navigate("/login")}
              >
                Create Account
              </Button>
            </div>

            <Checkbox
              label={
                <Typography
                  variant="small"
                  className="flex items-center font-normal "
                >
                  <a className="text-black text-sm font-bold">Remember me</a>
                </Typography>
              }
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Signin;
