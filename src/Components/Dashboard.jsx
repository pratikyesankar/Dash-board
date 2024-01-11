import React from "react"
import Overview from "./Overview"
import Transactions from "./Transactions"

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-y-8 bg-[#d3d3d3] px-8 py-12  pb-15">
      <Overview />
      <Transactions />
    </div>
  )
}

export default Dashboard
