import React from 'react';

const PetActions = ({ pet, onFeed, onPlay, onHeal, onTreat, inventory }) => {
  const getActionStatus = (action, requiredItem) => {
    const hasItem = inventory[requiredItem] > 0;
    const isDisabled = !hasItem;
    
    let message = '';
    if (!hasItem) {
      message = `No ${requiredItem} available`;
    }
    
    return { isDisabled, message };
  };

  const feedStatus = getActionStatus('feed', 'food');
  const playStatus = getActionStatus('play', 'toys');
  const healStatus = getActionStatus('heal', 'medicine');
  const treatStatus = getActionStatus('treat', 'treats');

  return (
    <div className="pet-actions">
      <h3>Actions</h3>
      
      <div className="actions-grid">
        <button 
          className={`action-button feed ${feedStatus.isDisabled ? 'disabled' : ''}`}
          onClick={onFeed}
          disabled={feedStatus.isDisabled}
          title={feedStatus.message}
        >
          <span className="action-emoji">🍽️</span>
          <span className="action-text">Feed</span>
          <span className="action-count">({inventory.food})</span>
        </button>

        <button 
          className={`action-button play ${playStatus.isDisabled ? 'disabled' : ''}`}
          onClick={onPlay}
          disabled={playStatus.isDisabled}
          title={playStatus.message}
        >
          <span className="action-emoji">🎾</span>
          <span className="action-text">Play</span>
          <span className="action-count">({inventory.toys})</span>
        </button>

        <button 
          className={`action-button heal ${healStatus.isDisabled ? 'disabled' : ''}`}
          onClick={onHeal}
          disabled={healStatus.isDisabled}
          title={healStatus.message}
        >
          <span className="action-emoji">💊</span>
          <span className="action-text">Heal</span>
          <span className="action-count">({inventory.medicine})</span>
        </button>

        <button 
          className={`action-button treat ${treatStatus.isDisabled ? 'disabled' : ''}`}
          onClick={onTreat}
          disabled={treatStatus.isDisabled}
          title={treatStatus.message}
        >
          <span className="action-emoji">🍪</span>
          <span className="action-text">Treat</span>
          <span className="action-count">({inventory.treats})</span>
        </button>
      </div>

      <div className="action-tips">
        <h4>Action Effects:</h4>
        <ul>
          <li>🍽️ Feed: +30 Hunger, +5 Health, +2 Coins</li>
          <li>🎾 Play: +25 Happiness, -10 Energy, +5 XP, +3 Coins</li>
          <li>💊 Heal: +40 Health</li>
          <li>🍪 Treat: +15 Happiness, +10 Hunger, +3 XP, +1 Coin</li>
        </ul>
      </div>
    </div>
  );
};

export default PetActions;