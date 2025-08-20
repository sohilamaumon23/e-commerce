import React, { useEffect, useState } from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
  import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";

  import { IoIosArrowDropdownCircle } from "react-icons/io";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import images from '../image/logo.png';
import { FaArrowRightToBracket } from "react-icons/fa6";
import Swal from 'sweetalert2';

  function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6   ">
        <Typography
          as="li"
          className="p-2 font-bold  text-medium"
        >
          <NavLink to={'/'} > Home</NavLink>
        </Typography>
        <Typography
          as="li"
          className="p-2 font-bold  text-medium"
        >
          <NavLink to={'/product'} >
            shopes
          </NavLink>
        </Typography>


      
      </ul>
    );
  }
const Header = () => {
  const navigate = useNavigate();
    const [users, setUsers] = useState("");
    const [openNav, setOpenNav] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
 
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
   
    useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
   

    const handleclick =()=>{
      Swal.fire({
        title: "Logged out",
        icon: "info",
      }).then(() => {
        setIsLoggedIn(false);
        navigate('/signin');
      });
    };

    

    return (
      <Navbar className="mx-auto max-w-screen-3xl px-6 py-3 ">
        <div className="flex items-center justify-between text-blue-gray-900 ">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
          <img src = {images}/>

          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>

           <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton> 
         
          <div className=' flex  fs-7 gap-3 '>

   {localStorage.role == "admin" && isLoggedIn &&  
   <Menu>
 
 <MenuHandler>  
 <Button 
       className='bg-transparent text-black shadow-none hover:shadow-none ' >
         <IoIosArrowDropdownCircle /></Button>
       </MenuHandler>
       <MenuList>
       
  <MenuItem onClick={()=> navigate('/dashboard')}>Control</MenuItem>
  <MenuItem onClick={handleclick} >logout</MenuItem>
       <MenuItem onClick={()=>navigate('/dashboard/user')}>profile</MenuItem> 
       </MenuList>
       </Menu> 
}  

{localStorage.role == "user" && isLoggedIn && 
    <Menu>
    <MenuHandler>  
    <Button 
          className='bg-transparent text-black shadow-none hover:shadow-none ' >
            <IoIosArrowDropdownCircle /></Button>
          </MenuHandler>
          <MenuList>
     <MenuItem onClick={handleclick} >logout</MenuItem>
          </MenuList>
           </Menu>  
     
}
    
  { localStorage.role != "" &&  
  <FaArrowRightToBracket onClick={()=> navigate('/signin')}  />  }

        <FaShoppingCart />
      
        </div>
      
        </div>
        <Collapse open={openNav}>
  
        
          <NavList />
        </Collapse>
      </Navbar>

      
    );
  }
export default Header