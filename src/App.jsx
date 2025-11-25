import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'
import Navbar from './components/header/Navbar'
import BurgerBtn from './components/header/BurgerBtn'
import Home from './pages/main/Home'
import About from './pages/main/About'
import Checkout from './pages/main/Checkout'
import Account from './pages/main/Account'
import Cart from './pages/main/Cart'
import Footer from './components/footer/Footer'
import ItemComp from './components/shared/ItemComp'
import Wishlist from './pages/main/Wishlist'
import Contact from './pages/main/Contact'
import Product from './components/shared/ProductDetail'
import { RouterProvider } from 'react-router-dom'
import router from './route'
import { AuthProvider } from './context/AuthContext'


function App() {


  return (
    <AuthProvider>
    <div className=''>
    <RouterProvider router={router}/>
    </div>
    </AuthProvider>
  )
}

export default App
