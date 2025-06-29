import React, { useEffect, useState } from 'react'
import Nav from '../component/Nav.jsx'
import Backgound from '../component/Backgound.jsx'
import Hero from '../component/Hero.jsx'
import Product from '../pages/Product.jsx'
import OurPolicy from '../component/OurPolicy.jsx'
import NewLetterBox from '../component/NewLetterBox.jsx'
import Footer from '../component/Footer.jsx'

function Home() {
    let heroData = [
        {text1: "30% OFF ON ALL PRODUCTS", text2: "LIMITED TIME OFFER"},
        {text1: "FREE SHIPPING", text2: "ON ORDERS OVER $50"},
        {text1: "NEW ARRIVALS", text2: "CHECK OUT OUR LATEST COLLECTION"},
        {text1: "BEST SELLERS", text2: "SHOP OUR MOST POPULAR PRODUCTS"}
    ]
    let [heroCount, setHeroCount] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 
            1))
        },3000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className='overflow-x-hidden relative top-[70px]'>
        
            <Nav />
            <div className='w-[100%] lg:h-[100vh] md:h-[50vh] 
            sm:h-[30vh] bg-gradient-to-l
            from-[#141414] to-[#0c2025] '>
                <Backgound heroCount={heroCount}/>

                <Hero heroCount={heroCount}
                setHeroCount={setHeroCount}
                heroData={heroData[heroCount]}
                />

            </div>
            <Product/>
            <OurPolicy/>
            <NewLetterBox/>
            <Footer/>
        
        </div>
    )
}

export default Home