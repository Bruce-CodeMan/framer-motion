/*
 * @Date: 2023-07-10 13:40:44
 * @Author: Bruce Hsu
 * @Description: 
 */

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "@/components/Navbar"
import Home from "@/components/Home";
import Base from "@/components/Base";
import Content from "@/components/Content";

const App = () => {

  const [ pizza, setPizza ] = useState({ base: "", toppings: [] })

  const addBase = (base: string) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping: never) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping]
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping)
    }
    setPizza({ ...pizza, toppings: newToppings })
  }

  return (
    <div
      className="app bg-gradient-to-b from-purple-300 to-purple-600 min-h-full" 
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/base" element={<Base />}/>
        <Route path="/content" element={<Content />} />
      </Routes>
    </div>
  )
}

export default App
