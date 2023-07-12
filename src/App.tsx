/*
 * @Date: 2023-07-10 13:40:44
 * @Author: Bruce Hsu
 * @Description: 
 */

import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/Navbar"
import Home from "@/components/Home";
import Base from "@/components/Base";
import Content from "@/components/Content";
import Result from "@/components/Result";

const App = () => {
  return (
    <div
      className="app bg-gradient-to-b from-purple-300 to-purple-600 min-h-full" 
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/base" element={<Base />}/>
        <Route path="/content" element={<Content />} />
        <Route path="/result" element={<Result />}/>
      </Routes>
    </div>
  )
}

export default App
