import React, { useEffect, useState } from 'react'
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const Edit = () => {
 const {edit} =useParams()
 const navigate =useNavigate()
const [title ,settitle] =useState("")
const [price , setprice] =useState("")
const [description , setdescription] =useState("")
const [category ,setcategory] =useState("")
const[brand ,setbrand]=useState("")

const handleForm =(e)=>{
 e.preventDefault();

axios({
    method:"patch",
    url:`http://localhost:8000/products/${edit}`,
    data:{
        title,
        description,
        price,
        category,
        brand,
    }
}).then(()=>{
    navigate("/dashboard")
})

}

    const getAlledit= () =>{
        axios({
            method:"get",
            url:`http://localhost:8000/products/${edit}`,
        }).then((data)=>{
settitle(data.data.title)
setdescription(data.data.description)
setprice(data.data.price)
setbrand(data.data.brand)
setcategory(data.data.category)
        })
    }
    useEffect(()=>{
        getAlledit()
    },[])
  return (
    <div className='flex justify-center'>
    <Card color="transparent" shadow={false}>
  
    <form  onSubmit={(e)=> handleForm(e)}      className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Title
        </Typography>
        <Input
          size="lg"
          type="title"
          value={title}
          onChange={(e)=> settitle(e.target.value)}
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
       Description
        </Typography>
        <Input
          size="lg"
          type="description"
          value={description}
          onChange={(e)=> setdescription(e.target.value)}
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Price
        </Typography>
        <Input
            size="lg"
            type="price"
            value={price}
            onChange={(e)=> setprice(e.target.value)}
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
 <Typography variant="h6" color="blue-gray" className="-mb-3">
          Category
        </Typography>
        <Input
          size="lg"
          type="category"
          value={category}
          onChange={(e)=> setcategory(e.target.value)}
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
         <Typography variant="h6" color="blue-gray" className="-mb-3">
         Brand
        </Typography>
        <Input
          size="lg"
          type="Brand"
          value={brand}
          onChange={(e)=> setbrand(e.target.value)}
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
     
      <Button className="mt-6" type='submit' >
        Editproduct
      </Button>
  
    </form>
  </Card>
  </div>
  );
};

export default Edit