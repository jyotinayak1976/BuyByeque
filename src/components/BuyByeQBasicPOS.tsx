// BuyByeQBasicPOS.js
import React, { useState } from 'react';

const BuyByeQBasicPOS = () => {
  const [tableDetails, setTableDetails] = useState('');
  const [menuFile, setMenuFile] = useState(null);

  const handleTableDetailsChange = (e) => {
    setTableDetails(e.target.value);
  };

  const handleMenuFileChange = (e) => {
    const file = e.target.files[0];
    // Handle the uploaded menu file (e.g., store it or perform further actions)
    setMenuFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
  };

  return (
    <div>
      <h3>BuyByeQ-Basic-POS</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tableDetails">Table Details</label>
          <input
            type="text"
            id="tableDetails"
            value={tableDetails}
            onChange={handleTableDetailsChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="menuFile">Upload Menu (Excel)</label>
          <input
            type="file"
            id="menuFile"
            accept=".xlsx, .xls"
            onChange={handleMenuFileChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BuyByeQBasicPOS;
