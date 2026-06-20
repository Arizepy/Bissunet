import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_page";
import SignInPage from "./pages/signup_page";
import LoginPage from "./pages/login_page";
import HomePage from "./pages/home_page";
import EcomercePage from "./pages/ecommerce";
import NewsPage from "./pages/news";

export default function App (){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="/ecommerce" element= {<EcomercePage/>}/>
            <Route path="/news" element= {<NewsPage/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}