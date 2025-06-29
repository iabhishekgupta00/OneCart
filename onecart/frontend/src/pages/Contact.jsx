import React from 'react'
import Title from '../component/Title'
import image from '../assets/ContactUs.jpg'
import NewLetterBox from '../component/NewLetterBox'

function Contact () {
    return (
        <div className='w-[99vw] min-h-[99vh] flex
        items-center justify-center flex-col
        bg-gradient-to-l from-[#141414] to-[#0c2025]
        gap-[50px] pt-[80px]'>

            <Title text1={"Contact"} text2={" Us"}/>
            <div className='w-[100%] flex items-center
            justify-center flex-col lg:flex-row'>

                <div className='lg:w-[50%] w-[100%] flex
                items-center justify-center'>
                    <img src={image} alt="" className='lg:w-[70%]
                    w-[80%] shadow-md shadow-black rounded-sm'/>

                </div>

                <div className='lg:w-[50%] w-[80%] flex
                items-start justify-center gap-[20px] 
                flex-col mt-[20px] lg:mt-[0px]'>

                    <p className='lg:w-[80%] w-[100%] text-[white]
                    font-bold lg:text-[18px] text-[15px]'>
                        Our Store

                    </p>

                    <p className='lg:w-[80%] w-[100%] text-[white]
                    md:text-[16px] text-[13px]'>
                        <p>1234 Random Station</p>
                        <p>random city, state ,Indian</p>
                    </p>

                     <p className='lg:w-[80%] w-[100%] text-[white]
                    md:text-[16px] text-[13px]'>
                        <p>tel: +91 9319842040</p>
                        <p>E-mail: admin@onecart.com</p>
                    </p>
                    <p className='lg:w-[80%] w-[100%] text-[15px]
                    text-[white] lg:text-[18px] mt-[10px] font-bold'>

                        Careers At OneCart

                    </p>
                    <p className='lg:w-[80%] w-[100%] text-[white]
                    md:text-[16px] text-[13px]'>

                        Learn more about us

                    </p>

                    <button className='px-[30px] py-[20px] flex items-center
                    justify-center text-[white] bg-transparent border
                    active:bg-slate-600 rounded-md'>

                        Explore More Opportunity

                    </button>

                </div>

            </div>
            <NewLetterBox/>

        </div>
    )
}

export default Contact