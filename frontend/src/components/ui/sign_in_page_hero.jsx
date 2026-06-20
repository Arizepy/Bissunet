import React from "react";
import { LockKeyhole, Eye, EyeOff, User, Mail} from "lucide-react";
import lgbg from '../../assets/lgbg.png';
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import microsoft from '../../assets/microsoft.webp'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignInPageHero() {
     const [showPassword, setShowPassword] = useState(false);

            return(
                <div style={{backgroundImage: `url(${lgbg}) `}}  className=" flex absolute w-full h-screen insert-0 bg-cover bg-no-repeat z-0">
                    
                        <Link to="/">
                        <p className=" absolute px-5 text-green-950 font-sans font-inter font-bold text-[35px] tracking-wide ">Bissunet</p>
                        </Link>
                    
                    <div className="flex relative w-[80%] max-w-[800px] overflow-hidden rounded-2xl h-auto max-h-[700px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(0,0,0,0.4)] my-6">
                        <div className="border-green-950 border bg-green-950/85 w-1/3 h-full overflow-auto ">
                            <h1 className="text-white font-bold text-[30px] sm:text-4xl md:text-5xl lg:text-5xl pt-60 pl-10  ">Sign Up</h1>
                            
                        </div>
                        
                        <div className="bg-white/10 w-2/3 h-full justify-center flex flex-col-reverse px-6 py-6 overflow-hidden ">
                            <div className="mb-5 ml-5 mt-24">
                                <form method="POST" >
                                    {/**Email address */}
                                    <label htmlFor="email" className=" text-white font-bold font-mono text-2xl">Email</label>
                                    <div className="items-center flex gap-2 w-[100%] max-w-[500px] border border-white/20 rounded-lg bg-white/20 px-3 py-3 mb-[10px] ">
                                        <Mail size={30} color="white" />
                                        <input type="email" name="email" placeholder="Enter email" className="text-white border-none bg-transparent outline-none w-full"/>
                                    </div>


                                    <label htmlFor="username" className="text-white font-bold font-mono text-2xl">User name</label>
                                    <div className="items-center flex gap-2  w-[100%] max-w-[500px] border border-white/20 rounded-lg bg-white/20 px-3 py-3 mb-[20px]">
                                        <User size={30} color="white" />
                                        <input type="text" name="user_name" placeholder="Enter username" className="border-none bg-transparent outline-none w-full text-white"/>
                                    </div>


                                    <label htmlFor="password" className="text-white font-bold font-mono text-2xl">Password</label>
                                    <div className="items-center flex gap-2 border border-white/20 px-3 py-3 bg-white/20 rounded-lg  w-[100%] max-w-[500px] mb-4  ">
                                        <LockKeyhole size={30} color="white"/>
                                        <input type={showPassword? "text" : "password"} name="password1" placeholder= "Enter password" className="text-white outline-none bg-transparent w-full"  />
                                        <button type="button" onClick={()=> setShowPassword(!showPassword)}>{showPassword? <EyeOff size={20} color="white"/> : <Eye size={20} color="white"/>}</button>
                                    </div>

                                    <label htmlFor="password" className="text-white font-bold font-mono text-[20px] text-wrap">Confirm Password</label>
                                    <div className="items-center flex gap-2 border border-white/20 px-3 py-3 bg-white/20 rounded-lg  w-[100%] max-w-[500px] mb-[20px]  ">
                                        <LockKeyhole size={30} color="white"/>
                                        <input type={showPassword? "text" : "password"} name="password2" placeholder= "Enter password" className="text-white outline-none bg-transparent w-full"  />
                                        <button type="button" onClick={()=> setShowPassword(!showPassword)}>{showPassword? <EyeOff size={20} color="white"/> : <Eye size={20} color="white"/>}</button>
                                    </div>
                                </form>
                            
                                <button  type="submit" className="bg-green-600 text-white font-bold font-mono text-[20px] h-[50px]  w-[100%] max-w-[500px] rounded-lg mt-[10px] hover:bg-black/40 active:shadow-[0_0_15px rgba(0,0,0,0.4)]">
                                    Sign In
                                </button>
                            
                            <div className="flex px-2 items-center gap-3 my-4">
                                <div className="flex-1 border-t w-3 border-white/20"/>
                                <span className="text-gray-400 text-sm">or sign up with</span>
                                <div className="flex-1 px-2 border-t border-white/20"/>
                                
                            </div>
                            
                                <div className="justify-center gap-4 flex">
                                    <button className="h-16 shadow-[0_0_15px_rgba(0,0,0,0.4)] bg-black/40  hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:bg-black/20  transition-all rounded-2xl pt-2 pb-2 pl-3 pr-3 ">
                                        <img src={google} alt="" className="h-full p-2 "/>
                                    </button>
                                    <button className="h-16   shadow-[0_0_15px_rgba(0,0,0,0.4)] bg-black/40  hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:bg-black/20 transition-all rounded-2xl pt-2 pb-2 pl-3 pr-3" >
                                        <img src={apple} alt="" className="h-full"/>
                                    </button>
                                    <button className="h-16   shadow-[0_0_15px_rgba(0,0,0,0.4)] bg-black/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:bg-black/20  transition-all rounded-2xl pt-2 pb-2 pl-3 pr-3 " >
                                        <img src={microsoft} alt="" className="h-full  " />
                                    </button>
                                </div>
                                <p className="text-white text-[15px] mt-3 mb-4  text-center">Already have an account? <a href="/login" className="text-gray-400 hover:underline transition-all ">Click here</a> to login</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
}