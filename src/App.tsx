/*
 * @Date: 2023-07-10 13:40:44
 * @Author: Bruce Hsu
 * @Description: 
 */

import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/Navbar"
import Home from "@/components/Home";
import Base from "./components/Base";

const App = () => {

  return (
    <div
      className="app bg-gradient-to-b from-purple-300 to-purple-600 min-h-full" 
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/base" element={<Base/>}/>
      </Routes>
    </div>
  )
}

export default App
