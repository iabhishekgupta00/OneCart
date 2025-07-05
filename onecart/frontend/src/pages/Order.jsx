// import React, { useContext, useEffect, useState } from "react";
// import Title from "../component/Title";
// import { shopDataContext } from "../context/ShopContext";
// import { authDataContext } from "../context/authContext";
// import axios from "axios";

// function Order() {
//     let [orderData,setOrderData] = useState([])
//     let {currency} = useContext(shopDataContext)
//     let {serverUrl} = useContext(authDataContext)

//     const loadOrderData = async () => {
//         try {
//             const result = await axios.post(serverUrl + "/api/order/userorder",
//                 {},{withCredentials: true}
//             )

//             if(result.data){
//                 let allOrdersItem = []
//                 result.data.map((order)=>{
//                     order.items.map((item)=>{
//                         item['status'] = order.status
//                         item['payment'] = order.payment
//                         item['paymentMethod'] = order.paymentMethod
//                         item['date'] = order.date
//                         allOrdersItem.push(item)
//                     })
//                 })
//                 setOrderData(allOrdersItem.reverse())
//             }
//         } catch (error) {
//             console.log(error)
            
//         }
        
//     }

//     useEffect(()=>{
//         loadOrderData()
//     },[])
//     return (
//         <div className="w-[99vw] min-h-[100vh] p-[20px]
//         pb-[150px] overflow-hidden bg-gradient-to-l
//         from-[#141414] to-[#0c2025]">
//             <div className="h-[8%] w-[100%] text-center
//             mt-[80px]">
//                 <Title text1={'My'} text2={' Order'}/>
//             </div>
//             <div className="w-[100%] h-[92%] flex flex-wrap
//             gap-[20px]">
//                 {
//                     orderData.map((item,index) =>(
//                         <div key={index} className="w-[100%] h-[10%] border-t
//                         border-b">
//                             <div className="w-[100%] h-[80%] flex
//                             items-start gap-6 bg-[#51808048] py-[10px]
//                             px-[20px] rounded-2xl relative">
//                                 <img src={item.image1} className="w-[130px] h-[130px]
//                                 rounded-md" alt="" />
//                             </div>

//                         </div>
//                     ))
//                 }
//             </div>

//         </div>
//     )
// }
// export default Order

import React, { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";

function Order() {
    let [orderData, setOrderData] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);
    let { currency } = useContext(shopDataContext);
    let { serverUrl } = useContext(authDataContext);

    const loadOrderData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await axios.post(
                serverUrl + "/api/order/userorder",
                {},
                { withCredentials: true }
            );

            if (result.data && Array.isArray(result.data)) {
                let allOrdersItem = [];
                result.data.forEach((order) => {
                    order.items.forEach((item) => {
                        item["status"] = order.status;
                        item["payment"] = order.payment;
                        item["paymentMethod"] = order.paymentMethod;
                        item["date"] = order.date;
                        allOrdersItem.push(item);
                    });
                });
                setOrderData(allOrdersItem.reverse());
            } else {
                setOrderData([]);
            }
        } catch (error) {
            setError("Failed to load orders. Please try again later.");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadOrderData();
    }, []);

    return (
        <div className="w-[99vw] min-h-[100vh] p-[20px] pb-[150px] overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025]">
            <div className="h-[8%] w-[100%] text-center mt-[80px]">
                <Title text1={"My"} text2={" Order"} />
            </div>
            <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px]">
                {loading && (
                    <div className="text-white text-lg w-full text-center mt-10">
                        Loading orders...
                    </div>
                )}
                {error && (
                    <div className="text-red-400 text-lg w-full text-center mt-10">
                        {error}
                    </div>
                )}
                {!loading && !error && orderData.length === 0 && (
                    <div className="text-white text-lg w-full text-center mt-10">
                        No orders found.
                    </div>
                )}
                {!loading &&
                    !error &&
                    orderData.map((item, index) => (
                        <div key={index} className="w-[100%] h-[10%] border-t border-b">
                            <div className="w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative">
                                <img
                                    src={item.image1}
                                    className="w-[130px] h-[130px] rounded-md"
                                    alt=""
                                />
                                {/* Add more order details here if needed */}
                                <div className="flex flex-col justify-between text-white">
                                    <div>
                                        <div className="font-bold text-lg">{item.name}</div>
                                        <div>Size: {item.size}</div>
                                        <div>Qty: {item.quantity}</div>
                                        <div>
                                            Price: {currency} {item.price}
                                        </div>
                                    </div>
                                    <div className="mt-2 text-sm">
                                        Status: <span className="font-semibold">{item.status}</span>
                                        <br />
                                        Payment: {item.paymentMethod} {item.payment}
                                        <br />
                                        Date: {item.date && new Date(item.date).toLocaleString()}
                                    </div>
                                    
                                </div>
                                <div className="absolute md:right-[5%] right-[1%]
                                md:top-[40%] top-[70%]">
                                    <button className="md:px-[15px] md:py-[7px]
                                    px-[5px] py-[3px]
                                    rounded-md bg-[#101919] text-[#f3f9fc]
                                    text-[12px] md:text-[16px] cursor-pointer
                                    active:bg-slate-500" onClick={loadOrderData}>
                                        Track Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Order;
