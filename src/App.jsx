import React, { useState } from 'react'
import './scss/main.scss'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './pages/home/Home'
import Dishes from './pages/dishes/Dishes'
import Shopp from './pages/shopp/Shopp'
// import SignIn from './pages/signin/SignIn'
// import SignUp from './pages/signup/SignUp'

const App = () => {
  


  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='dishes' element={<Dishes  />} />
          <Route path='shop' element={<Shopp  />} />
          {/* <Route path='signin' element={<SignIn users={users} setUsers={setUsers} />} /> */}
          {/* <Route path='/' element={<SignUp />} /> */}


        </Routes>

      </Router>
    </div>
  )
}

export default App