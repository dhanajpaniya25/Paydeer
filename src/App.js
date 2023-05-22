import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import SideBar from './Components/Sidebar/SideBar'
import Profile from './Components/Pages/Profile/Profile'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="sidebar_content col-3">
        <SideBar />
      </div>
      <div className="main_content">
        <Profile />
      </div>

    </>
  )
}

export default App
