import React, { useState, useEffect } from 'react';

const Pet = ({ pet }) => {
  const [animation, setAnimation] = useState('idle');
  const [mood, setMood] = useState('happy');

  useEffect(() => {
    // Determine mood based on pet stats
    if (pet.health < 30 || pet.hunger < 30) {
      setMood('sad');
    } else if (pet.happiness > 70 && pet.energy > 70) {
      setMood('happy');
    } else {
      setMood('neutral');
    }
  }, [pet]);

  const getPetEmoji = () => {
    const baseEmoji = pet.type === 'dog' ? '🐕' : pet.type === 'cat' ? '🐱' : pet.type === 'bird' ? '🐦' : '🐰';
    
    if (mood === 'sad') {
      return pet.type === 'dog' ? '🐕‍🦺' : pet.type === 'cat' ? '😿' : pet.type === 'bird' ? '🐦‍⬛' : '😢';
    } else if (mood === 'happy') {
      return pet.type === 'dog' ? '🐕‍🦺' : pet.type === 'cat' ? '😸' : pet.type === 'bird' ? '🐦' : '😊';
    }
    return baseEmoji;
  };

  const getPetMessage = () => {
    if (pet.health < 30) return "I don't feel well... 😷";
    if (pet.hunger < 30) return "I'm so hungry! 🍽️";
    if (pet.happiness < 30) return "I'm bored, play with me! 🎾";
    if (pet.energy < 30) return "I'm tired... 😴";
    if (pet.happiness > 80 && pet.health > 80) return "I love you! ❤️";
    return "Hello! 👋";
  };

  return (
    <div className="pet-display">
      <div className={`pet-avatar ${animation} ${mood}`}>
        <span className="pet-emoji-large">{getPetEmoji()}</span>
      </div>
      <div className="pet-info">
        <h2 className="pet-name">{pet.name}</h2>
        <p className="pet-level">Level {pet.level} • {pet.experience} XP</p>
        <p className="pet-message">{getPetMessage()}</p>
      </div>
    </div>
  );
};

export default Pet;