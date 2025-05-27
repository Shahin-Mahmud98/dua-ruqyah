"use client";

import ContentArea from "./components/content-area/content-area";
import Dashboard from "./components/content-area/dashboard/dashboard";

// import Home from "./home/home";

// import Sidebar1 from "./components/side-bar";
import Sidebar from "./components/side-bar/side-bar";


// Assuming you're using next-themes

// import Navbar from "./components/nav-bar"; 

export default function Home() {
  return (
    <div className="flex bg-slate-100 dark-bg-neutral-900">
      {/* <Navbar /> */}
      {/* <Sidebar1/> */}
      <Sidebar/>
      
      <ContentArea/>
      
      <Dashboard/>
      {/* <Home /> */}
    </div>
  );
}




