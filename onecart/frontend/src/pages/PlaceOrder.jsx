// // import React, { useState } from "react";
// // import Title from "../component/Title";
// // import CartTotal from "../component/CartTotal";
// // import pay from '../assets/pay.jpg'

// // function PlaceOrder () {
// //     let [method,setMethod] = useState('cod')
// //     return (
// //         <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l
// //         from-[#141414] to-[#0c2025] flex items-center
// //         justify-center flex-col md:flex-row gap-[50px]
// //         relative mt-[70px]">
// //             <div className="lg:w-[60%] w-[100%] h-[100%]
// //             flex items-center justify-center lg:mt-[0px]
// //             mt-[90px]">
// //                 <form action="" className="lg:w-[75%] w-[95%] 
// //                 lg:h-[75%] h-[100%]">
// //                     <div className="py-[10px]">
// //                         <Title text1={"Delivery"} text2={" Information"}/>
// //                     </div>
// //                     <div className="w-[100%] h-[70px] flex
// //                     items-center justify-between px-[10px]">
// //                         <input type="text" placeholder="First Name"
// //                         className="w-[48%] h-[50px] rounded-md
// //                         shadow-sm shadow-[#343434]
// //                         bg-slate-700 placeholder:text-white
// //                         text-[18px] px-[20px] " required />

// //                         <input type="text" placeholder="Last Name"
// //                         className="w-[48%] h-[50px] rounded-md
// //                         shadow-sm shadow-[#343434]
// //                         bg-slate-700 placeholder:text-white
// //                         text-[18px] px-[20px] " required />
// //                     </div>
// //                     <div className="w-[100%] h-[70px] flex
// //                     items-center justify-between px-[10px]">
// //                         <input type="text" placeholder="E-mail Address"
// //                         className="w-[100%] h-[50px] rounded-md
// //                         shadow-sm shadow-[#343434]
// //                         bg-slate-700 placeholder:text-white
// //                         text-[18px] px-[20px] " required />
// //                     </div>
// //                     <div className="w-[100%] h-[70px] flex
// //                     items-center justify-between px-[10px]">
// //                         <input type="text" placeholder="Street Address"
// //                         className="w-[100%] h-[50px] rounded-md
// //                         shadow-sm shadow-[#343434]
// //                         bg-slate-700 placeholder:text-white
// //                         text-[18px] px-[20px] " required />
// //                     </div>
// //                      <div className="w-[100%] h-[70px] flex
// //                     items-center justify-between px-[10px]">
// //                         <input type="text" placeholder="City"
// //                         className="w-[48%] h-[50px] rounded-md
// //                         shadow-sm shadow-[#343434]
// //                         bg-slate-700 placeholder:text-white
// //                         text-[18px] px-[20px] " required />

// //                         <input type="text" placeholder="State"
// //                         className="w-[48%] h-[50px] rounded-md
// //                         shadow-sm shadow-[#343434]
// //                         bg-slate-700 placeholder:text-white
// //                         text-[18px] px-[20px] " required />
// //                     </div>
// //                      <div className="w-[100%] h-[70px] flex
// //                     items-center justify-between px-[10px]">
// //                         <input type="text" placeholder="Pincode"
// //                         className="w-[48%] h-[50px] rounded-md
// //                         shadow-sm shadow-[#343434]
// //                         bg-slate-700 placeholder:text-white
// //                         text-[18px] px-[20px] " required />

// //                         <input type="text" placeholder="Country"
// //                         className="w-[48%] h-[50px] rounded-md
// //                         shadow-sm shadow-[#343434]
// //                         bg-slate-700 placeholder:text-white
// //                         text-[18px] px-[20px] " required />
// //                     </div>
// //                      <div className="w-[100%] h-[70px] flex
// //                     items-center justify-between px-[10px]">
// //                         <input type="text" placeholder="Phone Number"
// //                         className="w-[100%] h-[50px] rounded-md
// //                         shadow-sm shadow-[#343434]
// //                         bg-slate-700 placeholder:text-white
// //                         text-[18px] px-[20px] " required />
// //                     </div>
// //                     <div>
// //                         <button type="submit" className="text-[18px]
// //                         active:bg-slate-500 cursor-pointer
// //                         bg-[#3bcee848] py-[10px] px-[50px]
// //                         rounded-2xl text-white flex items-center justify-center
// //                         gap-[20px] absolute lg:right-[20%]
// //                         bottom-[10%] right-[35%] border-[1px]
// //                         border-[#80808049] ml-[30px] mt-[20px]">
// //                             Place Order
// //                         </button>
// //                     </div>
// //                 </form>
                
