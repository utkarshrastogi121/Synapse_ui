import React from "react"
import { motion } from "framer-motion"

function SetAnimation2() {
    // const petals = [0, 45, 80, 280, 315]
    const petals = [30, 90, 330, 270]
    const lightPetals = [0, 60, 300] 

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[rgba(2,66,26,1)] relative">
      
        <motion.div
            className="absolute w-[400px] h-[450px] rounded-full
                    bg-gradient-to-b from-white to-[rgba(2,66,26,1)] blur-2xl opacity-20 translate-y-23"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2, ease: "easeInOut" }}
        />

        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 600"
            width="100%"
            height="100%"
            className="relative z-10"
        >

        {/* Stem */}
        <motion.path
          d="M150 600 L150 365"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Main Petals */}
        {petals.map((angle, i) => (
          <motion.path
            key={i}
            d="M 150 320
               C 110 300, 130 255, 150 220
               C 170 255, 190 300, 150 320"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            transform={`rotate(${angle} 150 320)`} 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Light (dashed) Petals */}
        {lightPetals.map((angle, i) => (
          <motion.path
            key={i}
            d="M 150 320
               C 110 300, 130 255, 150 220
               C 170 255, 190 300, 150 320"
            stroke="white"
            strokeWidth="0.3"
            fill="none"
            strokeDasharray="2 6"
            strokeLinecap="round"
            transform={`rotate(${angle} 150 320)`} 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Outer Circle */}
        <motion.circle
          cx="150"
          cy="353"
          r="5"
          stroke="white"
          strokeWidth="2"
          fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: petals.length * 0.3,
          }}
        />

        {/* Inner Circle */}
        <motion.circle
          cx="150"
          cy="338"
          r="4"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: petals.length * 0.3 + 0.2,
          }}
        />
      </motion.svg>
    </div>
  )
}

export default SetAnimation2
