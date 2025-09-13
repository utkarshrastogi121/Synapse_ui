import React, { useState, useEffect } from 'react'
import SetAnimation1 from '../components/SetAnimation1'
import SetAnimation2 from '../components/SetAnimation2'
import Layout from './Layout'

function Home() {
  const [step, setStep] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => setStep(2), 800)
    const timer2 = setTimeout(()=>setStep(3),4000)
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    }
  }, [])

  return (
    <div className="w-screen h-screen overflow-hidden">
      {step === 1 && <SetAnimation1 />}
      {step === 2 && <SetAnimation2 />}
      {step === 3 && <Layout/>}
    </div>
  )
}

export default Home
