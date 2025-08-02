import React from 'react';

const PetStats = ({ pet }) => {
  const getStatusColor = (value) => {
    if (value > 70) return '#4CAF50';
    if (value > 40) return '#FF9800';
    return '#F44336';
  };

  const getStatusEmoji = (value) => {
    if (value > 70) return '😊';
    if (value > 40) return '😐';
    return '😢';
  };

  return (
    <div className="pet-stats">
      <h3>Pet Stats</h3>
      
      <div className="stat-bar">
        <div className="stat-label">
          <span>❤️ Health</span>
          <span className="stat-value">{Math.round(pet.health)}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${pet.health}%`, 
              backgroundColor: getStatusColor(pet.health) 
            }}
          ></div>
        </div>
      </div>

      <div className="stat-bar">
        <div className="stat-label">
          <span>🍽️ Hunger</span>
          <span className="stat-value">{Math.round(pet.hunger)}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${pet.hunger}%`, 
              backgroundColor: getStatusColor(pet.hunger) 
            }}
          ></div>
        </div>
      </div>

      <div className="stat-bar">
        <div className="stat-label">
          <span>😊 Happiness</span>
          <span className="stat-value">{Math.round(pet.happiness)}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${pet.happiness}%`, 
              backgroundColor: getStatusColor(pet.happiness) 
            }}
          ></div>
        </div>
      </div>

      <div className="stat-bar">
        <div className="stat-label">
          <span>⚡ Energy</span>
          <span className="stat-value">{Math.round(pet.energy)}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${pet.energy}%`, 
              backgroundColor: getStatusColor(pet.energy) 
            }}
          ></div>
        </div>
      </div>

      <div className="experience-bar">
        <div className="stat-label">
          <span>⭐ Experience</span>
          <span className="stat-value">{pet.experience} XP</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill experience-fill" 
            style={{ width: `${(pet.experience % 100)}%` }}
          ></div>
        </div>
        <small>Next level: {Math.floor(pet.experience / 100) + 1}</small>
      </div>
    </div>
  );
};

export default PetStats;