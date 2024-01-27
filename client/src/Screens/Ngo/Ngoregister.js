import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ngoRegister } from "../../actions/ngoActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";

const Ngoregister = () => {

  
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



  const [organizationName, setOrganizationName] = useState("");
  const [organizationEmail, setOrganizationEmail] = useState("");
  const [organizationPhone1, setOrganizationPhone1] = useState("");
  const [organizationPhone2, setOrganizationPhone2] = useState("");
  const [organizationCountry, setOrganizationCountry] = useState("");
  const [organizationState, setOrganizationState] = useState("");
  const [organizationCity, setOrganizationCity] = useState("");
  const [organizationAddress, setOrganizationAddress] = useState("");
  const [organizationComment, setOrganizationComment] = useState("");
  const [organizationPostcode, setOrganizationPostcode] = useState("");

  const dispatch = useDispatch();

  const submitNgoData = async (e) => {
    e.preventDefault();
    if (
      organizationName === "" ||
      organizationEmail === "" ||
      organizationPhone1 === "" ||
      organizationPhone2 === "" ||
      organizationCountry === "" ||
      organizationState === "" ||
      organizationCity === "" ||
      organizationAddress === "" ||
      organizationPostcode === ""
    ) {
      toast.warn("Please fill all the fields!!", {
        position: "top-center",
      });
    } else {
      const ngoData = {
        organizationName,
        organizationEmail,
        organizationPhone1,
        organizationPhone2,
        organizationCountry,
        organizationState,
        organizationCity,
        organizationAddress,
        organizationComment,
        organizationPostcode,
      };
      // dispatch(ngoRegister(ngoData));

      setOrganizationName("");
      setOrganizationEmail("");
      setOrganizationPhone1("");
      setOrganizationPhone2("");
      setOrganizationCountry("");
      setOrganizationState("");
      setOrganizationCity("");
      setOrganizationAddress("");
      setOrganizationComment("");
      setOrganizationPostcode("");
      toast.success("We will contact you soon! You can now move to Homepage", {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <motion.div
        className="bg-gradient-to-tr relative md:h-full h-[1600px] from-[#4b4886] via-[#100e35] to-[#545197]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 6 }}
        exit={{ opacity: 0 }}
      >
     

        <div className=" font-scnd bg-[#030103] w-full h-full shadow-2xl ">
          <div className=" ">
         
            <img
              src="https://images.unsplash.com/photo-1672009190560-12e7bade8d09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" w-full md:h-[670px] "
              alt="not found"
            />
          </div>

          <div className="p-2 md:translate-x-[200px]  md:w-[500px] ">
            <div className=" ">
              <div className="relative border-2 border-violet-600 w-full rounded-3xl md:p-10 p-4 md:-mt-[700px] md:text-9xl md:h-[350px] md:translate-y-[150px] -translate-y-[200px] md:-translate-x-[100px] md:w-[700px] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full filter backdrop-blur-md md:backdrop-blur-md bg-[rgba(102,90,144,0.24)]"></div>
                <h2 className="relative z-10 text-[#d0cadc] text-4xl mb-1 md:p-0 px-6 text-left translate-x-[0px] font-semibold md:text-8xl font-SourceSansPro title-font">
                  <Fade bottom distance="20%">
                    Get Connected
                  </Fade>
                </h2>
                <p className="relative z-10 leading-relaxed md:text-3xl md:mb-5 md:w-[600px] md:mt-10 w-full p-6 md:p-0 text-[#81bedd]">
                  <Fade bottom distance="20%">
                    Please share all your necessary details so that your Food
                    pickup details can be shared on your Emails.
                  </Fade>
                </p>
              </div>
            </div>
            <h1 className="md:translate-y-[550px] md:mt-0 -mt-[100px] text-white md:text-7xl md:w-[1100px]  text-4xl text-center w-full ">
              <Fade bottom distance="20%">
                Fill the following Information
              </Fade>
            </h1>
            <div className="   md:w-[1000px] md:translate-x-[40px] mt-20 md:mt-[650px] w-full h-full ">
              <div className=" bg-green600  md:">
                <div className="  md:w-[1000px] rounded-3xl md:translate-x-[10px] md:rounded-2xl bg-[#a48dd36b] shadow-[#393939] shadow-2xl  rounded-lgdark:border  dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form className="   space-y-4 md:space-y-6">
                      <Fade bottom distance="20%">
                        <div>
                          <label className="block md:mb-2 font-SourceSansPro  font-bold  text-md text-[#ffffff]     ">
                            Organisation Name
                            <span className=" text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={organizationName}
                            onChange={(e) =>
                              setOrganizationName(e.target.value)
                            }
                            className=" border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black] "
                            placeholder="Name"
                          />
                        </div>
                      </Fade>
                      <Fade bottom distance="20%">
                        <div>
                          <label className="block mb-2 font-SourceSansPro font-bold  text-md text-[#ffffff]    ">
                            Organisation Email
                            <span className=" text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            value={organizationEmail}
                            onChange={(e) =>
                              setOrganizationEmail(e.target.value)
                            }
                            className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                            placeholder="abc@gmail.com"
                          />
                        </div>
                      </Fade>
                      <Fade bottom distance="20%">
                        <div className=" md:flex gap-[10px]">
                          <label className=" font-SourceSansPro  block mb-2 font-bold  text-md text-[#ffffff]   ">
                            Organisation Phone
                            <span className=" text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            value={organizationPhone1}
                            onChange={(e) =>
                              setOrganizationPhone1(e.target.value)
                            }
                            className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                            placeholder="9999XXXXXX"
                          />
                          <label className=" font-SourceSansPro  block mb-2 font-bold  text-md text-[#ffffff]   ">
                            Organisation Alternate Phone
                            <span className=" text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            value={organizationPhone2}
                            onChange={(e) =>
                              setOrganizationPhone2(e.target.value)
                            }
                            className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                            placeholder="9999XXXXXX"
                          />
                        </div>
                      </Fade>
                      <Fade bottom distance="20%">
                        <div className=" md:flex gap-[10px] ">
                          <label className="block mb-2 font-SourceSansPro font-bold  text-md text-[#ffffff]  ">
                            Organisation Country
                            <span className=" text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={organizationCountry}
                            onChange={(e) =>
                              setOrganizationCountry(e.target.value)
                            }
                            className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                            placeholder="Country"
                          />
                          <label className="block mb-2 font-SourceSansPro font-bold  text-md text-[#ffffff]  ">
                            Organisation State
                            <span className=" text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={organizationState}
                            onChange={(e) =>
                              setOrganizationState(e.target.value)
                            }
                            className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                            placeholder="State"
                          />
                        </div>
                      </Fade>
                      <Fade bottom distance="20%">
                        <div className=" md:flex gap-[10px]">
                          <label className="block mb-2 font-SourceSansPro font-bold  text-md text-[#ffffff]  ">
                            Organisation City
                            <span className=" text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={organizationCity}
                            onChange={(e) =>
                              setOrganizationCity(e.target.value)
                            }
                            className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                            placeholder="City"
                          />
                          <label className="block mb-2 font-SourceSansPro font-bold  text-md text-[#ffffff]  ">
                            Organisation Pincode
                            <span className=" text-red-500">*</span>
                          </label>
                          <input
                            type="number"
                            value={organizationPostcode}
                            onChange={(e) =>
                              setOrganizationPostcode(e.target.value)
                            }
                            className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                            placeholder="Pincode"
                          />
                        </div>
                      </Fade>
                      <Fade bottom distance="20%">
                        <div>
                          <label className="block mb-2 font-SourceSansPro font-bold  text-md text-[#ffffff]  ">
                            Organisation Address
                            <span className=" text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={organizationAddress}
                            onChange={(e) =>
                              setOrganizationAddress(e.target.value)
                            }
                            className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                            placeholder="Address"
                          />
                        </div>
                      </Fade>
                      <Fade bottom distance="20%">
                        <div>
                          <label className=" font-SourceSansPro  block mb-2 font-bold  text-md text-[#ffffff]     ">
                            Anything you want to share (Optional)
                          </label>
                          <input
                            type="text"
                            value={organizationComment}
                            onChange={(e) =>
                              setOrganizationComment(e.target.value)
                            }
                            className="border border-gray-300 text-[#000000] font-bold font-SourceSansPro  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#ffffff71] dark:border-gray-600 placeholder:text-[black]"
                            placeholder="eg: We have transport facility for food pickup ....."
                          />
                        </div>
                      </Fade>
                      <button
                        onClick={submitNgoData}
                        type="button"
                        className="w-full shadow-inner shadow-green-800 text-white bg-[#30c04a91] hover:bg-green-500 transform ease-in-out duration-300 hover:font-bold hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-SourceSansPro "
                      >
                        Send
                      </button>
                    </form>
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
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default Ngoregister;
