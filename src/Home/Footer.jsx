import React from 'react'
import logo from '../image/footer-logo.png'
import partner from '../image/client-1.png'
import partne from '../image/client-3.png'
import partn from '../image/client-4.png'
import part from '../image/client-5.png'
import pay from '../image/payment.png'

const Footer = () => {
  return (

 <div className=' bg-black bg-opacity-90'>
 <div className=' flex ms-28 gap-44 pt-10 '>
<img src={logo}/>
<p className='text-2xl text-white font-bold'>SHOPPING</p>
<p className='text-2xl text-white font-bold'>PARTNER</p>
<p className='text-2xl text-white font-bold'>NEWLETTER</p>
</div>

<div className='flex text-base font-bold ms-24 gap-48 text-white pt-8 '>
<p>The Customer is in the heart <br/> of our <br/>unique business model,<br/> which includes <br/> design.</p>
<p >Home <br/>Shop <br/>About Us </p>
<div className='grid grid-cols-2 gap-7 w-24 h-24'>
  <img src={partner}  />
  <img src={partne}  />
  <img src={partn}  />
  <img src={part}  />
</div>
<p >Be the first to know about <br/> new arrivals <br/><br/> look books,sales & promos!</p>

</div>

<div className='flex pt-20 justify-start'>
<img src={pay}/>
</div>


</div>





  )
}

export default Footer