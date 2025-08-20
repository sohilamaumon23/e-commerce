import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Viewuser = () => {
  const [user,setuser] = useState([])
  const {viewuser} = useParams()
  const getAllusers = () =>{
    axios({
   method:"get",
   url:`http://localhost:8000/users/${viewuser}`,
    }).then((data)=>{
setuser(data.data)
    })
  }
  useEffect(()=>{
    getAllusers();
  },[])
  return (
    <div className='font-bold text-lg text-center gap-5'>
<h1>{user.firstname}</h1>
<h1>{user.lastname}</h1>
<h1>{user.username}</h1>
<h1>{user.email}</h1>
<h1>{user.password}</h1>
<h1>{user.city}</h1>
<h1>{user.gender}</h1>
<h1>{user.phone}</h1>
<h1>{user.role}</h1>
    </div>
  )
}

export default Viewuser