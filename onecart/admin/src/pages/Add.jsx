import React, { useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import upload from "../assets/upload.png";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import Loading from "../component/loading";

function Add() {

    let [image1, setImage1] = useState(null)
    let [image2, setImage2] = useState(null)
    let [image3, setImage3] = useState(null)
    let [image4, setImage4] = useState(null)
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState("Men")
    const [price,setPrice] = useState("") 
    const [variety,setVariety] = useState("Shirt")
    const [bestseller,setBestseller] = useState(false)
    const [loading,setLoading] = useState(false)
    const [sizes,setSizes] = useState([])

    let {serverUrl} = useContext(authDataContext)

    const handleAddProduct = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            let formData = new FormData();
            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("variety", variety)
            formData.append("subCategory", variety); // send variety as subCategory
            formData.append("bestseller", bestseller)
            formData.append("sizes", JSON.stringify(sizes))
            if (image1) formData.append("image1", image1); 
            if (image2) formData.append("image2", image2);
            if (image3) formData.append("image3", image3);
            if (image4) formData.append("image4", image4);

            let result = await axios.post(serverUrl + "/api/product/addproduct", formData, 
                {withCredentials: true})

                console.log(result.data)
                toast.success("Add Product Successfully")
                setLoading(false)

                if (result.data) {
                    setName("")
                    setDescription("")
                    setImage1(false)
                    setImage2(false)
                    setImage3(false)
                    setImage4(false)
                    setPrice("")
                    setBestseller(false)
                    setCategory("Men")
                    setVariety("Shirt")
                }

        } catch (error) {

            console.error("Error adding product:", error);
            setLoading(false)
            toast.error("Add Product Failed")
            
        }

    }


    return (
        <div className="w-[100vw] min-h-[100vh] 
        bg-gradient-to-l from-[#141414] to-[#0c2025]
        text-[white] overflow-x-hidden relative">
            <Nav/>
            <Sidebar/>

            <div className="w-[82%] h-[100%] flex items-center
            justify-start overflow-x-hidden absolute
            right-0 bottom-[5%] ml-[220px]">

                <form action="" onSubmit={handleAddProduct} className="w-[100%] md:w-[90%] 
                h-[100%] mt-[70px] flex flex-col gap-[30px] py-[60px]
                px-[30px] md:px-[60px]">
                    <div className="w-[400px] h-[50px] 
                    text-[25px] md:text-[40px] text-[white]">Add Product</div>

                    <div className="w-[80%] h-[130px] flex items-start
                    justify-center flex-col mt-[20px] gap-[10px]">
                        <p className="text-[20px] md:text-[25px]
                        font-semibold">Upload Images</p>

                        <div className="w-[100%] h-[100%] flex items-center
                        justify-start">
                            <label htmlFor="image1" className="w-[65px] h-[65px]
                            md:w-[100px] md:h-[100px] cursor-pointer
                            hover:border-[#46d1f7]">
                                <img src={!image1 ? upload : URL.createObjectURL(image1)} alt="" 
                                className="w-[45%] h-[45%] rounded-lg
                                shadow-2xl hover:border-[#1d1d1d] border-[2px]"/>

                                <input type="file" id="image1" name="image1" hidden
                                onChange={(e) => setImage1(e.target.files[0])} required/>
                            </label>

                            <label htmlFor="image2" className="w-[65px] h-[65px]
                            md:w-[100px] md:h-[100px] cursor-pointer
                            hover:border-[#46d1f7]">
                                <img src={!image2 ? upload : URL.createObjectURL(image2)} alt="" 
                                className="w-[45%] h-[45%] rounded-lg
                                shadow-2xl hover:border-[#1d1d1d] border-[2px]"/>

                                <input type="file" id="image2" name="image2" hidden
                                onChange={(e) => setImage2(e.target.files[0])} required/>
                            </label>

                            <label htmlFor="image3" className="w-[65px] h-[65px]
                            md:w-[100px] md:h-[100px] cursor-pointer
                            hover:border-[#46d1f7]">
                                <img src={!image3 ? upload : URL.createObjectURL(image3)} alt="" 
                                className="w-[45%] h-[45%] rounded-lg
                                shadow-2xl hover:border-[#1d1d1d] border-[2px]"/>

                                <input type="file" id="image3" name="image3" hidden
                                onChange={(e) => setImage3(e.target.files[0])} required/>
                            </label>

                            <label htmlFor="image4" className="w-[65px] h-[65px]
                            md:w-[100px] md:h-[100px] cursor-pointer
                            hover:border-[#46d1f7]">
                                <img src={!image4 ? upload : URL.createObjectURL(image4)} alt="" 
                                className="w-[45%] h-[45%] rounded-lg
                                shadow-2xl hover:border-[#1d1d1d] border-[2px]"/>

                                <input type="file" id="image4" name="image4" hidden
                                onChange={(e) => setImage4(e.target.files[0])} required/>
                            </label>

                            
                        </div>
                    </div>
                    <div className="w-[80%] h-[100px] 
                    flex items-start justify-center flex-col gap-[10px]">
                        <p className="text-[20px] md:text-[25px]
                        font-semibold">Product Name</p>

                        <input type="text" placeholder="Enter product name"
                        className="w-[600px] max:w-[98%]
                        h-[40px] rounded-lg hover:border-[#46d1f7] 
                        border-[2px] cursor-pointer bg-slate-600
                        px-[20px] text-[18px] placeholder:text-[#ffffffc2]" onChange={(e) => setName(e.target.value)} value=
                        {name} required/>
                    </div> 

                     <div className="w-[80%]  
                    flex items-start justify-center flex-col gap-[10px]">
                        <p className="text-[20px] md:text-[25px]
                        font-semibold">Product Description</p>

                        <textarea type="text" placeholder="Enter product description"
                        className="w-[600px] h-[100px] max:w-[98%]
                        rounded-lg hover:border-[#46d1f7] 
                        border-[2px] cursor-pointer bg-slate-600
                        px-[20px] py-[10px] text-[18px] placeholder:text-[#ffffffc2]" 
                        onChange={(e) => setDescription(e.target.value)} value={description} required/>
                    </div>

                    <div className="w-[80%] flex items-center gap-[40px] flex-wrap">
                        <div className="md:w-[40%] w-full flex items-start flex-col gap-[10px]">
                            <p className="text-[20px] md:text-[25px] font-semibold w-full ">Product Category</p>
                            <select name="" id="" className="bg-slate-600 w-full px-[10px] py-[7px] text-black rounded-lg hover:border-[#46d1f7] border-[2px]"
                            onChange={(e) => setCategory(e.target.value)} >
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Kids">Kids</option>
                            </select>
                        </div>
                        <div className="md:w-[40%] w-full flex items-start flex-col gap-[10px]">
                            <p className="text-[20px] md:text-[25px] font-semibold w-full blackspace-nowrap">Product Variety</p>
                            <select name="" id="" className="bg-slate-600 w-full px-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]"
                            onChange={(e) => setVariety(e.target.value)} >
                                <option value="Shirt">Shirt</option>
                                <option value="Pants">Pants</option>
                                <option value="Shoes">Shoes</option>
                            </select>
                        </div>
                        

                        
                    </div>
                      <div className="md:w-[30%] w-[10%] flex items-start flex-col gap-[10px]">
                            <p className="text-[20px] md:text-[25px]
                             font-semibold w-[100%]">Product Price</p>
                             <input type="number" placeholder="₹ 2000"
                             className="w-[600px] max:w-[98%]
                             h-[40px] rounded-lg hover:border-[#46d1f7] 
                             border-[2px] cursor-pointer bg-slate-600
                             px-[20px] text-[18px] placeholder:text-[#ffffffc2]" 
                             onChange={(e) => setPrice(e.target.value)} value={price} required/>

                       </div>

                       <div className="w-[80%] h-[220px]
                       md:h-[100px] flex items-start justify-center
                       flex-col gap-[10px] py-[10px] md:py-[0px]">

                        <p className="text-[20px] md:text-[25px]
                        font-semibold">Product Sizes</p>
                        <div className="flex items-center
                        justify-start gap-[15px] flex-wrap">
                            <div className={`px-[20px] py-[10px] rounded-lg
                            bg-slate-600 text-[18px] 
                            hover:border-[#46d1f7] border-[2px] cursor-pointer 
                            ${sizes.includes("S") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} 
                            onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])}>S</div>
                            
                             <div className={`px-[20px] py-[10px] rounded-lg
                            bg-slate-600 text-[18px] 
                            hover:border-[#46d1f7] border-[2px] cursor-pointer 
                            ${sizes.includes("M") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} 
                            onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>M</div>
                            
                            
                            <div className={`px-[20px] py-[10px] rounded-lg
                            bg-slate-600 text-[18px] 
                            hover:border-[#46d1f7] border-[2px] cursor-pointer 
                            ${sizes.includes("L") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} 
                            onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>L</div>
                            
                            
                            <div className={`px-[20px] py-[10px] rounded-lg
                            bg-slate-600 text-[18px] 
                            hover:border-[#46d1f7] border-[2px] cursor-pointer 
                            ${sizes.includes("XL") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} 
                            onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])}>XL</div>
                            
                            <div className={`px-[20px] py-[10px] rounded-lg
                            bg-slate-600 text-[18px] 
                            hover:border-[#46d1f7] border-[2px] cursor-pointer 
                            ${sizes.includes("XXL") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} 
                            onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])}>XXL</div>
                            
                            
                            <div className={`px-[20px] py-[10px] rounded-lg
                            bg-slate-600 text-[18px] 
                            hover:border-[#46d1f7] border-[2px] cursor-pointer 
                            ${sizes.includes("XXXL") ? "bg-green-400 text-black border-[#46d1f7]" : ""}`} 
                            onClick={() => setSizes(prev => prev.includes("XXXL") ? prev.filter(item => item !== "XXXL") : [...prev, "XXXL"])}>XXXL</div>

                        </div>
                       </div>
                       <div className="w-[80%] flex items-center
                       justify-start gap-[10px] mt-[20px]">
                        <input type="checkbox" id="checkbox"   
                        className="w-[20px] h-[20px] cursor-pointer"
                        onChange={() => setBestseller(prev => !prev)} />
                       <label htmlFor="checkbox" className="text-[18px] md:text-[22px]
                       font-semibold">
                        Add to Bestsellers

                       </label>

                       </div>

                       <button className="w-[140px] px-[20px] py-[20px] rounded-xl
                       bg-[#65d1f7]  flex items-center justify-center gap-[10px]
                       text-[black] active:bg-slate-700 active:text-[white]
                       active:border-[2px] border-[white]">

                        {
                            loading ? 
                            <Loading/> :
                            "All Product"
                        }

                       </button>

                </form>
            </div>
          
        </div>
    );
}

export default Add
