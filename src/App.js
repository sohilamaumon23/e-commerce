import React from 'react'
import Header from './Component/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Product from './Product/Product'
import AddCart from './cart/AddCart'
import Signin from './Signin/Signin'
import Login from './Log/Login'
import Footer from './Home/Footer'
import Logout from './Log/Logout'
import Dashboard from './Dashboard/Dashboard'
import View from './Dashboard/View'
import Edit from './Edit/Edit'
import Addproduct from './Addproduct/Addproduct'
import User from './Dashboard/User'
import Showuser from './Show/Showuser'
import Viewuser from './Users/Viewuser'
import Edituser from './Users/Edituser'

// import Showproduct from './Show/Showproduct'


const App = () => {
  return (
    <div>
      <Header/>
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/product' element = {<Product/>}/>
        <Route path='/addcart' element = {<AddCart/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/logout' element = {<Logout/>}/>
        <Route path='/signin' element = {<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/:view' element={<View/>}/>
        <Route path='/:edit' element={<Edit/>}/>
        <Route path='/dashboard/addproduct' element={<Addproduct/>}/>
        <Route path='/dashboard/user' element={<User/>}/>
        <Route path='/show/showuser' element={<Showuser/>}/>
        <Route path='/user/:viewuser' element={<Viewuser/>}/>
        <Route path='/edituser/:edituser' element={<Edituser/>}/>
       
        {/* <Route path='/Show/Showproduct' element={<Showproduct/>}/> */}
        </Routes>
        <Footer/>
    </div>
  )
}

export default App