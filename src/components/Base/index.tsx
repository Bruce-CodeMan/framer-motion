/*
 * @Date: 2023-07-10 14:44:24
 * @Author: Bruce Hsu
 * @Description: 
 */
import { motion } from "framer-motion"
import { RadioGroup } from "@headlessui/react"

const Base = () => {

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <motion.h3 
                className="text-[60px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -300 },
                    visible: { opacity: 1, x: 0 }
                }}
            >Step 1: Choose Your Base</motion.h3>
            <RadioGroup>
                <RadioGroup.Option value="startup">
                    {({ checked }) => (
                        <span className={checked ? 'text-white text-[30px]': ''}>Startup</span>
                    )}
                </RadioGroup.Option>
                <RadioGroup.Option value="business">
                    {({ checked }) => (
                        <span className={checked ? 'text-white text-[30px]': ''}>business</span>
                    )}
                </RadioGroup.Option>
                <RadioGroup.Option value="enter">
                    {({ checked }) => (
                        <span className={checked ? 'text-white text-[30px]': ''}>enter</span>
                    )}
                </RadioGroup.Option>
            </RadioGroup>
        </div>
    )
}

export default Base;