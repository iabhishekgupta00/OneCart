import React from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { useState } from "react";
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { useEffect } from "react";
import { SiEbox } from "react-icons/si";
import { toast } from "react-toastify";
import Loading from "../component/Loading";

function Orders() {

    let [orders,setOrders] = useState([])
    let {serverUrl} = useContext(authDataContext)
    const [loading,setLoading] = useState(false)


    const fetchAllOrders = async () => {
        try {
            const result = await axios.post(serverUrl + '/api/order/list',
                {},{withCredentials: true}
            )
            setOrders(result.data.reverse())
        } catch (error) {
            toast.error(error.message)
            
        }
        
    }

    const statusHandler = async (e, orderId) => {
        try {
            const result = await axios.post(serverUrl + '/api/order/status',
                {orderId,status:e.target.value},
                {withCredentials: true}
            )
            toast.success("Order Status Updated")
            setLoading(false)
            if(result.data){
                await fetchAllOrders()
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error("Order Status  Failed")
            
        }
        
    }

    useEffect(()=>{
        fetchAllOrders()
    },[])



    return (
        <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l
        from-[#141414] to-[#0c2025] text-[white]">
            <Nav/>

<div className="w-full min-h-screen flex">
    <div className="w-[250px] min-h-screen">
        <Sidebar />
    </div>
    <div className="flex-1 mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] px-4 pl-12">
        <div className="w-[400px] h-[50px] text-[28px]
            md:text-[40px] mb-[20px] text-[white] ">
            All Orders List
        </div>
        {
            orders.map((order, index) => (
                <div key={index} className='w-[90%] bg-[gray]
                    rounded-xl flex lg:items-center items-start
                    justify-between flex-col lg:flex-row
                    p-[10px] md:px-[20px] gap-[20px]'>
                    <SiEbox className="w-[60px] h-[60px] text-[black]
                        p-[5px] rounded-lg bg-[white]" />
                <div>
                    <div className="flex items-start justify-center
                    flex-col gap-[5px] text-[16px] text-[#56dbfc]">
                        {
                            order.items.map((item,index)=>{
                                if(index === order.items.length - 1){
                                    return <p key={index}>{item.name.toUpperCase()} * { item.quantity }
                                    <span>{ item.size }</span></p>
                                }
                                else {
                                    return <p key={index}>{item.name.toUpperCase()} * { item.quantity }
                                    <span>{ item.size }</span>,</p>
                                }
                            })
                        }
                    </div>
                    <div className="text-[15px] text-[#d6f8d6]">
                        <p>{order.address.firstName+" "+
                            order.address.lastName}</p>
                        
                        <p>{order.address.street + " "}</p>
                        <p>{order.address.city + "," + order.address.state
                        + "," + order.address.country + "," +
                        order.address.pincode}</p>
                        <p>{order.address.phone}</p>
                    </div>
                    <div className="text-[15px] text-[#d6f8d6]">
                        <p>Items : {order.items.length}</p>
                        <p>Method : {order.paymentMethod}</p>
                        <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                        <p>Date : {new Date(order.date).toLocaleDateString()}</p>
                        <p className="text-[15px]">₹ {order.amount}</p>
                    </div>
                    <select value={order.status} className="px-[5px] py-[10px]
                    bg-[#858484] rounded-lg border-[1px]
                    border-[#96eefc]" onChange={(e) => statusHandler(e, order._id)}>
                        <option value="Order Placed">
                        {
                            loading ? 
                            <Loading/> :
                            "Order Placed SuccessFully"
                        }</option>
                        <option value="Packing">{
                            loading ? 
                            <Loading/> :
                            "Order Packed SuccessFully"
                        }</option>
                        <option value="Shipped">{
                            loading ? 
                            <Loading/> :
                            "Order Shipped SuccessFully"
                        }</option>
                        <option value="Out for Delivery">{
                            loading ? 
                            <Loading/> :
                            "Order out for delivery SuccessFully"
                        }</option>
                        <option value="Delivered">{
                            loading ? 
                            <Loading/> :
                            "Order Delivered SuccessFully"
                        }</option>
                    </select>
                </div>
                </div>
            ))
        }
    </div>
</div>

            
        </div>
    );
}

export default Orders
