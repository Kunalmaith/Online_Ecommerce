import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Wishlist from './pages/main/Wishlist'
import Checkout from './pages/main/Checkout'
import Cart from './pages/main/Cart'
import Account from './pages/main/Account'
import Product from './components/shared/ProductDetail'
import ItemComp from './components/shared/ItemComp'
import ProductComp from './components/shared/ProductComp'
import ProductPage from './pages/main/ProductPage'
import ProductDetail from './components/shared/ProductDetail'
import UserListPage from './nothing/UserListPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
