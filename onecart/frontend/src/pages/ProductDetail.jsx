

// // import React, { useContext, useEffect, useState } from 'react'
// // import { useParams } from 'react-router-dom'
// // import { shopDataContext } from '../context/ShopContext'
// // import { FaStar } from "react-icons/fa";
// // import { FaStarHalf } from "react-icons/fa";
// // import RelatedProduct from '../component/RelatedProduct';

// // function ProductDetail () {

// //     let {productId} = useParams()
// //     let {products,currency,addToCart} = useContext(shopDataContext)
// //     let [productData,setProductData] = useState()

// //     const [image,setImage] = useState('')
// //     const [image1,setImage1] = useState('')
// //     const [image2,setImage2] = useState('')
// //     const [image3,setImage3] = useState('')
// //     const [image4,setImage4] = useState('')
// //     const [size,setSize] = useState ('')

// //     const fetchProductData = () => {
// //         const foundProduct = products.find(item => String(item.id) === String(productId));
// //         if (foundProduct) {
// //             setProductData(foundProduct);
// //             setImage1(foundProduct.image1);
// //             setImage2(foundProduct.image2);
// //             setImage3(foundProduct.image3);
// //             setImage4(foundProduct.image4);
// //             setImage(foundProduct.image1);
// //         } else {
// //             setProductData(null);
// //         }
// //     }

// //     useEffect(() => {
// //         fetchProductData()
// //     },[productId, products])

// //     return productData ? (
// //         <div>
// //             <div className='w-[100%] h-[130%] md:h-[100vh]
// //             bg-gradient-to-l from-[#141414] to-[#0c2025]
// //             flex items-center justify-start flex-col
// //             lg:flex-row gap-[20px]'>
// //                 {/* --- Updated image gallery and main image section --- */}
// //                 <div className='lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center justify-center gap-[30px] flex-col-reverse lg:flex-row'>
// //                     {/* Gallery */}
// //                     <div className='w-[90px] md:w-[120px] flex-shrink-0 h-auto flex flex-row lg:flex-col gap-4'>
// //                         {[image1, image2, image3, image4].map((img, idx) => (
// //                             <div key={idx} className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-slate-300 border-[1px] border-[#80808049] rounded-md flex items-center justify-center'>
// //                                 <img src={img} alt="" className='w-[80%] h-[80%] cursor-pointer rounded-md object-cover'
// //                                     onClick={() => setImage(img)} />
// //                             </div>
// //                         ))}
// //                     </div>
// //                     {/* Main Image */}
// //                     <div className='flex-1 flex items-center justify-center'>
// //                         <img src={image} alt="" className='w-full max-w-[400px] lg:max-h-[500px] h-auto rounded-md object-contain bg-white' />
// //                     </div>
// //                 </div>
// //                 {/* --- End updated section --- */}

