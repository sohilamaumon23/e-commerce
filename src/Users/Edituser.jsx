import React, { useEffect, useState } from 'react'
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
import {  useParams } from 'react-router-dom';
import axios from 'axios';
const Edituser = () => {
  const {edituser} =useParams();
  // const navigate = useNavigate()
  const [firstname , setFirstname] = useState("")
  const [lastname , setLastname] = useState("")
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [image , setImage] = useState("")
  const [city , setCity] = useState("")
  const [gender , setGender] = useState("")
  const [phone , setPhone] = useState("")
  const [role , setrole] = useState("")


    
  const handleForm =(e)=>{
    e.preventDefault();
      axios({
        method:"patch",
        url:`http://localhost:8000/users/${edituser}`,
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
          role,
        }
    })
    }
  
        const getAlledituser= () =>{
            axios({
                method:"get",
                url:`http://localhost:8000/users/${edituser}`,
            }).then((data)=>{
    setFirstname(data.data.firstname)
    setLastname(data.data.lastname)
    setUsername(data.data.username)
    setEmail(data.data.email)
    setPassword(data.data.password)
    setImage(data.data.image)
    setCity(data.data.city)
    setGender(data.data.gender)
    setPhone(data.data.phone)
    setrole(data.data.role)
            })
        }
      useEffect(()=>{
        getAlledituser()
      },[])
  
  return (
    <div className='flex justify-center  bg-teal-100'>
         <Card color="transparent" shadow={false} >

      <form  onSubmit={(e) => handleForm(e)} className="mt-8 w-full h-full text-base ">
        <div className=" flex flex-col gap-6 ">
          <Typography variant="h6" color="blue-gray"  >

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
           <Typography variant="h6" color="blue-gray" >
         

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

        <Typography variant="h6" color="blue-gray">

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
          <Typography variant="h6" color="blue-gray" >

            
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
         color="blue-gray" >
           <div className='flex justify-end   '>
            <div className="-mb-11 -me-4 z-10 ">

         <Button variant='text'  className= "text-xl"  >
        <IoEye /></Button> 
        
           </div>
           </div>
          <Input
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
          <Typography variant="h6" color="blue-gray" >
         
          
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
<Typography variant="h6" color="blue-gray" >
   
           
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
       
          
  <Typography variant="h6" color="blue-gray " >

          
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
         Edituser
        </Button>
        </div>
      </form>
    </Card>
    </div>
  );
};

export default Edituser