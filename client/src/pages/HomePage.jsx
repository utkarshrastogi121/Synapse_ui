import React from 'react'
import setImg from '../assets/set.png'
import dImg from '../assets/d.png'
import { useNavigate, NavLink } from 'react-router-dom'
import { motion } from "framer-motion"

function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex items-center justify-center">

        <motion.div
          initial={{ scale: 8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.25, 1, 0.5, 1]
          }}
          className="flex items-center mb-55 ml-10"
        >
          <img src={setImg} alt="set" className="h-[500] object-contain " />

          <div className="relative h-[300px] w-[300px] flex items-center justify-center -ml-15 mt-5">
            <img src={dImg} alt="d" className="h-full object-contain" />

          </div>
        </motion.div>

        <div>
          <p className="text-white text-2xl font-monda text-center max-w-4xl leading-relaxed absolute left-115 bottom-63">
            Setu APIs seamlessly integrate <span className="font-semibold">NAMASTE </span> 
            and <span className="font-semibold">ICD-11 <br />TM2</span> with EMR systems, 
            uniting traditional knowledge <br /> with digital health.
          </p>
        </div>

        <div className="flex gap-6">
          <button onClick={() => navigate('/get-started')} className="px-6 py-3 bg-white text-green-900 rounded-full shadow-lg absolute left-145 bottom-40 cursor-pointer">
            Get Started
          </button>
          <button onClick={() => navigate('/api-docs')} className="px-6 py-3 border border-white text-white rounded-full absolute left-185 bottom-40 cursor-pointer">
            View API Docs
          </button>
        </div>

      </div>
  )
}

export default HomePage