import React, { useCallback , useContext } from 'react'
import { Navigate, Route , Routes, useLocation } from 'react-router-dom'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import Nav from './component/Nav.jsx'
import { UserDataContext } from './context/UserContext.jsx'
import Collections from './pages/Collections.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Order from './pages/Order.jsx'
import { ToastContainer , toast } from 'react-toastify'
import NotFound from './pages/NotFound.jsx'
import Ai from './component/Ai.jsx'


function App() {
    let {userData} = useContext(UserDataContext)
    let location = useLocation()
    return (
        <>
         <ToastContainer/>
        {userData && <Nav/>}
    
        <Routes>
            <Route path='/Login' 
            element={
            userData ? (<Navigate to={location.state?.from || "/ "} />)
            : (<Login/>)
        }></Route>
            <Route path='/signup'
            element={
                 userData ? (<Navigate to={location.state?.from || "/ "} />)
            : (<Registration/>)
            }></Route>
            <Route path='/' 
            element={userData ? <Home/> : <Navigate to="/login" 
                state = {{from: location.pathname}}/>}></Route>
            
            <Route path='/about' 
            element={userData ? <About/> : <Navigate to="/login" 
                state = {{from: location.pathname}}/>}></Route>
            
            <Route path='/collection' 
            element={userData ? <Collections/> : <Navigate to="/login" 
                state = {{from: location.pathname}}/>}></Route>
            
            
            <Route path='/contact' 
            element={userData ? <Contact/> : <Navigate to="/login" 
                state = {{from: location.pathname}}/>}></Route>
            
            
            <Route path='/product' 
            element={userData ? <Product/> : <Navigate to="/login" 
                state = {{from: location.pathname}}/>}></Route>

            <Route path='/productdetail/:productId' 
            element={userData ? <ProductDetail/> : <Navigate to="/login" 
                state = {{from: location.pathname}}/>}></Route>

            <Route path='/cart' 
            element={userData ? <Cart/> : <Navigate to="/login" 
                state = {{from: location.pathname}}/>}></Route>

            <Route path='/placeorder' 
            element={userData ? <PlaceOrder/> : <Navigate to="/login" 
                state = {{from: location.pathname}}/>}></Route>

            <Route path='/order' 
            element={userData ? <Order/> : <Navigate to="/login" 
                state = {{from: location.pathname}}/>}></Route>

            <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Ai/>

        </>
    )
}

export default App