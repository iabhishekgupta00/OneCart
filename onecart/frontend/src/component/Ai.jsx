import React, { useContext, useState } from "react";
import abe from '../assets/ai.jpg';
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import open from '../assets/open.mp3'
import close from '../assets/close.mp3'

function Ai() {
    let { showSearch , setShowSearch} = useContext(shopDataContext)
    let navigate = useNavigate()
    let [activeAi,setActiveAi] = useState(false)
    let openingSound = new Audio(open)

    function speak(message){
        let utterence = new SpeechSynthesisUtterance(message)
        window.speechSynthesis.speak(utterence)
    }

    const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    const recognition = new speechRecognition()

    if(!recognition){
        console.log('not supported')
    }

    // …inside Ai.jsx
recognition.onresult = (e) => {
  // ✅ results  (plural)
  const transcript = e.results[0][0].transcript.trim().toLowerCase();

  /*  your command checks, unchanged  */
  if (transcript.includes("search") && transcript.includes("open") && !showSearch) {
    speak("opening search");
    setShowSearch(true);
    navigate("/collection");
  } else if (transcript.includes("search") && transcript.includes("close") && showSearch) {
    speak("closing search");
    setShowSearch(false);
  } else if (
    transcript.includes("collection") || transcript.includes("collections") ||
    transcript.includes("product")   || transcript.includes("products")
  ) {
    speak("opening collection page");
    navigate("/collection");
  } else if (transcript.includes("about") || transcript.includes("aboutpage")) {
    speak("opening about page");
    navigate("/about");
    setShowSearch(false);
  } else if (transcript.includes("home") || transcript.includes("homepage")) {
    speak("opening home page");
    navigate("/");
    setShowSearch(false);
  } else if (
    transcript.includes("cart") || transcript.includes("kaat") || transcript.includes("caat")
  ) {
    speak("opening cart page");
    navigate("/cart");
    setShowSearch(false);
  } else if (transcript.includes("contact")) {
    speak("opening contact page");
    navigate("/contact");
    setShowSearch(false);
  } else if (
    transcript.includes("order")      || transcript.includes("my order") ||
    transcript.includes("orders")     || transcript.includes("my orders")
  ) {
    speak("opening order page");
    navigate("/order");
    setShowSearch(false);
  } else {
    toast.error("Try again");
  }
};

   recognition.onend = ()=>{
    setActiveAi(false)
   }
    
    return (
        <div className="fixed lg:bottom-[20px] md:bottom-[40px]
        bottom-[80px] left-[2%]" onClick={()=>{recognition.start();
            openingSound.play()
            setActiveAi(true)
        }}>

            <img src={abe} alt=""  className={`w-[20%] rounded-md cursor-pointer
                ${activeAi ? 'translate-x-[10%] translate-y-[10%] scale-125' :
                    'translate-x-[0] translate-y-[0] scale-100'
                } transition-transform`} style={{
                    filter: `${activeAi ? "drop-shadow(0px 0px 30px #00d2fc)"
                        :"drop-shadow(0px 0px 20px black)"
                    }`
                }}/>

        </div>
    )
}


export default Ai