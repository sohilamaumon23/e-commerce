import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

const Showuser = () => {
  const navigate =useNavigate()
  const [user , setuser] =useState([])
const [check ,setcheck] =useState("")
const[role , setrole]=useState("")
const [chek , setchek] = useState(true)

  const handleclick =(data)=>{
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
   title:`${data.firstname}`,
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      axios({
    method:"delete",
    url:`http://localhost:8000/products/${data.id}`
  }).then(()=>{
  setcheck(!check)
  })
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        icon: "error"
      });
    }
  });
   }
//    const handleupdate =(data)=>{
//     setrole(data)
//     if(role =='admin'){
// setrole('user')
//     }else if (role =='user') {
// setrole('admin')
//     }
//     console.log(role);
//     // axios({
//     //   method:"patch",
//     //   url:`http://localhost:8000/users/${data.id}`,
//     //   data:{
//     //     role,
//     //   }
    
//     // })
//   }

const getAllusers=()=>{
  axios({
method:"get",
url:"http://localhost:8000/users",
  }).then((data)=>{
setuser(data.data)
  })
 }

const handleupdate = (data) => {
  axios({
    method: "patch",
    url: `http://localhost:8000/users/${data.id}`,
    data: {
      role: data.role == "admin" ? "user" : "admin",
    },
  }).then(()=>{
    getAllusers()
  })
};

  useEffect(()=>{
    getAllusers();
  },[chek])
  return (
    <div>
         <div className='flex flex-col  items-center gap-5   '>
  <h1 className=' text-xl font-bold  ' >Users</h1>
  <button className="btn btn-success w-44 text-white  " onClick={()=> navigate('/login')}>Add New Users</button>
  </div>

    <div className='flex gap-3'>
    <div className='bg-blue-gray-900 gap-20 flex flex-col w-60 h-80 text-white p-5 text-lg text-blod'> 
        <h1>Dashboard</h1>
        <h1>Product</h1>
        <h1>User</h1>
        </div>
 
  <div className="overflow-x-auto text-base  text-black font-bold bg-gray-300 mt-32 w-screen ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className='font-semibold text-black '> User Name</th>
        <th className='font-semibold text-black'> Role</th>
        <th className='font-semibold text-black'>Operation</th>
      </tr>
    </thead>
    <tbody>
    {user.map((data,index)=>(
 <tr key={index}>
 <th></th>
 <td>{data.firstname}</td>
 <td>{data.role}</td>
 <td>
 <div className='flex gap-4'>
<button className="btn btn-primary" onClick={()=> navigate(`/user/${data.id}`)} >View</button>
<button className="btn btn-warning" onClick={()=> navigate(`/edituser/${data.id}`)}>Edit</button>
<button className="btn btn-error" onClick={()=> handleclick(data)} >Delete</button>
<button className={data.role =='admin' ?  'btn btn-accent ' : ' btn btn-success'  } onClick={()=> handleupdate(data)}>      
 {data.role=='admin' ? 'Remove Admin' : 'make Admin'} </button>
</div>
 </td>
</tr>
    ))}
     
     
     
 </tbody>
 </table>
 </div>
 </div>
 </div>
  )
}

export default Showuser