import React from 'react';

const Inventory = ({ inventory, coins, onBuyItem }) => {
  const shopItems = [
    { name: 'food', emoji: '🍽️', cost: 5, description: 'Pet food' },
    { name: 'toys', emoji: '🎾', cost: 8, description: 'Pet toys' },
    { name: 'medicine', emoji: '💊', cost: 15, description: 'Pet medicine' },
    { name: 'treats', emoji: '🍪', cost: 3, description: 'Pet treats' }
  ];

  return (
    <div className="inventory">
      <h3>🛒 Shop & Inventory</h3>
      
      <div className="inventory-display">
        <h4>Your Items:</h4>
        <div className="inventory-items">
          {Object.entries(inventory).map(([item, count]) => (
            <div key={item} className="inventory-item">
              <span className="item-emoji">
                {item === 'food' ? '🍽️' : item === 'toys' ? '🎾' : item === 'medicine' ? '💊' : '🍪'}
              </span>
              <span className="item-name">{item}</span>
              <span className="item-count">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="shop-section">
        <h4>Buy Supplies:</h4>
        <div className="shop-items">
          {shopItems.map(item => (
            <div key={item.name} className="shop-item">
              <div className="item-info">
                <span className="item-emoji">{item.emoji}</span>
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-description">{item.description}</span>
                </div>
              </div>
              <button 
                className={`buy-button ${coins >= item.cost ? '' : 'disabled'}`}
                onClick={() => onBuyItem(item.name, item.cost)}
                disabled={coins < item.cost}
              >
                💰 {item.cost} coins
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="inventory-tips">
        <h4>💡 Tips:</h4>
        <ul>
          <li>Feed your pets regularly to keep them healthy</li>
          <li>Play with them to earn XP and coins</li>
          <li>Use medicine when their health is low</li>
          <li>Treats give a small boost to multiple stats</li>
        </ul>
      </div>
    </div>
  );
};

export default Inventory;