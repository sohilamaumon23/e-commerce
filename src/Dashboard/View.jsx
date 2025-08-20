import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const View = () => {
    const[viewproduct , setViewproduct]=useState([])
    const {view} = useParams()
    const getAllviewproduct = () =>{
axios({
    method:"get",
    url:`http://localhost:8000/products/${view}`,
}).then((data)=>{
setViewproduct(data.data)
});
    };
    useEffect(()=>{
        getAllviewproduct()
    },[])
  return (
 <div>
    <h1>{viewproduct.title}</h1>
    <img src={viewproduct.thumbnail}/>
    <h1>{viewproduct.description}</h1>
    <h1>{viewproduct.category}</h1>
</div>
  )
}

export default View
