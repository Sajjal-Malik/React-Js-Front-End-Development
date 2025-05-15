import './App.css'
import { Routes, Route, NavLink } from 'react-router'
import Login from './pages/Login'
import AllProducts from './pages/AllProducts'
import Cart from './pages/Cart'
import Register from './pages/Register'


function App() {

  return (
    <div>

      <nav>
        <ul>
          <li><NavLink to="/register">Register_page</NavLink></li>
          <li><NavLink to="/login">Login_page</NavLink></li>
          <li><NavLink to="/products">Products_page</NavLink></li>
          <li><NavLink to="/cart">Cart_page</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
