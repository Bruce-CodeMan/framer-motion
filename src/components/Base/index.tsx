/*
 * @Date: 2023-07-10 14:44:24
 * @Author: Bruce Hsu
 * @Description: 
 */
import { motion } from "framer-motion"
import { RadioGroup } from "@headlessui/react"

const plans = [
    {
      name: 'Startup',
      ram: '12GB',
      cpus: '6 CPUs',
      disk: '160 GB SSD disk',
    },
    {
      name: 'Business',
      ram: '16GB',
      cpus: '8 CPUs',
      disk: '512 GB SSD disk',
    },
    {
      name: 'Enterprise',
      ram: '32GB',
      cpus: '12 CPUs',
      disk: '1024 GB SSD disk',
    },
  ]

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
                    hidden: { opacity: 0, y: -300 },
                    visible: { opacity: 1, y: -100 }
                }}
            >Step 1: Choose Your Base</motion.h3>
            <div className="w-2/6 mx-auto">
                <RadioGroup>
                    {plans.map(plan => (
                        <RadioGroup.Option
                            key={plan.name}
                            value={plan}
                            className={({ active, checked }) =>
                            `${
                                active
                                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                : ''
                            }
                            ${
                                checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                            }
                                relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none mt-3`
                            }
                        >
                            {({ checked }) => (
                                <>
                                    <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="text-sm">
                                        <RadioGroup.Label
                                            as="p"
                                            className={`font-medium  ${
                                            checked ? 'text-white' : 'text-gray-900'
                                            }`}
                                        >
                                            {plan.name}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                            as="span"
                                            className={`inline ${
                                            checked ? 'text-sky-100' : 'text-gray-500'
                                            }`}
                                        >
                                            <span>
                                            {plan.ram}/{plan.cpus}
                                            </span>{' '}
                                            <span aria-hidden="true">&middot;</span>{' '}
                                            <span>{plan.disk}</span>
                                        </RadioGroup.Description>
                                        </div>
                                    </div>
                                    {checked && (
                                        <div className="shrink-0 text-white">
                                        <CheckIcon className="h-6 w-6" />
                                        </div>
                                    )}
                                    </div>
                                </>
                                )}
                        </RadioGroup.Option>
                    ))}
                </RadioGroup>
            </div>
        </div>
    )
}


function CheckIcon(props: any) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  

export default Base;