// //             </div>
// //              <div className="lg:w-[50%] w-[100%] min-h-[100%]
// //                 flex items-center justify-center gap-[30px]">
// //                     <div className="lg:w-[70%] w-[90%] lg:h-[70%]
// //                     h-[100%] flex items-center justify-center
// //                     gap-[10px] flex-col">
// //                         <CartTotal/>
// //                         <div className="py-[10px]">
// //                         <Title text1={"Payment"} text2={" Method"}/>
// //                     </div> 
// //                     <div className="w-[100%] h-[30vh] lg:h-[100px]
// //                     flex items-start mt-[20px] lg:mt-[0px]
// //                     justify-center gap-[50px]">
// //                         <button onClick={() => setMethod('razorpay')} className={`w-[150px] h-[50px]
// //                             rounded-sm ${method === 'razorpay' ? 'border-[5px]  border-blue-900 rounded-sm' :
// //                                 ''}`}>
// //                                     <img src={pay} className="w-[100%] h-[100%]
// //                                     object-fill rounded-sm" alt="" />
// //                                 </button>
// //                        <button
// //                         onClick={() => setMethod('cod')}
// //                         className={`w-[200px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-[white] text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${
// //                         method === 'cod' ? 'border-[5px] border-blue-900 rounded-sm' : ''
// //   }`}
// // >
// //   Cash On Delivery
// // </button>
// //                     </div>
// //                     </div>
// //                 </div>

// //         </div>
// //     )
// // }


// // export default PlaceOrder


// import React, { useContext, useState } from "react";
// import Title from "../component/Title";
// import CartTotal from "../component/CartTotal";
// import pay from '../assets/pay.jpg'
// import { shopDataContext } from "../context/ShopContext";

// function PlaceOrder () {
//     let [method,setMethod] = useState('cod')
//     const {cartItem, setCartItem, getCartAmount, delivery_fee,
//         products
//     } = useContext(shopDataContext)
//     let [formData,setFormData] = useState({
//         firstName:'',
//         lastName:'',
//         email:'',
//         street:'',
//         city:'',
//         state:'',
//         pincode:'',
//         country:'',
//         phone:''
//     })

//     const onChangeHandler = (e)=>{
//         const name = e.target.name;
//         const value = e.target.value;
//         setFormData(data => ({...data,[name]:[value]}))

//         const onSubmitHandler = (e) => {
//             e.preventDeafault()
//             try{
//                 let orderItems = []
//                 for(const items in cartItem)
//                     for(const item in cartItem[items]){
//                     if(cartItem[items][item] > 0){
//                         const itemInfo = structuredClone(products.find(product
//                         => product._id === items
//                         ))
//                         if(itemInfo){
//                             itemInfo.size = item 
//                             itemInfo.quantity = cartItem[items][item]
//                             orderItems.push(itemInfo)
//                         }
//                     }
//                 }
//             }
//             let orderData = {
//                 address:fromData,
//                 items:orderItems,
//                 amount:getCartAmount() +  delivery_fee
//             }
            
//         }
//         catch(error) {
//             console.log(error)

//         }
//     }
//     return (
//         <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l
//         from-[#141414] to-[#0c2025] flex items-center
//         justify-center flex-col md:flex-row gap-[50px]
//         relative mt-[70px]">
//             <div className="lg:w-[60%] w-[100%] h-[100%]
//             flex items-center justify-center lg:mt-[0px]
//             mt-[90px]">
//                 <form action="" className="lg:w-[75%] w-[95%] 
//                 lg:h-[75%] h-[100%]">
//                     <div className="py-[10px]">
//                         <Title text1={"Delivery"} text2={" Information"}/>
//                     </div>
//                     <div className="w-[100%] h-[70px] flex
//                     items-center justify-between px-[10px]">
//                         <input type="text" placeholder="First Name"
//                         className="w-[48%] h-[50px] rounded-md
//                         shadow-sm shadow-[#343434]
//                         bg-slate-700 placeholder:text-white
//                         text-[18px] px-[20px] " required 
//                         onChange={onChangeHandler} name='firstname'
//                         value={formData.firstName}/>

