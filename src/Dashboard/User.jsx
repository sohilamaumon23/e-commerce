import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const User = () => {
    const navigate = useNavigate()
    const [users , setusers] =useState([])
    const [products , setproducts] =useState([])
    

    

    const getAlluser =()=>{
        axios ({
            method : "get" , 
            url : "http://localhost:8000/users"  ,
        }).then((data)=> 
            setusers(data.data))
    }  
  

   const getAllproducts =()=>{
    axios ({
        method : "get" , 
        url : "http://localhost:8000/products"  ,
    }).then((data)=> 
        setproducts(data.data))
}  
useEffect(()=>{
    getAlluser()
   },[])

useEffect(()=>{
getAllproducts()
},[])


  return (
    <div className='flex  gap-16 '>
    <div className='bg-blue-gray-900  gap-20 flex flex-col w-60 h-80 text-white p-5 text-lg text-blod'> 
        <h1 onClick={()=> navigate('/dashboard')}>Dashboard</h1>
        <h1>Product</h1>
        <h1>User</h1>
        </div>

<div className='  bg-gray-900 text-lg text-white font-bold  w-72 h-60 p-10 text-center '>
   
<h1> User</h1>
 <p className='text-base'  > Number of User : {users.length} </p>
 
 <p className='text-base'>Last Users Regiested: <span className='text-teal-700'> {users.slice(-1)[0]?.username} </span></p> 
 

 <button className="rounded-md bg-blue-600 p-1 mt-8 " onClick={()=> navigate('/show/showuser')}>ShowUsers</button>
    </div>

<div className=' bg-gray-900 text-lg text-white font-bold  w-80 h-72 text-center gap-5'>
    <h1>Products</h1>
    <p>Number of Products : {products.length} </p>
    <div>
     
    <p>Last Product Added is : <span className='text-teal-700'>{products.slice(-1)[0]?.title} </span>   </p>
    </div>
    <button className="rounded-md bg-blue-600 p-1 mt-12" onClick={()=> navigate('/product')}>ShowProduct</button>

    </div>
    </div>
  
  )
}

export default User