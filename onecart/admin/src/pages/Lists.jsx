import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../component/Sidebar";
import Nav from "../component/Nav";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";


function Lists() {
    let [lists, setLists] = useState([])
    let {serverUrl} = useContext(authDataContext)

    const fetchLists = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/product/listproduct")
            setLists(result.data)
            console.log("Product lists fetched successfully:", result.data)
        } catch (error) {
            console.log("Error fetching product lists:", error)
            
        }
    }

    const removeList = async (id) => {
        try {
            let result = await axios.post(`${serverUrl}/api/product/removeproduct/${id}`, {},{ withCredentials: true })

                if(result.data){
                    fetchLists()
                }
                else{
                    console.log("Failed to remove")
                }
        } catch (error) {
            console.log(error)
            
        }
        
    }

    useEffect(() => {
          fetchLists()
    }, []);
    return (
       <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l
        from-[#141414] to-[#0c2025] text-[white]">

            <Nav/>
            <div className="w-full h-full flex items-start justify-start">
                <Sidebar/>
                <div className="flex-1 min-h-[80vh] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] pl-[40px] items-start justify-start" >
                    <div className="w-full max-w-[600px] h-[50px] text-[28px] md:text-[48px] mb-[20px] text-white text-left">
                        All Listed Products
                    </div>

                    {
                        lists?.length > 0 ? (
                            lists.map((item, index) => (
                                <div key={index} className="w-[90%] md:h-[120px] h-[90px] 
                                bg-slate-600 rounded-xl flex items-center 
                                justify-start gap-[5px] md:gap-[30px] 
                                p-[10px] md:px-[30px]">
                                    <img src={item.image1} className="w-[25%]
                                    md:w-[120px] h-[200%] rounded-lg" alt="" />
                                    <div className="w-[90%] h-[80%] flex 
                                    flex-col items-start justify-center gap-[2px]">
                                        <div className="w-[100%] md:text-[20px] text-[15px]
                                        text-[#bef0f3]">{item.name}</div>
                                         <div className="md:text-[17px] text-[15px]
                                    text-[#bef0f3]">{item.category}</div>
                                     <div className="md:text-[17px] text-[15px]
                                    text-[#bef0f3]">₹ {item.price}</div>
                                    </div>
                                    <div className="w-[10%] h-[100%]
                                    bg-transparent flex items-center justify-center">
                                        <span className="w-[35px] h-[30%]
                                        flex items-center justify-center rounded-md
                                        md:hover:bg-red-300 md:hover:text-black
                                        cursor-pointer hover:text-red-300" onClick={() => removeList(
                                            item._id
                                        )}>X</span>
                                    </div>
                                   
                                </div>
                            ))

                        ) 
                        : (
                            <div className="text-white text-lg">No products found</div>
                        )
                    }
                </div>
            </div>
  
</div>
    );
}


export default Lists
