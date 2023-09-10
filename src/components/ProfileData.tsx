import React, { useState } from 'react'
import ProductDetailsTabs from './ProductDetailsTabs'

const ProfileData = () => {
    const [activeTab, setActiveTab] = useState('BuyByeQ-Basic-POS');
  return (
    <div className="profile-data">
      <div className="card account-details">
        <h2>Account Details</h2>
        <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" />
            </div>
            <div className="form-group">
              <label htmlFor="businessEntity">Business Entity Name</label>
              <input type="text" id="businessEntity" />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input type="text" id="mobileNumber" />
            </div>
            <div className="form-group">
              <label htmlFor="telephoneNumber">Telephone Number</label>
              <input type="text" id="telephoneNumber" />
            </div>
            <div className="form-group">
              <label htmlFor="userID">User ID/Email ID</label>
              <input type="text" id="userID" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" />
            </div>
          </form>

        {/* Add your account details content here */}
      </div>
      <div className="card product-details">
        <h2>Product requirement Details</h2>
        <h3>Feel free to leave this space blank if you're unsure or have questions. We're here to assist you.</h3>
        <div className="tab-container" >
            <ProductDetailsTabs setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        
        {/* Add your restaurant details content here */}
      </div>
    </div>
      
    
  )
}

export default ProfileData