
import React, { useState } from 'react'
import {
    Card,
    Input,
    Button,
    Typography,
    Select,
    Option,
    Checkbox,
  } from "@material-tailwind/react";
  import { IoEye } from "react-icons/io5";
import axios from 'axios';
const Login = () => {
    const [firstname , setFirstname] = useState("")
    const [checkfirstname , setcheckFirstname]= useState(false)

    const [lastname , setLastname] = useState("")
    const [checklastname , setcheckLastname]= useState(false)

    const [username , setUsername] = useState("")
    const [checkusername , setcheckUsername]= useState(false)

    const [email , setEmail] = useState("")
    const [checkemail , setcheckEmail]= useState(false)

    const [password , setPassword] = useState("")
    const [checkpassword , setcheckPassword]= useState(false)

    const [image , setImage] = useState("")
    const [checkimage , setcheckImage]= useState(false)

    const [city , setCity] = useState("")
    const [checkcity , setcheckCity]= useState(false)

    const [gender , setGender] = useState("")

    const [phone , setPhone] = useState("")
    const [checkphone , setcheckPhone]= useState(false)

    const [checked , setChecked] = useState(true)
    
    const handleshowpassword =()=>{
      setChecked(!checked)
    }
   

const handleForm =(e)=>{
    e.preventDefault();
    const check =()=>{
        setcheckFirstname(false)
        setcheckLastname(false)
        setcheckUsername(false)
        setcheckPassword(false)
        setcheckEmail(false)
        setcheckCity(false)
        setcheckPhone(false)            
}

    if(firstname == "" || firstname.length <3 ){
        setcheckFirstname(true) 

    }else if(lastname == "" || lastname.length <3 ){
            check()
            setcheckLastname(true)
    } else if(username == "" || username.length <3 ){
            check()
            setcheckUsername(true)
    }else if(email == "" || email.length <5){
          check()
          setcheckEmail(true)
    }else if(password == "" ||  password.length <5 ){
        check ()
        setcheckPassword(true)
    }else if (city == "" ||  city.length <5) {
          check()
          setcheckCity(true)

    }else if (phone == "" ||  phone.length ==12) {
            check()
            setcheckPhone(true)
    }else{
        check()

        axios({
          method : "post" , 
          url : "http://localhost:8000/users" ,
       data:{
           firstname,
           lastname,
           username,
           email,
           password,
           image,
           city,
           gender,
           phone,
           role:"user",
          },
        });
        }
         
} 
  return (
    <div className='flex justify-center  bg-teal-100'>
         <Card color="transparent" shadow={false} >

      <form  onSubmit={(e) => handleForm(e)} className="mt-8 w-full h-full text-base ">
        <div className=" flex flex-col gap-6 ">
          <Typography variant="h6" color="blue-gray" 
         className= { checkfirstname ? " text-red-500 -mb-3  " : "-mb-3 text-black"}
         >
            { checkfirstname ? " invalid firstname " : " First Name"}
          </Typography>
          <Input 
            size="base"
            placeholder="name "
            value={firstname}
            onChange={(e)=> setFirstname(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white  "
            labelProps={{
              className: " before:content-none after:content-none",
            }}
          />
           <Typography variant="h6" color="blue-gray" 
           className={ checklastname? " text-red-500 -mb-3" : "-mb-3 text-black"}>
           { checklastname ? " invalid lastname " : " Last Name"}

          </Typography>
          <Input
            size="base"
            placeholder="name"
            value={lastname}
            onChange={(e)=> setLastname(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

        <Typography variant="h6" color="blue-gray" 
        className={checkusername?" text-red-500 -mb-3" : "-mb-3 text-black"}>
         { checkusername ? " invalid username " : " User Name"}
          </Typography>
          <Input
            size="base"
            placeholder="name "
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white"
            labelProps={{
              className: " before:content-none after:content-none ",
            }}
          />
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
       
           <div className='flex justify-end   '>
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
          <Typography variant="h6" color="blue-gray" 
          className={checkimage?" text-red-500 -mb-3" : "-mb-3 text-black"}>
             { checkimage ? " invalid image " : "Image "}
          
          </Typography>
          <Input
            size="base"
            placeholder="https://cdn.dummyjson.com/Eyeshadow%/thumbnail.png"
            value={image}
            onChange={(e)=> setImage(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

<div className='flex  mb-7 gap-3 '> 
<Typography variant="h6" color="blue-gray"
className={checkcity?" text-red-500 " : "text-black"} >
     { checkcity ? " invalid city " : "City "}
           
          </Typography>
          <Input
            size="base"
            placeholder="Egypt"
            value={city}
            onChange={(e)=> setCity(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white"
            labelProps={{
              className: "before:content-none after:content-none ",
            }}
          />


<Select
size="base"
value={gender}
onChange={(e)=>setGender(e)}
className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white "
labelProps={{
  className: "before:content-none after:content-none",
}}
>
<Option value="Female">Female</Option>
<Option value="Male">Male</Option>
        </Select>
       
          
  <Typography variant="h6" color="blue-gray " 
  className={checkphone?" text-red-500 -mb-3" : "-mb-3 text-black"}>
     { checkphone ? " invalid phone " : " Phone Number "}
          
          </Typography>
          <Input
            size="base"
            placeholder="01288224612"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900  bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
</div>
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="cyan"
              className="flex items-center font-normal "
            >
              <a
                href="#"
                className="font-medium transition-colors hover:text-cyan-400">
           Please Apply Roles and Condition
              </a>
            </Typography>
          }
        
        />
        <div className=' flex   justify-center items-center'>
        <Button className='bg-teal-500' type='submit' >
          Create Account
        </Button>
        </div>
      </form>
    </Card>
    </div>
    )
}

export default Login