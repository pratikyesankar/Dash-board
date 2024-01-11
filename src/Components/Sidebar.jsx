import React from "react"

const Sidebar = () => {
  const menuItems = [
    "Home",
    "Orders",
    "Product",
    "Delivery",
    "Marketing",
    "Analytics",
    "Payouts",
    "Discounts",
    "Audience",
    "Appearance",
    "Plugins",
  ]

  return (
    <div className="bg-gray-800 text-white p-4 h-full flex flex-col justify-between">
      <div>
        {/* Logo with Dropdown Icon */}
        <div className="flex items-center mb-4 ml-4">
          <div className="bg-white w-8 h-8 mr-2 flex items-center justify-center">
            <span className="text-black">Nish</span>
          </div>
          <span className="text-lg font-bold flex items-center">
            Nishyan
            <svg
              className="h-4 w-4 ml-1 fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </span>
        </div>

        {/* Visit Store */}
        <div className="mt-2 ml-4">
          <span className="text-sm underline">Visit Store</span>
        </div>

        {/* Menu Items */}
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center mb-4 ml-4">
              {/* You can add an icon here if needed */}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Available Credits */}
      <div className="ml-4">
        <hr className="my-4 border-white" />
        <p className="text-sm">Available Credits: $222.10</p>
      </div>
    </div>
  )
}

export default Sidebar
