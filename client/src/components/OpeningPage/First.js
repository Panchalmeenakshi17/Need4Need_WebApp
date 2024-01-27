import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
const First = () => {
  const scrollToTop = () => {
    const aboutTopElement = document.getElementById('aboutTop');
    if (aboutTopElement) {
      aboutTopElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <motion.div
        className="bg-[#000002] w-full md:h-full h-[840px] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 6 }}
        exit={{ opacity: 0 }}
      >
        <div className=" relative">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" md:h-[750px] w-full "
              alt="not found"
            />
          </div>

          <div className=" md:p-0 p-3 inset-1 mt-[150px] md:mt-[100px] absolute ">
            <div className="flex justify-center ">
             
            <div className="custom-border border-2 hover:border-[#5674b6] hover:shadow-2xl hover:shadow-[#49557e] font-scnd w-full md:w-[900px] md:rounded-3xl duration-300 md:p-20 p-7 border-gray-800  hover:brightness-110 filter backdrop-blur-md bg-[#00000050]" >
                <h1 className="md:text-5xl text-white text-3xl text-center">
                  <Fade>
                    Please tell us Who <h2>are you before moving forward :)</h2>
                  </Fade>
                </h1>

                <div className="  ">
                  <div className=" md:flex justify-center mt-20 gap-10  ">
                    <div className=" text-center  w-full    rounded-full   ">
                    <button onClick={scrollToTop}>
                      <NavLink
                        to="/Ngoregister"
                        className="relative border-2 border-[#a2a1a1]   transition ease-in-out bg-[#c0bccf4a]  shadow-black inline-flex items-center hover:shadow-xl hover:shadow-[#71b188cb] hover:border-green-500 hover:bg-[#aafeaa18]  hover:-translate-y-10  md:h-[175px]  justify-center   overflow-hidden font-bold text-white w-full rounded-2xl shadow-2xl group"
                      >
                        <h1 className="p-12   text-center md:text-3xl text-xl font-scnd relative">
                         Connection with NGO
                        </h1>
                      </NavLink>

                    </button>
                    </div>
                    <div className=" text-center md:mt-0 mt-16  w-full    rounded-full  ">
                    <button onClick={scrollToTop}>
                    <NavLink
                        to="/DonateDirect"
                        className="relative border-2 border-[#a2a1a1]   transition ease-in-out bg-[#c0bccf4a]  shadow-black inline-flex items-center hover:shadow-xl hover:shadow-[#71b188cb] hover:border-green-500 hover:bg-[#aafeaa18]  hover:-translate-y-10  md:h-[175px]  justify-center   overflow-hidden font-bold text-white w-full rounded-2xl shadow-2xl group"
                      >
                        <h1 className="p-12   text-center md:text-3xl text-xl font-scnd relative">
                        Donate without Registering
                        </h1>
                      </NavLink>
                      {/* <NavLink
                        to="/DonateDirect"
                        className="relative border-2 border-[#a2a1a1] hover:bg-[#94c0d919] transition ease-in-out bg-[#c0bccf4a]  shadow-black inline-flex items-center hover:shadow-xl hover:shadow-[#7396b3cb]  hover:-translate-y-10      justify-center  overflow-hidden font-bold text-white w-full rounded-2xl shadow-2xl group"
                      >
                        <h1 className="p-8  text-center md:text-3xl text-xl font-scnd relative">
                         Donate without Registering
                        </h1>
                      </NavLink> */}

                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" w-full md:w-[300px]  bg-yellow-500 md:p-0 p-8"> */}

        {/* </div> */}
      </motion.div>
    </>
  );
};

export default First;
