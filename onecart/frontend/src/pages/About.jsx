import React from 'react'
import Title from '../component/Title.jsx'
import about from '../assets/about.jpg'

function About () {
    return (
        <div className='w-[100vw] min-h-[100vh] flex flex-col items-center justify-start bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[30px] pt-[80px]'>
            <Title text1={"ABOUT"} text2={" US"}/>
            <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-[40px]'>
                {/* Image and overlayed text */}
                <div className='relative w-[420px] h-[260px] md:w-[600px] md:h-[340px] flex-shrink-0'>
                    <img src={about} alt="" className='w-full h-full object-cover rounded-md shadow-md shadow-black' />
                    <div className='absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end px-8 py-6 bg-black/30 rounded-md'>
                        <h2 className='text-white text-2xl md:text-3xl font-bold mb-2'>ONECART</h2>
                        <p className='text-white text-base md:text-lg font-medium mb-2'>
                            Slim-fit cotton shirt, breathable, stylish, comfortable, easy-care, premium quality.
                        </p>
                        <span className='bg-white/80 text-black px-3 py-1 rounded font-semibold text-sm mb-4'>SPECIAL OFFER 30% OFF</span>
                        <span className='text-white text-xs font-semibold'>SUITABLE FOR ALL BABIES</span>
                        <span className='text-white text-xs mt-1'>WWW.ONECART.COM</span>
                    </div>
                </div>
                {/* About text section */}
                <div className='max-w-[600px] w-full flex flex-col items-start justify-center gap-4 px-4'>
                    <p className='text-white md:text-[16px] text-[13px]'>
                        OneCart born for smart, seamless shopping—created to deliver quality products, trending styles, and everyday essentials in one place. With reliable service, fast delivery, and great value, OneCart makes your online shopping experience simple, satisfying, and stress-free.
                    </p>
                    <p className='text-white md:text-[16px] text-[13px]'>
                        Modern shoppers—combining style, convenience, and affordability. Whether it's fashion, essentials, or trends, we bring everything you need to one trusted platform with fast delivery, easy returns, and a customer-first shopping experience you'll love.
                    </p>
                    <p className='text-[15px] text-white lg:text-[18px] mt-[10px] font-bold'>Our Mission</p>
                    <p className='text-white md:text-[16px] text-[13px]'>
                        Our mission is to redefine online shopping by delivering quality, affordability, and convenience. OneCart connects customers with trusted products and brands, offering a seamless, customer-focused experience that saves time, adds value, and fits every lifestyle and need.
                    </p>
                </div>
            </div>
            <div className='w-[100%] flex items-center justify-center
            flex-col gap-[10px]'>
                <Title text1={"Why"} text2={"  Choose-Us"}/>
                <div className='w-[80%] flex items-center justify-center
                lg:flex-row flex-col py-[40px]'>

                    <div className='lg:w-[33%] w-[90%] h-[250px]
                    border-[1px] border-gray-100 flex items-center
                    justify-center gap-[20px] flex-col px-[40px]
                    py-[10px] text-[white] backdrop-blur-[2px]
                    bg-[#ffffff0b]'>

                        <b className='text-[20px] font-semibold
                        text-[#bff1f9] '>

                            Quality Assurance

                        </b>

                        <p>
                            Lorem ipsum dolor sit amet consectetur
                              tempora. Quidem corrupti, 
                              sint, itaque voluptates
                               blanditiis quisquam, deserunt voluptatum
                                
                        </p>

                    </div>
                     <div className='lg:w-[33%] w-[90%] h-[250px]
                    border-[1px] border-gray-100 flex items-center
                    justify-center gap-[20px] flex-col px-[40px]
                    py-[10px] text-[white] backdrop-blur-[2px]
                    bg-[#ffffff0b]'>

                        <b className='text-[20px] font-semibold
                        text-[#bff1f9] '>

                            Convience

                        </b>

                        <p>
                            Lorem ipsum dolor sit amet consectetur
                              tempora. Quidem corrupti, 
                              sint, itaque voluptates
                               blanditiis quisquam, deserunt voluptatum
                                
                        </p>

                    </div>

                     <div className='lg:w-[33%] w-[90%] h-[250px]
                    border-[1px] border-gray-100 flex items-center
                    justify-center gap-[20px] flex-col px-[40px]
                    py-[10px] text-[white] backdrop-blur-[2px]
                    bg-[#ffffff0b]'>

                        <b className='text-[20px] font-semibold
                        text-[#bff1f9] '>

                            Coustmer Service

                        </b>

                        <p>
                            Lorem ipsum dolor sit amet consectetur
                              tempora. Quidem corrupti, 
                              sint, itaque voluptates
                               blanditiis quisquam, deserunt voluptatum
                                
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About

