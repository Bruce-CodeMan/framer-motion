import { motion } from "framer-motion";

const Content = () => {

    return (
        <div className="w-full h-full flex flex-col items-center">
            
            <div className="grid grid-cols-4 gap-4 mt-40">
                <motion.div 
                    className="w-80 h-64 rounded-xl bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >01</motion.div>
                <motion.div 
                    className="w-80 h-64 rounded-xl bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >02</motion.div>
                <motion.div 
                    className="w-80 h-64 rounded-xl bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >03</motion.div>
                <motion.div 
                    className="w-80 h-64 rounded-xl bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >04</motion.div>
                <motion.div 
                    className="w-80 h-64 rounded-xl bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >05</motion.div>
            </div>

            
        </div>
    )
}

export default Content;