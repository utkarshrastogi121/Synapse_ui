import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HomePage from './pages/HomePage'
import Solution from './pages/Solution'
import Features from './pages/Features'
import Works from './pages/Works'
import Contact from './pages/Contact'
import GetStarted from './pages/GetStarted'
import ApiDocs from './pages/ApiDocs'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AllTopics from './components/AllTopics'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/our-solution' element={<Solution/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/how-it-works' element={<Works/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/all-topic' element={<AllTopics/>} />
        <Route path='/get-started' element={<GetStarted/>} />
        <Route path='/api-docs' element={<ApiDocs/>} />
      </Routes>
    </div>
  )
}

export default App