//                         <input type="text" placeholder="Last Name"
//                         className="w-[48%] h-[50px] rounded-md
//                         shadow-sm shadow-[#343434]
//                         bg-slate-700 placeholder:text-white
//                         text-[18px] px-[20px] " required 
//                         onChange={onChangeHandler} name='lastname'
//                         value={formData.lastName}/>
//                     </div>
//                     <div className="w-[100%] h-[70px] flex
//                     items-center justify-between px-[10px]">
//                         <input type="text" placeholder="E-mail Address"
//                         className="w-[100%] h-[50px] rounded-md
//                         shadow-sm shadow-[#343434]
//                         bg-slate-700 placeholder:text-white
//                         text-[18px] px-[20px] " required 
//                         onChange={onChangeHandler} name='email'
//                         value={formData.email}/>
//                     </div>
//                     <div className="w-[100%] h-[70px] flex
//                     items-center justify-between px-[10px]">
//                         <input type="text" placeholder="Street Address"
//                         className="w-[100%] h-[50px] rounded-md
//                         shadow-sm shadow-[#343434]
//                         bg-slate-700 placeholder:text-white
//                         text-[18px] px-[20px] " required 
//                         onChange={onChangeHandler} name='street'
//                         value={formData.street}/>
//                     </div>
//                      <div className="w-[100%] h-[70px] flex
//                     items-center justify-between px-[10px]">
//                         <input type="text" placeholder="City"
//                         className="w-[48%] h-[50px] rounded-md
//                         shadow-sm shadow-[#343434]
//                         bg-slate-700 placeholder:text-white
//                         text-[18px] px-[20px] " required 
//                         onChange={onChangeHandler} name='city'
//                         value={formData.city}/>

//                         <input type="text" placeholder="State"
//                         className="w-[48%] h-[50px] rounded-md
//                         shadow-sm shadow-[#343434]
//                         bg-slate-700 placeholder:text-white
//                         text-[18px] px-[20px] " required 
//                         onChange={onChangeHandler} name='state'
//                         value={formData.state}/>
//                     </div>
//                      <div className="w-[100%] h-[70px] flex
//                     items-center justify-between px-[10px]">
//                         <input type="text" placeholder="Pincode"
//                         className="w-[48%] h-[50px] rounded-md
//                         shadow-sm shadow-[#343434]
//                         bg-slate-700 placeholder:text-white
//                         text-[18px] px-[20px] " required 
//                         onChange={onChangeHandler} name='pincode'
//                         value={formData.pincode}/>

//                         <input type="text" placeholder="Country"
//                         className="w-[48%] h-[50px] rounded-md
//                         shadow-sm shadow-[#343434]
//                         bg-slate-700 placeholder:text-white
//                         text-[18px] px-[20px] " required 
//                         onChange={onChangeHandler} name='country'
//                         value={formData.country}/>
//                     </div>
//                      <div className="w-[100%] h-[70px] flex
//                     items-center justify-between px-[10px]">
//                         <input type="text" placeholder="Phone Number"
//                         className="w-[100%] h-[50px] rounded-md
//                         shadow-sm shadow-[#343434]
//                         bg-slate-700 placeholder:text-white
//                         text-[18px] px-[20px] " required 
//                         onChange={onChangeHandler} name='phone'
//                         value={formData.phone}/>
//                     </div>
//                     {/* Button aligned right and not overlapping */}
//                     <div className="flex justify-end px-[10px] mt-[20px]">
//                         <button type="submit" className="text-[18px]
//                         active:bg-slate-500 cursor-pointer
//                         bg-[#3bcee848] py-[10px] px-[50px]
//                         rounded-2xl text-white flex items-center justify-center
//                         gap-[20px] border-[1px]
//                         border-[#80808049]">
//                             Place Order
//                         </button>
//                     </div>
//                 </form>
                
