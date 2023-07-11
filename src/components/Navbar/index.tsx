/*
 * @Date: 2023-07-10 14:18:18
 * @Author: Bruce Hsu
 * @Description: 
 */

import { BanknotesIcon } from "@heroicons/react/24/solid"
import { motion, useTime, useTransform } from "framer-motion"
import { Link } from "react-router-dom"

const Navbar = () => {

    const time = useTime()
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false })

    return (
        <div className="flex w-full py-6 px-6 fixed">
            <Link to="/">
                <motion.div
                    style={{ rotate }}
                >
                    <BanknotesIcon 
                        className="h-16 w-16 text-white flex items-center justify-center"
                        
                    />
                </motion.div>
                
            </Link>
            
            <motion.h1 
                className="flex w-32 text-3xl items-center justify-center"
                initial={{ y: -250 }}
                animate={{ y: -10 }}
            >
                Bruce
            </motion.h1>
        </div>
    )
}

export default Navbar;