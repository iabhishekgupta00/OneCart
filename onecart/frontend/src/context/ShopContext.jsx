import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './authContext'
import axios from 'axios'
import { UserDataContext } from './UserContext'
import { toast } from 'react';

export const shopDataContext = createContext()
function ShopContext({children}) {
    let [products,setProducts] = useState([])
    let {userData} = useContext(UserDataContext)
    let [search,setSearch] = useState('')
    let [showSearch,setShowSearch] = useState(false)
    const [cartItem , setCartItem] = useState({});
    let {serverUrl} = useContext(authDataContext)
    const [cartLoading, setCartLoading] = useState(true);
    let currency = '₹ ';
    let delivery_fee = 25;

    const getProducts = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/product/listproduct")
            console.log(result.data)
            setProducts(result.data)
        } catch (error) {
            console.log(error)
            
        }

    }

    const addToCart = async (itemId , size) => {
        if (!size) {
            console.log("Select Product Size");
            return;
        }

        let cartData = structuredClone(cartItem);

        if (cartData[itemId]) {
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItem(cartData);
        
        if (userData) {
            try {
                let result = await axios.post(serverUrl + "/api/cart/add" , {itemId,size} ,
                    {withCredentials: true})

                    console.log(result.data)
                
            } catch (error) {
                console.log(error)
                
            }
        }
    }


const getUserCart = async () => {
    try {
        const result = await axios.post(serverUrl + '/api/cart/get' ,
            {} , {withCredentials: true}
        );
        if (typeof result.data === "object" && result.data !== null) {
            setCartItem(result.data);
        } else {
            setCartItem({});
        }
    } catch (error) {
        // Improved error handling
        const msg = error?.response?.data?.error || error?.response?.data?.message || error?.message || "Unknown error";
        console.log(msg);
        toast.error(msg);
    }
    setCartLoading(false);
}


    const UpdateQuantity = async (itemId , size , quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity
        setCartItem(cartData)
        if (userData){
            try {
                await axios.post(serverUrl + '/api/cart/update' ,
                    {itemId, size , quantity}  , {withCredentials: true}
                )
            } catch (error) {
                console.log(error)
                toast.error(error.message)
                
            }
        }
        
        
    }

    
    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItem) {
            for(const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0){
                        totalCount += cartItem[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount
    }

    const  getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItem){
            let itemInfo = products.find((product) => product._id ===
        items);
         if (!itemInfo) continue;
        for(const item in cartItem[items]) {
            try {
                if (cartItem[items][item] > 0){
                    totalAmount += itemInfo.price * cartItem[items][item];
                }
            } catch (error) {
                
            }
        }
        }
       return totalAmount 
    }
        
    



useEffect(() => {
    getProducts();
}, []);

useEffect(() => {
    if (userData) {
        getUserCart();
    } else {
        setCartLoading(false); // Prevent infinite loading if not logged in
    }
}, [userData]);


    

    let value = {
        products, currency, delivery_fee , getProducts,
        search,setSearch,showSearch,setShowSearch,cartItem,
        addToCart, getCartCount, setCartItem , UpdateQuantity,
        getCartAmount, cartLoading

    }
    return (
        
            <shopDataContext.Provider value={value}>
                {!cartLoading && children}
            </shopDataContext.Provider>


    )
}

export default ShopContext