//             </div>
//              <div className="lg:w-[50%] w-[100%] min-h-[100%]
//                 flex items-center justify-center gap-[30px]">
//                     <div className="lg:w-[70%] w-[90%] lg:h-[70%]
//                     h-[100%] flex items-center justify-center
//                     gap-[10px] flex-col">
//                         <CartTotal/>
//                         <div className="py-[10px]">
//                         <Title text1={"Payment"} text2={" Method"}/>
//                     </div> 
//                     <div className="w-[100%] h-[30vh] lg:h-[100px]
//                     flex items-center mt-[20px] lg:mt-[0px]
//                     justify-center gap-[50px]">
//                         <button onClick={() => setMethod('razorpay')} className={`w-[150px] h-[50px]
//                             rounded-sm ${method === 'razorpay' ? 'border-[5px]  border-blue-900 rounded-sm' :
//                                 ''}`}>
//                                     <img src={pay} className="w-[100%] h-[100%]
//                                     object-fill rounded-sm" alt="" />
//                                 </button>
//                        <button
//                         onClick={() => setMethod('cod')}
//                         className={`w-[200px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-[white] text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${
//                         method === 'cod' ? 'border-[5px] border-blue-900 rounded-sm' : ''
//   }`}
// >
//   Cash On Delivery
// </button>
//                     </div>
//                     </div>
//                 </div>

//         </div>
//     )
// }

// export default PlaceOrder

import React, { useContext, useState } from "react";
import Title from "../component/Title";
import CartTotal from "../component/CartTotal";
import pay from '../assets/pay.jpg'
import { shopDataContext } from "../context/ShopContext";
import { authDataContext } from "../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingFrontend from "../component/LoadingFrontend";

