import React from "react";
import lgbg from '../../assets/bg.png';
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPageHero() {
    return(
        <div  style={{backgroundImage: `url(${lgbg}) `}} className="flex min-h-screen w-screen bg-cover bg-no-repeat">
            {/**Defining th navbar of the page */}

            <nav className="fixed flex justify-between items-center top-0  p-7 h-14 w-screen">
                
                    <p className="text-green-600 font-sans font-inter font-bold text-[35px] tracking-wide "><a href="/">Bissunet</a></p>
                

                 <div className=" flex gap-8 items-center  text-gray-300   text-sm font-inter transition:all font-bold lg:justify-center ">
                    <a className="text hover:text-white cursor-pointer">About</a>
                    <a className="hover:text-white cursor-pointer">Contact</a>
                    <a className="hover:text-white cursor-pointer">FAQ</a>
                    <button className="flex items-center gap-2 hover:text-white cursor-pointer">ENG <ChevronDown size={16} color="green"/></button>
                </div>

                <div className=" items-center gap-4 duration-1000 hidden lg:block ">
                 <Link to="/login"><button className="text-sm font-bold border-gray-500 hover:border-black text-white hover:text-black hover:bg-green-700 border rounded-full  transition-all pl-4 p-2 pr-4  mr-4">Login</button></Link>
                  <Link to="/signin"> <button className="pl-4 p-2 pr-4 text-sm font-bold text-black bg-green-700 rounded-full hover:bg-black/40 hover:text-white shadow-[0_0_15px_rgba(27,209,93,0.3)] hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] transition-all">Sign Up</button></Link>  
                </div>
            </nav>

            {/**Main body */}
            <div className=" items-center justify-items-center  absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-[650px]  mt-20">
                <h1 className="text-white font-bold text-[75px] text-wrap text-center">Your all in one bussiness app</h1>
                <p className="text-gray-400 text-center text-xl my-4">Unlock your bissuness potential with us, trade,invest and monitor your income</p>
                <Link to='/signin'>
                <button className=" mt-8 relative left-1/2 -translate-x-1/2 hover:bg-black/20 bg-green-700 px-6 py-3 text-sm font-medium text-white transition-all duration-200 rounded-full
                hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:text-white sm:px-8 sm:py-3.5 sm:text-base ">Sign Up</button>
                </Link>
            </div>

            {/**Float cards */}
            <div className="hidden lg:block">
            <div className=" absolute  border rounded-3xl border-green-950 pr-4 pl-4 p-2 top-[34%] left-[20%] ">
                <p className="text-green-800 ">
                    <span >&#x25B2;</span> 1.12845
                </p>
            </div>


            <div className="absolute  border rounded-3xl border-red-500 pr-4 pl-4 p-2 top-[80%] left-[45%]" >
                <p className="text-red-800">
                    <span >&#x25BC;</span> 1.11987
                </p>
            </div>

            <div className=" w-64 bg-[#0A100A]/40 border absolute border-[#142414] rounded-2xl p-5 backdrop-blur-sm 
            flex justify-between items-start top-[60%] left-[18%] ">
                <div>
                    <p className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider"> Trading Pairs</p>
                    <p className="text-sm font-bold text-white leading-snug mt-1">Unparallel Markets</p>
                </div>
                <div className="flex flex-col items-end">
                    <div className="w-6 h-6 bg-[#5BA850] rounded-full flex items-center justify-center mb-6 ">
                        <ArrowUpRight size={16} color="white"/>
                    </div>
                        <p className="text-[#5BA850] text-xl font-bold font-mono"> 46% </p>
                    </div>
            </div>

            <div className=" absolute w-64 bg-64 bg-[#0A100A]/40 border border-[#142414] rounded-2xl p-5 backdrop-blur-sm
                flex justify-between items-start right-[20%] bottom-[10%]" >
                    <div className="flex-1">
                        <p className="text-gray-500 text-[10px] font-semibold tracking-wider">Trading Pairs</p>
                        <p  className="text-3xl font-bold text-[#16690b] font-mono tracking-tight mt-1"> 96% </p>
                        <div className="w-full bg-[#182618]/80 h-1.5 rounded-full overflow-hidden mt-4 ">
                            <div className="bg-green-700 h-full rounded-full w-96%"></div>
                        </div>
                    </div>
                    <div className="w-6 h-6 bg-[#5BA850] rounded-full flex items-center justify-center
                        text-xs font-bold mb-6">
                            <ArrowUpRight size={16} color="white"/>
                        </div>
                </div>
            </div>
            
        </div>
    );
}