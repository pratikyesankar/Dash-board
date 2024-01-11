import React from "react"
import Profile from "./Components/Profile"
import Dashboard from "./Components/Dashboard"
import Sidebar from "./Components/Sidebar"

const App = () => {
  return (
    <div className="flex items-center justify-center mx-auto min-h-screen lg:max-w-7xl border border-black-200 rounded mt-16">
      <div className="grid grid-cols-3 space-x-4 w-full">
        <div className="col-span-1">
          <Sidebar />
        </div>

        <div className="col-span-2">
          <Profile />
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default App