function PlaceOrder () {
    let [method, setMethod] = useState('cod');
    let navigate = useNavigate()
    const { cartItem, setCartItem, getCartAmount, delivery_fee, products } = useContext(shopDataContext);
    let {serverUrl} = useContext(authDataContext)
    const [loading,setLoading] = useState(false)


    let [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
        phone: ''
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const initPay = (order) => {
    const options = {
        key: import.meta.env.VITE_RAZORPAY_API_KEY,
        amount: order.amount,
        currency: order.currency,
        name: 'Order Payment',
        description: 'Order Payment',
        order_id: order.id, // Razorpay order id
        handler: async (response) => {
            console.log('Payment Success:', response);
            

            try {
                const { data } = await axios.post(
                    serverUrl + '/api/order/verifyrazorpay',
                    response,
                    { withCredentials: true }
                );
                if (data) {
                    navigate('/order');
                    setCartItem({});
                }
            } catch (error) {
                console.log(error);
            }
        },
        prefill: {
            name: formData.firstName + " " + formData.lastName,
            email: formData.email,
            contact: formData.phone
        },
        theme: {
            color: "#3399cc"
        }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
};
    
    const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
        let orderItems = [];
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                if (cartItem[items][item] > 0) {
                    const itemInfo = structuredClone(products.find(product => product._id === items));
                    if (itemInfo) {
                        itemInfo.size = item;
                        itemInfo.quantity = cartItem[items][item];
                        orderItems.push(itemInfo);
                    }
                }
               
            }
        }
        let orderData = {
            address: formData,
            items: orderItems,
            amount: getCartAmount() + delivery_fee
        };
        switch(method){
            case 'cod':
                // Update the endpoint below to match your backend route!
                const result = await axios.post(
                    serverUrl + "/api/order/placeorder", // <-- FIXED ENDPOINT
                    orderData,
                    { withCredentials: true }
                );
                console.log(result.data);
                toast.success("Order Place SuccessFuly")
                if(result.data){
                    setCartItem({});
                    navigate('/order');
                }
                else{
                    console.log(result.data.message)
                }
                break;

               // PlaceOrder.jsx
case 'razorpay':
    const resultRazorpay = await axios.post(serverUrl + '/api/order/razorpay',
        orderData, {withCredentials: true}
    );
    console.log('Razorpay API response:', resultRazorpay.data); 
     toast.success("Order Place SuccessFuly")// Add this
    if(resultRazorpay.data){
        initPay(resultRazorpay.data)
    }
    break;


            default:
                break;
        }
    } catch (error) {
        console.log(error); // Log errors here
    }
};

    return (
        <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l
        from-[#141414] to-[#0c2025] flex items-center
        justify-center flex-col md:flex-row gap-[50px]
        relative mt-[70px]">
            <div className="lg:w-[60%] w-[100%] h-[100%]
            flex items-center justify-center lg:mt-[0px]
            mt-[90px]">
                <form 
                    className="lg:w-[75%] w-[95%] lg:h-[75%] h-[100%]"
                    onSubmit={onSubmitHandler}
                >
                    <div className="py-[10px]">
                        <Title text1={"Delivery"} text2={" Information"}/>
                    </div>
                    <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                        <input type="text" placeholder="First Name"
                            className="w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] "
                            required
                            onChange={onChangeHandler}
                            name='firstName'
                            value={formData.firstName}
                        />
                        <input type="text" placeholder="Last Name"
                            className="w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] "
                            required
                            onChange={onChangeHandler}
                            name='lastName'
                            value={formData.lastName}
                        />
                    </div>
                    <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                        <input type="text" placeholder="E-mail Address"
                            className="w-[100%] h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] "
                            required
                            onChange={onChangeHandler}
                            name='email'
                            value={formData.email}
                        />
                    </div>
                    <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                        <input type="text" placeholder="Street Address"
                            className="w-[100%] h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] "
                            required
                            onChange={onChangeHandler}
                            name='street'
                            value={formData.street}
                        />
                    </div>
                    <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                        <input type="text" placeholder="City"
                            className="w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] "
                            required
                            onChange={onChangeHandler}
                            name='city'
                            value={formData.city}
                        />
                        <input type="text" placeholder="State"
                            className="w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] "
                            required
                            onChange={onChangeHandler}
                            name='state'
                            value={formData.state}
                        />
                    </div>
                    <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                        <input type="text" placeholder="Pincode"
                            className="w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] "
                            required
                            onChange={onChangeHandler}
                            name='pincode'
                            value={formData.pincode}
                        />
                        <input type="text" placeholder="Country"
                            className="w-[48%] h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] "
                            required
                            onChange={onChangeHandler}
                            name='country'
                            value={formData.country}
                        />
                    </div>
                    <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
                        <input type="text" placeholder="Phone Number"
                            className="w-[100%] h-[50px] rounded-md shadow-sm shadow-[#343434] bg-slate-700 placeholder:text-white text-[18px] px-[20px] "
                            required
                            onChange={onChangeHandler}
                            name='phone'
                            value={formData.phone}
                        />
                    </div>
                    {/* Button aligned right and not overlapping */}
                    <div className="flex justify-end px-[10px] mt-[20px]">
                        <button type="submit" className="text-[18px] active:bg-slate-500 cursor-pointer bg-[#3bcee848] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] border-[1px] border-[#80808049]">
                             {
                            LoadingFrontend ? 
                            <LoadingFrontend/> :
                            "Place Order"
                        }
                        </button>
                    </div>
                </form>
            </div>
            <div className="lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px]">
                <div className="lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex items-center justify-center gap-[10px] flex-col">
                    <CartTotal/>
                    <div className="py-[10px]">
                        <Title text1={"Payment"} text2={" Method"}/>
                    </div>
                    <div className="w-[100%] h-[30vh] lg:h-[100px] flex items-center mt-[20px] lg:mt-[0px] justify-center gap-[50px]">
                        <button onClick={() => setMethod('razorpay')} className={`w-[150px] h-[50px] rounded-sm ${method === 'razorpay' ? 'border-[5px]  border-blue-900 rounded-sm' : ''}`}>
                            <img src={pay} className="w-[100%] h-[100%] object-fill rounded-sm" alt="" />
                        </button>
                        <button
                            onClick={() => setMethod('cod')}
                            className={`w-[200px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-[white] text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${method === 'cod' ? 'border-[5px] border-blue-900 rounded-sm' : ''}`}
                        >
                            Cash On Delivery
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceOrder