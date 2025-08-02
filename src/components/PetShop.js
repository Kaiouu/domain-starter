import React from 'react';

const PetShop = ({ onAdopt }) => {
  const availablePets = [
    { type: 'dog', name: 'Dog', emoji: '🐕', description: 'Loyal and energetic companion' },
    { type: 'cat', name: 'Cat', emoji: '🐱', description: 'Independent and graceful friend' },
    { type: 'bird', name: 'Bird', emoji: '🐦', description: 'Colorful and cheerful pet' },
    { type: 'rabbit', name: 'Rabbit', emoji: '🐰', description: 'Gentle and adorable buddy' }
  ];

  return (
    <div className="pet-shop">
      <div className="shop-header">
        <h2>🐾 Pet Adoption Center</h2>
        <p>Choose your perfect companion to start your digital pet journey!</p>
      </div>
      
      <div className="pets-grid">
        {availablePets.map(pet => (
          <div key={pet.type} className="pet-option" onClick={() => onAdopt(pet.type)}>
            <div className="pet-option-emoji">{pet.emoji}</div>
            <h3>{pet.name}</h3>
            <p>{pet.description}</p>
            <button className="adopt-button">Adopt {pet.name}</button>
          </div>
        ))}
      </div>
      
      <div className="shop-info">
        <h3>How to care for your pet:</h3>
        <ul>
          <li>🍽️ Feed them regularly to keep them healthy</li>
          <li>🎾 Play with them to make them happy</li>
          <li>💊 Use medicine when they're sick</li>
          <li>🍪 Give treats for extra love and XP</li>
        </ul>
      </div>
    </div>
  );
};

export default PetShop;