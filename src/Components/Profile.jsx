// Profile.js

import React from "react"
import "./Profile.css" // Import your stylesheet

const Profile = () => {
  return (
    <div>
      <header className="header">
        <div className="left-content">
          <span>Payout</span>
        </div>

        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>

        <div className="right-content">
          <div className="icon">📬</div> {/* Replace with your message icon */}
          <div className="icon dropdown-icon"></div>{" "}
          {/* Replace with your dropdown icon */}
        </div>
      </header>

      {/* Your page content goes here */}
    </div>
  )
}

export default Profile
