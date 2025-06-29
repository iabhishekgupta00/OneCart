import React from "react"
import { IoAddCircleOutline } from "react-icons/io5";
import { IoListCircleOutline } from "react-icons/io5";
import { MdOutlineViewList } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    let navigate = useNavigate()
    return(
        <div className="w-[220px] min-h-screen border-r-[1px] bg-[#102126] py-[70px] flex-shrink-0">
            <div className="flex flex-col gap-[20px] pt-[40px] px-4 text-[25px] text-white">
                <div className="flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]" onClick={() => navigate("/add")}> 
                    <IoAddCircleOutline className="w-[23px] h-[23px]"/>
                    <p className="block">Add Items</p>
                </div>
                <div className="flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]" onClick={() => navigate("/lists")}> 
                    <IoListCircleOutline className="w-[23px] h-[23px]"/>
                    <p className="block">List Items</p>
                </div>
                <div className="flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]" onClick={() => navigate("/orders")}> 
                    <MdOutlineViewList className="w-[23px] h-[23px]"/>
                    <p className="block">View Orders</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar