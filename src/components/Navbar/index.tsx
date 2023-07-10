/*
 * @Date: 2023-07-10 14:18:18
 * @Author: Bruce Hsu
 * @Description: 
 */

import { BanknotesIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div className="flex w-full py-6 px-6 fixed">
            <BanknotesIcon className="h-16 w-16 text-white flex items-center justify-center"/>
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