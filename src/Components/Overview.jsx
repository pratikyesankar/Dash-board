import React from "react"

const Statement = [
  {
    id: "New Payout",
    name: "New Payout",
    amount: "₹2312.23",
    href: "#",
  },
  {
    id: "Amount Pending",
    name: "Amount Pending",
    amount: "₹92,312.20",
    href: "#",
  },
  {
    id: "Amount Processed",
    name: "Amount Processed",
    amount: "₹23,92,312.19",
    href: "#",
  },
]

const Overview = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-grey-900 pt-10">Overview</h1>
      {/* overview */}
      <div className="flex space-x-8 mt-4 pt-10 pb-10">
        {Statement.map((statement) => (
          <div
            key={statement.id}
            className={`grid grid-cols-1 border border-gray-200 rounded-lg w-[360px] h-auto ${
              statement.id === "New Payout" ? "bg-blue-500" : "bg-white"
            } pt-5 pb-3`}
          >
            <div className="flex space-x-4 items-center">
              <div className="flex flex-col">
                <div className="text-sm text-gray-600 font-bold">
                  {statement.name}
                </div>
                <div className="text-gray-800 font-bold p-3">
                  {statement.amount}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Overview
