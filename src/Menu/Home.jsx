import React from 'react'
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register';
import Product from './Product';
import {Layout} from "./Layout"
const Home = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Product" element={<Product />} />
       </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Home