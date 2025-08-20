import React from 'react'
import image from '../image/banner-1.jpg'
import imag from '../image/banner-2.jpg'
import ima from '../image/banner-3.jpg'
import imaa from '../image/product-1.jpg'
import im from '../image/Rating.jpg'
import imaaa from '../image/product-2.jpg'
import imaaaa from '../image/product-3.jpg'
import imaaaaa from '../image/product-4.jpg'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=' w-full  '>
  <div className="bg-home w-full h-screen bg-cover flex flex-col gap-5  justify-center ps-10 ">
  <p className=' text-red-400 text-xs font-bold  '>SUMMER CLOLECTON </p>
      <p className='font-semibold text-xl  '>Fall - Winter</p>
      <p className='font-semibold text-xl '>Collections 2024</p>
      <p className='font-sm  '>specialist lable creating luxury essentials Ethically carfted with <br/> 
         an unwarring commtiment to especial quality </p>
         <div className='mt-4  '>
         <button
        className=" rounded-lg bg-red-400 py-3 px-14 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20  hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={()=> navigate('/product')}
      >
       Shop Now
      </button>
          </div>
          </div>
  
    
    <div className='flex justify-end '  >
  <div className='flex flex-col h-72 mt-40 w-72 me-20  '> 
  <img src={imag} />
 <div className='flex flex-col justify-end ps-3  '> 
 <p className='font-semibold text-xl '>Accessorios</p>
 <a  className='text-sm' >Shop Now</a> 
 </div> 
 </div>

<div  >
<div className='flex h-60 me-32 '>
  <div className='flex flex-col'>
<p className='font-semibold text-xl ' > Clothing <br/> Collection 2024 </p>
<a  className='text-sm ' >Shop Now</a> 
</div>
<img src={image} />
</div>

<div className='flex h-72 mt-4 '> 
  <div className='flex flex-col mt-24'>
<p className='font-semibold text-xl'>Shose Spring 2024</p>
<a className=' text-sm  ' >Shop Now</a>
</div>
<img src={ima} />
</div>
</div>
 </div>

<div className='bg-img w-full h-10   '>
  <div className='w-full h-full  bg-black bg-opacity-65'>
<h1 className=' text-white font-bold text-center text-lg  '> Free shipping , 30-day return or refund gurantee.</h1>
</div>
</div>

<div className='flex w-[10%] ms-28 gap-48 mt-8'>
<img src={imaa}/>
<img src={imaaa}/>
<img src ={imaaaa}/>
<img src ={imaaaaa}/>
</div>


<div className=' flex text-sm font-bold ms-20 gap-32  '>
<p>Rain Jacket Women <br/> Windbreaker Striped Climbing <br/> Raincoats</p>
  <p>Opna Womens T-shirt sleeve Moisture </p>
  <p>Mens Cotton Jacket </p>
  <p>Look and Love Wonmens Removable <br/> Hoodedes Faux Leather Moto Biiker <br/> Jacket</p>
  </div>


<div className='flex  ms-20 gap-52 w-32 '>
<img src={im}  />
<img src={im}  />
<img src={im}  />
<img src={im}  />
</div>


<div className='flex gap-80 ms-20 text-sm font-bold'>
<h1 >39$</h1>
<h1>85$</h1>
<h1>55$</h1>
<h1>109$</h1>
</div>

    </div>
    
  )
}

export default Home