// //                 <div className='lg:w-[100vw] w-[100vw] lg:h-[75vh] h-[40vh]
// //                 lg:mt-[80px] flex items-start justify-start
// //                 flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px]
// //                 lg:pl-[0px] lg:px-[0px] lg:py-[0px] gap-[10px]'>
// //                     <h1 className='text-[40px] font-semibold text-[aliceblue]'>
// //                         {productData.name.toUpperCase()}
// //                     </h1>
// //                     <div className='flex items-center gap-1'>
// //                         <FaStar className='text-[20px] fill-[#FFD700]'/>
// //                         <FaStar className='text-[20px] fill-[#FFD700]'/>
// //                         <FaStar className='text-[20px] fill-[#FFD700]'/>
// //                         <FaStar className='text-[20px] fill-[#FFD700]'/>
// //                         <FaStarHalf className='text-[20px] fill-[#FFD700]'/>
// //                         <p className='text-[18px] font-semibold pl-[5px] text-[white]'>(69)</p>
// //                     </div>
// //                     <p className='text-[30px] font-semibold pl-[5px] text-[white] '>{currency} {productData.price}</p>
// //                     <p className='w-[80%] md:w-[60%] text-[20px] font-semibold pl-[5px]  text-[white]'>
// //                         {productData.description} Lorem ipsum dolor sit amet 
// //                         consectetur adipisicing elit. Vitae, ea.
// //                     </p>
// //                     <div className='flex flex-col gap-[10px] my-[10px]'>
// //                         <p className='text-[25px] font-semibold pl-[5px] text-[white] '>Select Size</p>
// //                         <div className='flex gap-2'>
// //                             {
// //                                 productData.sizes.map((item, index) => (
// //                                     <button key={index} className={`border px-4
// //                                         py-2 bg-slate-300 rounded-md
// //                                         ${item === size ? 'bg-[black] text-[red] text-[20px]' : ''}`}
// //                                         onClick={() => setSize(item)} >{item}</button>
// //                                 ))
// //                             }
// //                         </div>
// //                         <button className='text-[16px] active:bg-slate-500
// //                          cursor-pointer bg-[#495b61c9] py-[10px] px-[20px]
// //                          rounded-2xl mt-[10px] border-[1px] border-[#80808049]
// //                          text-[white] shadow-md shadow-black'
// //                          onClick={() => addToCart(productData._id , size)}>Add to Cart</button>
// //                     </div>
// //                     <div className='w-[90%] h-[1px] bg-slate-700'></div>
// //                     <div className='w-[80%] text-[16px] text-[white]'>
// //                         <p>100% original quality</p>
// //                         <p>also cash on delivery aviliable</p>
// //                         <p>Easy exchange and return</p>
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className='w-[100%] min-h-[70vh]
// //             bg-gradient-to-l from-[#141414] to-[#0c2025] flex
// //             items-start justify-start flex-col overflow-x-hidden'>
// //                 <div className='flex px-[20px] mt-[90px]
// //                 lg:ml-[80px] ml-[0px] lg:mt-[0px] '>
// //                     <p className='border px-5 py-3 text-sm text-white'>
// //                         Description
// //                     </p>
// //                     <p className='border px-5 py-3 text-sm text-white '>
// //                         Reviews(69)
// //                     </p>
// //                 </div>
// //                 <div className='w-[80%] md:h-[150px] h-[220px]
// //                 bg-[#3336397c] border text-[white] text-[13px]
// //                 md:text-[15px] mg:text-[20px] px-[10px] md:px-[30px]
// //                 lg:ml-[100px] ml-[20px] '>
// //                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
// //                          Autem explicabo magnam at consequatur minus assumenda, 
// //                          fugit velit dolorem dolor in 
// //                         ipsam? Suscipit quaerat, ex exercitationem animi 
// //                         rem atque similique provident? Lorem ipsum dolor sit 
// //                         amet consectetur adipisicing elit. Neque pariatur vel vero illum inventore 
// //                         eveniet perferendis consequuntur. Nesciunt, assumenda fugit.</p>
// //                 </div>
// //                 <RelatedProduct category={productData.category} 
// //                 variety={productData.variety}
// //                 currentProductId={productData._id}/>
// //             </div>
// //         </div>
// //     ): <div className='opacity-0'></div>
// // }

// // export default ProductDetail

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import RelatedProduct from '../component/RelatedProduct';
import { toast } from "react-toastify";
import LoadingFrontend from "../component/LoadingFrontend";

