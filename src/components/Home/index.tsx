/*
 * @Date: 2023-07-10 14:45:11
 * @Author: Bruce Hsu
 * @Description: 
 */
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Home = () => {
    return (
        <div
            className="w-full h-full flex flex-col items-center justify-center"
        >
            <motion.h1 
                className="text-[70px] mb-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Welcome to Bruce Website
            </motion.h1>
            <Link to="/base">
                <button className="text-white rounded-full border-2 border-slate-100 px-12 cursor-pointer text-[50px]">Click</button>
            </Link>
        </div>
    )
}

export default Home;