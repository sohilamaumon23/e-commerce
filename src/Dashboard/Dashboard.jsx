import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Dashboard = () => {
  const [product , setProduct]=useState([])
  const navigate = useNavigate()
  const [check ,setcheck]=useState(true)


const handleclick =(data)=>{
  console.log(data);
  
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
 title:`${data.title}`,
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
  const getAllproduct =()=>{
    axios({
    method: "get",
    url:"http://localhost:8000/products",
    }).then((data)=>{
      setProduct(data.data)
    });
  };
  useEffect(()=> {
    getAllproduct();
  },[check])
  return (
    <div >
     <div className='flex flex-col  items-center gap-5  w-full  '>
  <h1 className=' text-xl font-bold  ' >Product</h1>
  <button className="btn btn-info w-40 text-lg "onClick={()=> navigate('/dashboard/addproduct')}>AddProduct</button>
  </div>

    <div className='flex gap-3  '>
    <div className='bg-blue-gray-900 gap-20 flex flex-col mb-4 text-white p-5 text-xl font-bold pt-24 w-56 h-screen'> 
    <h1 onClick={()=> navigate('/dashboard')}>Dashboard</h1>
    <h1 onClick={()=> navigate('/product')}>Product</h1>
    <h1 onClick={()=> navigate('/dashboard/user')}>User</h1>
    </div>

    <div className="overflow-x-auto text-base  text-black font-bold bg-gray-300 mt-32 w-screen   ">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
        <th className='text-black text-sm'>Product</th>
        <th className='text-black text-sm' >Price</th>
        <th className='text-black text-sm'>Operation</th>
        </tr>
      </thead>
      <tbody>
   {product.map((data,index)=>(
 <tr key={index}>
 <div className="w-24 rounded-full">
    <img src={data.thumbnail} />
  </div>
 <td>{data.price}</td>
 <td>
  <div className='flex gap-4'>
 <button className="btn btn-primary" onClick={()=> navigate(`/dashboard/${data.id}`)}>View</button>
 <button className="btn btn-warning" onClick={()=> navigate(`/${data.id}`)}>Edit</button>
 <button className="btn btn-error" onClick={()=> handleclick(data)}>Delete</button>
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

export default Dashboard
