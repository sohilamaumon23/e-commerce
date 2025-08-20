import axios from 'axios'
import React, { useEffect, useState } from 'react'
import im from '../image/Rating.jpg'
import { NavLink } from 'react-router-dom'

const Product = () => {
  const [product , setproduct]= useState([])
  const getProduct = ()=>{
    axios({
      method:"get" ,
      url:"http://localhost:8000/products",
    }).then((data)=>{
setproduct(data.data)
    })
  }
  useEffect(()=>{
    getProduct();
  },[])
  return (
    <div className='flex flex-wrap gap-8 justify-center mt-4  '>
      {product.map((data,index)=>(
        <div key={index} className=" test w-70 shadow-2xl mt-16 ms-10  hover:shadow-black   ">
         
  <figure>
    <img
      src={data.thumbnail}
      alt="" />
  </figure>
  <div>
    <h2 className='product text-sm font-bold' >{data.title}</h2>
    <NavLink to={'/Addcart'} className=" hidden-element text-teal-300   " > + Add to cart</NavLink>
    <p className='text-base descripte '>{data.description}</p>
    <div className="w-24 font-bold text-sm">
<img src={im} />
<h3>{data.price}$</h3> 
    </div>
  </div>
</div>

      ))}

</div>
  )
}

export default Product