import React, { useEffect, useState } from "react";
import Nav from "../component/Nav.jsx"
import Sidebar from "../component/Sidebar.jsx"
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext.jsx";
import axios from "axios";

function Home() {
    const [totalProducts,setTotalProducts] = useState(0)
    const [totalOrders,setTotalOrders] = useState(0)
    const {serverUrl} = useContext(authDataContext)
     

   const fetchCounts = async () => {
    try {
        const products = await axios.get(
            `${serverUrl}/api/product/listproduct`,
            { withCredentials: true }
        );
        console.log("Products:", products.data); // <-- Add this
        setTotalProducts(products.data.length);

        const orders = await axios.post(
            `${serverUrl}/api/order/list`,
            {},
            { withCredentials: true }
        );
        console.log("Orders:", orders.data); // <-- Add this
        setTotalOrders(orders.data.length);
    } catch (error) {
        console.error("Fetch To Fix Error", error);
    }
}
    useEffect(()=>{
        fetchCounts()
    },[])
     // ...existing code...
return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] relative">
        <Nav />
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col pl-[60px] pt-[60px]">
                <h1 className="text-[40px] text-[#8ee6f7] font-semibold mb-8">
                    OneCart Admin Panel
                </h1>
                <div className="flex flex-col gap-4 text-[22px]">
                    <div>
                        Total Products: <span className="font-bold">{totalProducts}</span>
                    </div>
                    <div>
                        Total Orders: <span className="font-bold">{totalOrders}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
// ...existing code...
}
export default Home
