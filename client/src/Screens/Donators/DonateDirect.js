import React, { useState, useEffect  } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { userDonate } from "../actions/donateActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonateDirect = () => {


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
  const [isHovered, setIsHovered] = useState(false);


  const [imageVisible, setImageVisible] = useState(false);

  const handleButtonClick = () => {
    setImageVisible(!imageVisible);
  };

  const handleCloseButtonClick = () => {
    setImageVisible(false);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhnNum] = useState("");
  const [message, setMessage] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Address, setAddress] = useState("");
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const submitDonate = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      Address === "" ||
      Pincode === "" ||
      message === ""
    ) {
      toast.warn("Please fill all the fields!!", {
        position: "top-center",
      });
    } else {
      const Donateuser = { name, email, phone, Address, Pincode, message };
      // dispatch(userDonate(Donateuser));

      setName("");
      setEmail("");
      setPhnNum("");
      setAddress("");
      setPincode("");
      setMessage("");
      toast.success("We will contact you soon!", {
        position: "top-center",
      });
     
      
    }
    // setTimeout(() => {
    //   navigate('/');
    // }, 2000);
  };
  return (
    <>
      <motion.div
        className="bg-[#73737d] h-[1200px] md:h-[1700px] relative  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 6 }}
        exit={{ opacity: 0 }}
      >
      <div className="relative">
        <div className="">
        <img
              src="https://images.unsplash.com/photo-1638547908152-a8406fc38d21?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" w-full md:h-[1700px] h-full "
              alt="not found"
            />
        </div>
        <div className=" absolute inset-1  ">
      <div   className="  ">
            <div className=" md:p-20 md:mt-0 mt-7 justify-center  items-center ">
              <div className=" md:p-20 backdrop-blur-md  rounded-3xl   ">
                <h2 className="md:p-0 p-3 font-scnditalic text-[#7d82bb] text-5xl  text-center   font-semibold md:text-8xl title-font">
                  Donate Food 
                </h2>
                <p className="leading-relaxed text-2xl md:text-3xl p-10 text-center text-[#4e5dbf]">
                  Give us all your necessary details and the nearest NGO will
                  come to pick your remaining food.
                </p>
              </div>
              <div className=" z-50 mt-20 flex justify-center" >
      <button className=" w-[450px] border-2 border-blue-700 hover:bg-blue-400 hover:shadow-2xl hover:shadow-blue-700 transition ease-in-out bg-[#1b1b846e] p-4 rounded-2xl font-scnd text-white text-2xl md:text-3xl " onClick={handleButtonClick}>
        Click me to help a Poor
      </button>

      {imageVisible && (
        <div className=" z-50 fixed backdrop-blur-lg top-0 left-0 w-full h-full flex items-center justify-center bg-[#000000ab] bg-opacity-">
          <div className="transition-all z-50 duration-500 ease-in-out transform scale-100">
            <button
              onClick={handleCloseButtonClick}
              className="absolute top-4 right-4 text-[red] text-xl cursor-pointer"
            >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="  w-16 h-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            </button>
            
            <div className="md:p-0 p-5 mt-5 flex justify-center">
              <img
                src="images/upi_1694167014482-removebg-preview.png"
                className="shadow-2xl  shadow-[#21353c2a] bg-[#d2d0d0a9] rounded-3xl"
                alt="not found"
              />
            </div>
            <h1 className="p-10 mt- rounded-3xl md:text-4xl text-white">
              Scan for the minimum donation amount to maximize the impact on social causes
            </h1>
          </div>
        </div>
      )}
    </div>
              <div className="   w-full h-full md:p-20 p-5 md:mt-10 mt-20 ">
              <div className=" backdrop-blur-md rounded-2xl bg-[#d0b7e750] transition ease-in-out hover:-translate-y-6 hover:shadow-[#a5b0f1cb] shadow-2xl dark:border   dark:border-gray-700">
                <div className=" p-3 md:p-8">
                  <form className="space-y-4 p-2 md:p-6">
                    <div>
                      <label className="block mb-2 font-SourceSansPro  font-bold  text-md text-[#ffffff]     ">
                        Name<span className=" text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className=" border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black] "
                        placeholder="Name"
                        required=""
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-SourceSansPro font-bold  text-md text-[#ffffff]    ">
                        Email<span className=" text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                        placeholder="abc@gmail.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label className=" font-SourceSansPro  block mb-2 font-bold  text-md text-[#ffffff]   ">
                        Phone<span className=" text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhnNum(e.target.value)}
                        className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                        placeholder="9999XXXXXX"
                        required=""
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-SourceSansPro font-bold  text-md text-[#ffffff]  ">
                        Address with Pincode
                        <span className=" text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                        placeholder="Address"
                        required=""
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-SourceSansPro font-bold  text-md text-[#ffffff]  ">
                        Pincode
                        <span className=" text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        value={Pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                        placeholder="Pincode"
                        required=""
                      />
                    </div>
                    <div>
                      <label className=" font-SourceSansPro  block mb-2 font-bold  text-md text-[#ffffff]     ">
                        Please tell about the Food you want to donate
                        <span className=" text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                        placeholder="eg: Please take my remaining food from ....."
                        required=""
                      />
                    </div>

                    <button
                      onClick={submitDonate}
                      type="button"
                      className="w-full shadow-inner shadow-green-800 text-white bg-[#1eac57c3] hover:bg-green-500 transform ease-in-out duration-300 hover:font-bold hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-SourceSansPro "
                    >
                      Send
                    </button>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

     
        </div>
      </div>

      <div className={` z-50 scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
</svg>


    </div>
        
        
         
      


       
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default DonateDirect;