function ProductDetail () {

    let {productId} = useParams()
    let {products,currency,addToCart} = useContext(shopDataContext)
    let [productData,setProductData] = useState()
     const [loading,setLoading] = useState(false)

    const [image,setImage] = useState('')
    const [image1,setImage1] = useState('')
    const [image2,setImage2] = useState('')
    const [image3,setImage3] = useState('')
    const [image4,setImage4] = useState('')
    const [size,setSize] = useState ('')

    const fetchProductData = () => {
        const foundProduct = products.find(item => String(item._id) === String(productId));
        

        if (foundProduct) {
            setProductData(foundProduct);
            setImage1(foundProduct.image1);
            setImage2(foundProduct.image2);
            setImage3(foundProduct.image3);
            setImage4(foundProduct.image4);
            setImage(foundProduct.image1);
        } else {
            setProductData(null);
            
        }
        toast.success("Product added to Cart")
    }

    useEffect(() => {
        fetchProductData()
    },[productId, products])

    return productData ? (
        <div>
            <div className='w-[100%] h-[130%] md:h-[100vh]
            bg-gradient-to-l from-[#141414] to-[#0c2025]
            flex items-center justify-start flex-col
            lg:flex-row gap-[20px]'>
                {/* --- Updated image gallery and main image section --- */}
                <div className='lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center justify-center gap-[30px] flex-col-reverse lg:flex-row'>
                    {/* Gallery */}
                    <div className='w-[90px] md:w-[120px] flex-shrink-0 h-auto flex flex-row lg:flex-col gap-4'>
                        {[image1, image2, image3, image4].map((img, idx) => (
                            <div key={idx} className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-slate-300 border-[1px] border-[#80808049] rounded-md flex items-center justify-center'>
                                <img src={img} alt="" className='w-[80%] h-[80%] cursor-pointer rounded-md object-cover'
                                    onClick={() => setImage(img)} />
                            </div>
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className='flex-1 flex items-center justify-center'>
                        <img src={image} alt="" className='w-full max-w-[400px] lg:max-h-[500px] h-auto rounded-md object-contain bg-white' />
                    </div>
                </div>
                {/* --- End updated section --- */}

                <div className='lg:w-[100vw] w-[100vw] lg:h-[75vh] h-[40vh]
                lg:mt-[80px] flex items-start justify-start
                flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px]
                lg:pl-[0px] lg:px-[0px] lg:py-[0px] gap-[10px]'>
                    <h1 className='text-[40px] font-semibold text-[aliceblue]'>
                        {productData.name.toUpperCase()}
                    </h1>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-[20px] fill-[#FFD700]'/>
                        <FaStar className='text-[20px] fill-[#FFD700]'/>
                        <FaStar className='text-[20px] fill-[#FFD700]'/>
                        <FaStar className='text-[20px] fill-[#FFD700]'/>
                        <FaStarHalf className='text-[20px] fill-[#FFD700]'/>
                        <p className='text-[18px] font-semibold pl-[5px] text-[white]'>(69)</p>
                    </div>
                    <p className='text-[30px] font-semibold pl-[5px] text-[white] '>{currency} {productData.price}</p>
                    <p className='w-[80%] md:w-[60%] text-[20px] font-semibold pl-[5px]  text-[white]'>
                        {productData.description} Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Vitae, ea.
                    </p>
                    <div className='flex flex-col gap-[10px] my-[10px]'>
                        <p className='text-[25px] font-semibold pl-[5px] text-[white] '>Select Size</p>
                        <div className='flex gap-2'>
                            {
                                productData.sizes.map((item, index) => (
                                    <button key={index} className={`border px-4
                                        py-2 bg-slate-300 rounded-md
                                        ${item === size ? 'bg-[black] text-[red] text-[20px]' : ''}`}
                                        onClick={() => setSize(item)} >{item}</button>
                                ))
                            }
                        </div>
                        <button className='text-[16px] active:bg-slate-500
                         cursor-pointer bg-[#495b61c9] py-[10px] px-[20px]
                         rounded-2xl mt-[10px] border-[1px] border-[#80808049]
                         text-[white] shadow-md shadow-black'
                         onClick={() => addToCart(productData._id , size)}>
                             {
                            LoadingFrontend ? 
                            <LoadingFrontend/> :
                            "add to Cart"
                        }
                         </button>
                    </div>
                    <div className='w-[90%] h-[1px] bg-slate-700'></div>
                    <div className='w-[80%] text-[16px] text-[white]'>
                        <p>100% original quality</p>
                        <p>also cash on delivery aviliable</p>
                        <p>Easy exchange and return</p>
                    </div>
                </div>
            </div>
            <div className='w-[100%] min-h-[70vh]
            bg-gradient-to-l from-[#141414] to-[#0c2025] flex
            items-start justify-start flex-col overflow-x-hidden'>
                <div className='flex px-[20px] mt-[90px]
                lg:ml-[80px] ml-[0px] lg:mt-[0px] '>
                    <p className='border px-5 py-3 text-sm text-white'>
                        Description
                    </p>
                    <p className='border px-5 py-3 text-sm text-white '>
                        Reviews(69)
                    </p>
                </div>
                <div className='w-[80%] md:h-[150px] h-[220px]
                bg-[#3336397c] border text-[white] text-[13px]
                md:text-[15px] mg:text-[20px] px-[10px] md:px-[30px]
                lg:ml-[100px] ml-[20px] '>
                    <p>Step into the world of Onecart, where fashion meets comfort in every stitch.
                         Our clothing collection is thoughtfully designed for men, women, and 
                         kids, offering stylish, durable, and affordable pieces for every moment 
                         of life—from casual days to standout occasions.
                         From men’s sharp shirts and trousers, to women’s 
                         chic tops and dresses, to kids’ comfy everyday wear, 
                         Onecart brings the whole family under one fashionable roof.

Onecart – Your style. Your comfort. One destination.</p>
                </div>
                {/* Pass the full product object to RelatedProduct for image rendering */}
                <RelatedProduct 
                
                    category={productData.category}
                    variety={productData.variety}
                    currentProductId={productData._id}
                    products={products}
                     // Pass products for image access
                />
                
            </div>
        </div>
    ): <div className='opacity-0'></div>
}

export default ProductDetail

