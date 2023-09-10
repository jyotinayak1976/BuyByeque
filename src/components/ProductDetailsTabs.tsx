// RestaurantDetailsTabs.js
import React from 'react';
import ProductTab from './ProductTab';
import BuyByeQBasicPOS from './BuyByeQBasicPOS';
import BuyByeQSpecialPOS from './BuyByeQSpecialPOS';

const ProductDetailsTabs = ({ setActiveTab, activeTab }) => {
  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('BuyByeQ-Basic-POS')} className={activeTab === 'BuyByeQ-Basic-POS' ? 'active' : ''}>BuyByeQ-Basic-POS</button>
        <button onClick={() => setActiveTab('BuyByeQ-Special-POS')} className={activeTab === 'BuyByeQ-Special-POS' ? 'active' : ''}>BuyByeQ-Special-POS</button>
        <button onClick={() => setActiveTab('BuyByeQ-Lite')} className={activeTab === 'BuyByeQ-Lite' ? 'active' : ''}>BuyByeQ-Lite</button>
        <button onClick={() => setActiveTab('BuyByeQ-Extralite')} className={activeTab === 'BuyByeQ-Extralite' ? 'active' : ''}>BuyByeQ-Extralite</button>
      </div>
      <div className="tab-content">
        {activeTab === 'BuyByeQ-Basic-POS' && <BuyByeQBasicPOS title="BuyByeQ-Basic-POS" />}
        {activeTab === 'BuyByeQ-Special-POS' && <BuyByeQSpecialPOS title="BuyByeQ-Special-POS" />}
        {activeTab === 'BuyByeQ-Lite' && <ProductTab title="BuyByeQ-Lite" />}
        {activeTab === 'BuyByeQ-Extralite' && <ProductTab title="BuyByeQ-Extralite" />}
      </div>
    </div>
  );
};

export default ProductDetailsTabs;
