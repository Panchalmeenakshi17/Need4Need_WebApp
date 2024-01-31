import React, { useEffect, useState } from "react";
import { getNgoById } from "../../actions/ngoActions";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";




const NgoProfile = () => {
    const [Ngoname, setNgoname] = useState("");
    const [Ngoemail, setNgoemail] = useState("");
    const [NgoAddress, setNgoAddress] = useState("");
    const [NgoState, setNgoState] = useState("");
    const [NgoCity, setNgoCity] = useState("");
    const [NgoPincode, setNgoPincode] = useState("");
    const [Ngopassword, setNgopassword] = useState("");
    const [NgoPNumber, setNgoPNumber] = useState("");
    const [NgoaltPNumber, setNgoaltPNumber] = useState("");

  const dispatch = useDispatch();

  const ngoState = useSelector((state) => state.loginNgoReducer);
  const { currentNgo } = ngoState;

  const getNgoByState = useSelector((state) => state.getNgoByIdReducer);
  const { ngo } = getNgoByState;

  useEffect(() => {
    if (ngo) {
      if (ngo._id === currentNgo._id) {

        setNgoname(ngo.Ngoname);
      setNgoemail(ngo.Ngoemail);
      setNgoAddress(ngo.NgoAddress);
      setNgoState(ngo.ngoState);
      setNgoCity(ngo.NgoCity);
      setNgoPincode(ngo.NgoPincode);
      setNgopassword(ngo.Ngopassword);
      setNgoPNumber(ngo.NgoPNumber);
      setNgoaltPNumber(ngo.NgoaltPNumber);
      } else {
        dispatch(getNgoById(currentNgo._id));
      }
    } else {
      dispatch(getNgoById(currentNgo._id));
    }
  }, [ngo, dispatch, currentNgo._id]);

  return (
    <>
      <div className=" relative">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1704732510471-5a99789c6123?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-full h-full "
            alt=""
          />
        </div>
        <div className=" absolute inset-1">
          <div className="">
            <motion.div
              className="bg-gradient-to-r from-[#000000] from-0% via-[#00000088] via-50% to-[#000000] to-90%"
              initial={{ opacity: 0 }}
              animate={{ opacity: 5 }}
              exit={{ opacity: 0 }}
            >
              <div className="font-scnd  w-full   justify-center   absolute mt-10 left-0">
                <div className="md:flex  md:flex-row flex-col md:space-y-0 space-y-10 md:justify-center">
                  <div className="md:w-1/2 w-full md:px-0 px-4  flex justify-center">
                    <div className="bg-[#00000077] shadow-[#78b774] shadow-md border-2 border-green-300 text-white flex flex-col gap-10 py-10 p-10 rounded-3xl  text-left text-2xl md:w-full w-full items-center">
                      <h1 className="md:text-5xl text-4xl text-green-400  ">
                        Your NGO Profile
                      </h1>
                      <img
                        src="https://cdn4.vectorstock.com/i/1000x1000/97/03/user-sign-white-icon-vector-15479703.jpg"
                        alt="Passenger Icon"
                        className="w-1/6 rounded-full  "
                      />
                      <div className="w-full md:px-10 pl-4">
                        <h1>Name: &nbsp;:&nbsp; {Ngoname}</h1>
                        <h1>NGO ID &nbsp;:&nbsp; {currentNgo._id}</h1>

                        <h1>Email &nbsp;:&nbsp; {Ngoemail}</h1>
                        <h1>Address &nbsp;:&nbsp; {NgoAddress}</h1>
                        <h1>State &nbsp;:&nbsp; {NgoState}</h1>
                        <h1>City &nbsp;:&nbsp; {NgoCity}</h1>
                        <h1>Pincode &nbsp;:&nbsp; {NgoPincode}</h1>
                        <h1>Password &nbsp;:&nbsp; {Ngopassword}</h1>
                        <h1>Phone Number &nbsp;:&nbsp; {NgoPNumber}</h1>
                        <h1>
                        Alternative Phone Number &nbsp;:&nbsp;{" "}
                          {NgoaltPNumber}
                        </h1>
                        
                        {/* <h1>Password &nbsp;:&nbsp; {currentNgo.riderPassword}</h1>   */}
                        <div className=" flex justify-center p-8 ">
                          <NavLink to="/EditNgo">
                            <button className="bg-blue-600 p-3 rounded-full text-lg text-white">
                              Edit Ngo Details
                            </button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NgoProfile;
