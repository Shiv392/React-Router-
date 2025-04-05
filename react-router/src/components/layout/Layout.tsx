import React from "react";  
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

const Layout=()=>{
return(
    <>
    <Header />
    <Outlet></Outlet>
    <Footer />
    </>
)
}
export default Layout;