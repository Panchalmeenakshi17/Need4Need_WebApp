import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from 'react-icons/fa';
import Footer2 from "../Footer/Footer2";
import Fade from 'react-reveal/Fade';
const About = () => {


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
  return (
    <>
      {/* <Header /> */}
      
      <motion.div
        className=" bg-[#fdfbf9] h-full w-full md:w-full md:h-full  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
      >
      
        <div  className=" text-left ">
        <div className="">
        <img
              src="https://images.unsplash.com/photo-1630414338326-8d0b045801bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
              className="md:opacity-50 md:blur-sm w-full h-full blur-sm  top-0 md:w-full md:h-[650px] bg-blend-overlay "
              alt="not found"
            />
        </div>
         
          <div className="md:w-full -translate-y-[180px] md:h-full md:-translate-y-[500px] w-full h-full text-center ">
            <h1 id="aboutTop" className="text-[#1c4727] md:mt-[80px] text-3xl font-italic md:text-6xl font-bold  flex justify-center items-center">
              Who we are ? what we do ?
            </h1>
            
            <p className=" md:p-0 p-2  font-bold font-SourceSansPro md:text-4xl md:mt-[30px] md:w-full ">
              Helping one person might not change the world, but it could change
              the world for one person.
            </p>
            
          </div>
          
          <div className="  md:p-[160px] ">
            <div className="  ">
            <Fade left distance="20%">
              <div className=" md:p-0 -mt-10 p-5">
              <div className=" md:-translate-y-[250px] text-center   ">
              <Fade right>
                  <h1 className=" text-4xl md:text-6xl font-SourceSansPro font-bold text-rose-500 ">
                      
                      Collection of Food
                    </h1>
                </Fade>
                  </div>
                
              <div className="md:hover:-translate-y-2 md:-mt-[200px] mt-10 md:hover:scale-100 transition ease-in-out ring-[#e99d5f] md:hover:bg-[#f3dcca]  shadow-black shadow-xl rounded-2xl  ring-4 md:w-[1000px] w-full h-full md:h-full  md:ml-[100px] ">
                <div className=" p-5 md:p-12">
                 
                  <div className="">
                    
                    <h1 className=" md:translate-y-[10px] md:p-1">
                    The collection of food in our project involves a modern, digitized approach to address the critical issue of food wastage. Leveraging a web application and mobile app, both powered by artificial intelligence technology, the process aims to efficiently connect two essential communities: food donators and NGOs. Individuals or entities with excess or leftover food can register on our platform, specifying the type and quantity of available food, using either the app or website. The AI-driven system then updates the location of the food wastage in real-time. Simultaneously, it automatically notifies nearby NGOs, streamlining the process of food collection. This innovative approach ensures a swift and effective response to food surplus, minimizing wastage and maximizing the utilization of resources for a sustainable and socially impactful solution.
                    </h1>
                  </div>
                </div></div>
              </div>
              <div
      className="relative mt-10 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        className={`rounded-xl md:shadow-xl hover:opacity-70 transition ease-in-out md:shadow-black w-full h-full mt-3 md:mt-20 top-0 md:w-full md:h-[650px] bg-blend-overlay ${isHovered && 'grayscale opacity-70'}`}
        alt="not found"
      />
      
     
    </div>
    </Fade>
    <Fade left distance="20%">

              <div className=" md:p-0 p-5">
              <div className=" md:mt-20 text-center   ">
              <Fade right>

                  <h1 className=" text-4xl md:text-6xl font-SourceSansPro font-bold text-rose-500 ">
                      {" "}
                      Distributing to needy one
                    </h1>
              </Fade>
                  </div>
              <div className=" md:hover:bg-[#17711762] mt-10 md:hover:-translate-y-2 md:hover:scale-100 transition ease-in-out 
              shadow-black shadow-xl  rounded-2xl ring-[#4fb168] ring-4 w-full h-full md:w-[1000px] md:h-[300px] md:mt-[100px] md:ml-[100px] ">
                <h1 className="p-5 md:p-12">
                 
                  <div className=" ">
                    
                    <h1 className="md:translate-y-[10px]  p-3">
                    To ensure the efficient distribution of collected food to the needy, Team Need4Need has devised a systematic approach. Once the surplus or wasted food is registered on our platform, the Artificial Intelligence technology kicks in to match the location with the nearest NGOs. The information about the food location is automatically sent to these NGOs, facilitating quick and effective coordination.

NGOs, equipped with this real-time data, can promptly organize the collection of the available food and distribute it to those in need within their local communities. This streamlined process not only minimizes food wastage but also ensures that the surplus food reaches the deserving recipients promptly. Through this digitalized and AI-driven approach, Team Need4Need aims to bridge the gap between food donors and NGOs, creating a seamless connection for the betterment of society.
                    </h1>
                  </div>
                </h1>
              </div></div>
              <div
      className="relative md:mt-0 mt-10 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
        className={`rounded-xl md:shadow-xl hover:opacity-70 transition ease-in-out md:shadow-black w-full h-full mt-3 md:mt-20 top-0 md:w-full md:h-[650px] bg-blend-overlay ${isHovered && '  grayscale  opacity-70'}`}
        alt="not found"
      />
      
     
    </div>
    </Fade>
<Fade bottom cascade distance="20%">
              <div className=" md:p-0 p-5">
              <div className="  md:mt-20 text-center   ">
              <Fade right>
                  <h1 className=" md:text-6xl text-4xl font-SourceSansPro font-bold text-rose-500 ">
                      {" "}
                      Fundraising for Free Meals to Needy Individuals
                    </h1>
                    </Fade>
                  </div>
              
              <div className="ring-[#e99d5f] md:hover:bg-[#f3dcca] mt-10 md:mt  md:hover:-translate-y-2 md:hover:scale-100 transition ease-in-out shadow-black shadow-xl  rounded-2xl ring-4 w-full h-full md:w-[1000px] md:h-full md:mt-[100px] md:ml-[100px] ">
                <h1 className=" p-5 md:p-12">
                  
                  <div className="">
                   
                    <h1 className="md:translate-y-[10px] md:p-2">
                    To fund free meals for those in need, Need4Need will launch online crowdfunding campaigns, encourage direct donations through our digital platforms, and seek corporate sponsorships aligned with our mission. We will also organize charity events and ensure transparent communication on the impact of each contribution. Our goal is to utilize every rupee raised to provide nourishing meals and combat food insecurity in a sustainable and compassionate manner.
                    </h1>
                  </div>
                </h1>
              </div>

             
            </div>
            </Fade>
          </div>
          
        </div>
        
        </div>
        <div className={` z-50 scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
</svg>


    </div>
      
        <div className="  font-scnditalic bg-[#f3dcca] text-4xl w-full p-9 md:text-left text-justify translate-y-[100px] md:p-24 ">
                <h1 className="">
        <Fade left distance="20%">
                "Let's savor every bite, cherish every flavor, and pledge to waste nothing. In our abundance, let's not forget the power we hold to nourish not just ourselves but also those in need. For in reducing food waste, we find the true recipe for compassion and sustainability."
              </Fade>
                </h1>
                <h1 className=" font-bold mt-8">
        <Fade left distance="20%">
                  ~ Need4Need
                  </Fade>
                </h1>

              </div>
              
{/* <Fade left distance="20%"> */}

              <div className=" mt-[150px] md:mt-[200px] md:p-10">
              <Fade left distance="20%">
              <div className=" font-scnd  text-6xl md:text-6xl w-full md:text-center text-left md:p-0 p-7 ">
                <h1 className="">
                Have a look Over our gallery
                </h1>
                
              </div>
              </Fade>

              <div class="grid grid-cols-3 mt-20 md:mt-20 gap-3">
              <Fade left>
  <div className="transition ease-in-out"> <img
        src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvb3J8ZW58MHx8MHx8fDI%3D"
        className={`rounded-xl md:shadow-xl hover:opacity-70  transition ease-in-out md:shadow-black w-full h-full top-0 md:w-full md:h-[550px] bg-blend-overlay ${isHovered && 'grayscale'}`}
        alt="not found"
      /></div></Fade>
      <Fade right>
  <div className="transition ease-in-out"><img
        src="https://images.unsplash.com/photo-1610064094685-2015f42d8586?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvb3J8ZW58MHx8MHx8fDI%3D"
        className={`rounded-xl md:shadow-xl hover:opacity-70 transition ease-in-out md:shadow-black w-full h-full top-0 md:w-full md:h-[550px] bg-blend-overlay ${isHovered && 'grayscale'}`}
        alt="not found"
      /></div></Fade>
      
  <div class="row-span-2 transition ease-in-out "><img
        src="https://images.unsplash.com/photo-1632923057155-dd35366509ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvb3J8ZW58MHx8MHx8fDI%3D"
        className={`rounded-xl md:shadow-xl hover:opacity-70 transition ease-in-out md:shadow-black w-full h-full top-0 md:w-full md:h-full bg-blend-overlay ${isHovered && 'grayscale'}`}
        alt="not found"
      /></div>
  <Fade left>

  <div class="row-span-2 transition ease-in-out"><img
        src="https://images.unsplash.com/photo-1628087730040-0b0c0955e1d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
        className={`rounded-xl md:shadow-xl hover:opacity-70 transition ease-in-out md:shadow-black w-full h-full top-0 md:w-full md:h-full bg-blend-overlay ${isHovered && 'grayscale'}`}
        alt="not found"
      /></div></Fade>
  <div className="transition ease-in-out"><img
        src="https://images.unsplash.com/photo-1530385463121-27bb8651ed16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvb3J8ZW58MHx8MHx8fDI%3D"
        className={`rounded-xl md:shadow-xl hover:opacity-70 transition ease-in-out md:shadow-black w-full h-full top-0 md:w-full md:h-full bg-blend-overlay ${isHovered && 'grayscale'}`}
        alt="not found"
      /></div>
  

  {/* <!-- ... --> */}
  <Fade right>
  <div class="col-span-2 transition ease-in-out "><img
        src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvb3J8ZW58MHx8MHx8fDI%3D"
        className={`rounded-xl md:shadow-xl hover:opacity-90 transition ease-in-out md:shadow-black w-full h-full top-0 md:w-full md:h-[550px] bg-blend-overlay ${isHovered && 'grayscale'}`}
        alt="not found"
      /></div></Fade>
  <Fade right>

  <div className="col-span-2 transition ease-in-out"><img
        src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa70by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
        className={`rounded-xl md:shadow-xl hover:opacity-90 transition ease-in-out md:shadow-black w-full h-full top-0 md:w-full md:h-[550px] bg-blend-overlay ${isHovered && 'grayscale'}`}
        alt="not found"
      /></div>
      </Fade>  
</div>
</div>

      </motion.div>
    {/* <Footer/> */}
    <Footer2/>
    
    </>
  );
};

export default About;
