// import React from 'react'
// import Title from './Title'
// import { RiExchange2Line } from "react-icons/ri";

// function OurPolicy () {
//     return (
//         <div className='w-[100vw] h-[100vh] md:h-[70vh]
//         flex items-center justify-start flex-col bg-gradient-to-l
//         from-[#141414] to-[#0c2025] gap-[50px]'>

//             <div className='h-[8%] w-[100%] text-center mt-[70px]
//             '>
//                 <Title text1={"OUR"} text2={" POLICY"}/>
//                 <p className='w-[100%] m-auto text-[13px]
//                 md:text-[20px] px-[10px] text-blue-100'>
//                     Coustmer Friendly Policies 
//                     Comitted To Your Satisfaction
//                 </p>
//             </div>

//             <div className='w-[100%] min-h-[40vh] h-[20%]
//             flex items-center justify-center
//             flex-wrap lg:gap-[50px] gap-[40px] flex-row '>
//                 <div className='w-[400px] max-w-[90%] h-[60%]
//                 flex items-center justify-center
//                 flex-col gap-[10px]'>
//                    <RiExchange2Line className='md:w-[80px] 
//                    w-[140px] h-[140px] md:h-[80px] text-[#90b9ff]'/>
//                     <p className='font-semibold md:text-[25px]
//                     text-[19px] text-[#a5e8f7]'>
//                         Easy Exchange Policy
//                     </p>
//                     <p className='font-semibold md:text-[18px]
//                     text-[12px] text-[aliceblue] text-center'>
//                         Exchange Made Easy , Simple and Coustmer Friendly Process
//                     </p>
//                 </div>

//                 <div className='w-[400px] max-w-[90%] h-[60%]
//                 flex items-center justify-center
//                 flex-col gap-[10px]'>
//                    <RiExchange2Line className='md:w-[80px] 
//                    w-[140px] h-[140px] md:h-[80px] text-[#90b9ff]'/>
//                     <p className='font-semibold md:text-[25px]
//                     text-[19px] text-[#a5e8f7]'>
//                         Easy Exchange Policy
//                     </p>
//                     <p className='font-semibold md:text-[18px]
//                     text-[12px] text-[aliceblue] text-center'>
//                         Exchange Made Easy , Simple and Coustmer Friendly Process
//                     </p>
//                 </div>

//                 <div className='w-[400px] max-w-[90%] h-[60%]
//                 flex items-center justify-center
//                 flex-col gap-[10px]'>
//                    <RiExchange2Line className='md:w-[80px] 
//                    w-[140px] h-[140px] md:h-[80px] text-[#90b9ff]'/>
//                     <p className='font-semibold md:text-[25px]
//                     text-[19px] text-[#a5e8f7]'>
//                         Easy Exchange Policy
//                     </p>
//                     <p className='font-semibold md:text-[18px]
//                     text-[12px] text-[aliceblue] text-center'>
//                         Exchange Made Easy , Simple and Coustmer Friendly Process
//                     </p>
//                 </div>

                

                
//             </div>

//         </div>
//     )
// }

// export default OurPolicy

import React from 'react'
import Title from './Title'
import { RiExchange2Line, RiRefund2Line, RiCustomerService2Line } from "react-icons/ri";

function OurPolicy () {
    return (
        <div className='w-full min-h-[70vh] flex flex-col items-center justify-start bg-gradient-to-l from-[#141414] to-[#0c2025] gap-8'>

            <div className='w-full text-center mt-16'>
                <Title text1={"OUR"} text2={" POLICY"}/>
                <p className='w-full m-auto text-[13px] md:text-[20px] px-2 text-blue-100'>
                    Customer-Friendly Policies – Committed to Your Satisfaction and Safety.
                </p>
            </div>

            <div className='w-full flex items-start justify-center flex-wrap gap-8 md:gap-12'>
                {/* Card 1 */}
                <div className='w-[300px] flex flex-col items-center justify-center gap-3'>
                    <RiExchange2Line className='w-[80px] h-[80px] text-[#90b9ff]'/>
                    <p className='font-semibold text-[22px] md:text-[25px] text-[#a5e8f7]'>
                        Easy Exchange Policy
                    </p>
                    <p className='font-semibold text-[14px] md:text-[16px] text-[aliceblue] text-center'>
                        Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.
                    </p>
                </div>
                {/* Card 2 */}
                <div className='w-[300px] flex flex-col items-center justify-center gap-3'>
                    <RiRefund2Line className='w-[80px] h-[80px] text-[#90b9ff]'/>
                    <p className='font-semibold text-[22px] md:text-[25px] text-[#a5e8f7]'>
                        Fast Refunds
                    </p>
                    <p className='font-semibold text-[14px] md:text-[16px] text-[aliceblue] text-center'>
                        Hassle-free and prompt refund process for your peace of mind.
                    </p>
                </div>
                {/* Card 3 */}
                <div className='w-[300px] flex flex-col items-center justify-center gap-3'>
                    <RiCustomerService2Line className='w-[80px] h-[80px] text-[#90b9ff]'/>
                    <p className='font-semibold text-[22px] md:text-[25px] text-[#a5e8f7]'>
                        24/7 Support
                    </p>
                    <p className='font-semibold text-[14px] md:text-[16px] text-[aliceblue] text-center'>
                        Our team is always here to help you with any queries.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurPolicy