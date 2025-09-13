import React from 'react'
import mandala from '../assets/mandala.png'
import Logo from '../assets/Logo.png'
import Login from '../assets/Login.png'
import SignUp from '../assets/SignUp.png'
import AllTopics from '../assets/AllTopics.png'
import setImg from '../assets/set.png'
import dImg from '../assets/d.png'
import House from '../assets/House.png'
import Solution from '../assets/Solution.png'
import Features from '../assets/Features.png'
import Works from '../assets/Works.png'
import Contact from '../assets/Contact.png'
import { useNavigate, NavLink, Outlet } from 'react-router-dom'
import { motion } from "framer-motion"

const headerItems = [
    {to: 'https://emr-mocha.vercel.app/', label: 'Login', Icon: Login},
    {to: '/sign-up', label: 'Sign up', Icon: SignUp},
    {to: '/all-topic', label: 'All Topics', Icon: AllTopics}
]

const items = [
    {to: '/', label: 'Home', Icon: House},
    {to: '/our-solution', label: 'Our Solution', Icon: Solution},
    {to: '/features', label: 'Features', Icon: Features},
    {to: '/how-it-works', label: 'How it works?', Icon: Works},
    {to: '/contact', label: 'Contact', Icon: Contact}
]

function Layout() {

  const navigate = useNavigate();

  return (
    <div className="bg-[rgba(2,66,26,1)] w-screen h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* pattern */ }
      <motion.img
        src={mandala}
        alt="Mandala Pattern"
        className="absolute right-[-300px] top-[30px] w-[1000px] h-[1000px] opacity-30 hover:opacity-50 transition-opacity duration-500 ease-in-out object-contain"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 100,
          ease: "linear",
        }}
      />

      {/* header */ }
      <header className='flex justify-center items-center'>
        <motion.div onClick={() => navigate('/')} whileHover={{ rotateY: 180 }} transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-[29px] left-[39px] w-[65.56px] h-[71.43px] cursor-pointer">
          <img src={Logo} alt="logo" className="w-full h-full brightness-140"/>
      </motion.div>
        <div className='flex gap-4 absolute top-[40px] left-[1075px] '>
          {headerItems.map(({to,label,Icon})=>(
            <NavLink className="w-[120px] h-[20px] flex gap-3 justify-center items-center " key={to} to={to} >
              <>
                <img src={Icon} alt={label} className='w-[20px] h-[18px] '  />
                <span className='text-white font-monda font-semibold text-xl' >{label}</span>
              </>
            </NavLink>
          ))}
        </div>
      </header>
      
      
      {/* dots */ }
      <div className="grid grid-cols-8 gap-6 absolute top-63 right-290">
        {Array.from({ length: 32 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-4 h-4 rounded-full bg-green-800 "
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.2, ease: "linear" }}
          />
        ))}
      </div>

        {/* items */}
      <div className="absolute top-[500px] left-[110px] flex flex-col gap-6">
        {items.map(({to,label,Icon}) => (
          <NavLink key={to} to={to}>
            {({ isActive }) => (
              <motion.div
                animate={isActive ? { x: 10, scale: 1.05 } : { x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`flex items-center gap-3 cursor-pointer ${
                  isActive ? "text-white font-bold" : "text-gray-300"
                }`}
              >
                <img src={Icon} alt={label} className="w-5 h-5" />
                <span>{label}</span>
              </motion.div>
            )}
          </NavLink>
        ))}
      </div>

      <Outlet/>

    </div>
  )
}

export default Layout
