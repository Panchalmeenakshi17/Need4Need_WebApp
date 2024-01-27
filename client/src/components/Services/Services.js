import React,  { useEffect, useState }  from "react";
import { motion } from "framer-motion";
import Fade from 'react-reveal/Fade';
import ColSwipe from "./ColSwipe";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Header /> */}
      <motion.div
        className=" md:h-[3400px] h-[3300px] bg-gradient-to-tr relative from-[#a1a9b7] via-[#d7dde8] to-[#bcc1d0]  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
<div className=" relative bg-[#000000b5] ">
<img
              src="https://images.unsplash.com/photo-1572195577046-2f25894c06fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D"
              className="  md:shadow-xl  md:shadow-black md:opacity-40 md:blur-sm blur-sm  md:w-full md:h-[650px] bg-blend-overlay "
              alt="not found"
            />
            <div className= "  h absolute inset-0 flex justify-center items-center ">
            <Fade bottom distance="20%">
<div className=" w-full md:w-full   md:h-full ">
<p className="font-SourceSansPro md:p-10 p-5  text-2xl font-bold md:text-7xl text-[#3aff5b] md:ml-[140px] md:mt-[60px] md:w-[900px]">
              "Compassionate Food Service: Transforming Lives through
              Nourishment"
            </p>
            <p className=" font-bold md:p-10 p-5 text-white  font-SourceSansPro md:text-3xl md:ml-[140px] md:mt-[60px] md:w-[900px] ">
              "Service is the rent we pay for living in a compassionate world.
              By providing food to those in need, we create a ripple of kindness
              that can transform lives."
            </p>
</div>
</Fade>
            </div>
</div>

<div className={` z-50 scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
</svg>


    </div>
        <ColSwipe />
      </motion.div>
    </>
  );
};

export default Services;
