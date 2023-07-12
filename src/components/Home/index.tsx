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
                className="text-[70px] mb-16 font-extrabold text-transparent bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
            >
                Welcome to Bruce Website
            </motion.h1>
            <Link to="/base">
                <motion.button 
                    className="text-white rounded-full border-2 border-slate-100 px-12 cursor-pointer text-[50px]"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10, duration: 1.5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >Click</motion.button>
            </Link>

            <Link to="/result">
                <motion.button 
                    className="text-white rounded-full border-2 border-slate-100 px-12 cursor-pointer text-[50px] mt-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10, duration: 1.5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >Result</motion.button>
            </Link>
        </div>
    )
}

export default Home;