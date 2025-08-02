import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Pet from './components/Pet';
import PetShop from './components/PetShop';
import PetStats from './components/PetStats';
import PetActions from './components/PetActions';
import Inventory from './components/Inventory';

const App = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [inventory, setInventory] = useState({
    food: 10,
    toys: 5,
    medicine: 3,
    treats: 8
  });
  const [coins, setCoins] = useState(100);

  // Pet care timer
  useEffect(() => {
    const interval = setInterval(() => {
      setPets(prevPets => 
        prevPets.map(pet => ({
          ...pet,
          hunger: Math.max(0, pet.hunger - 1),
          happiness: Math.max(0, pet.happiness - 0.5),
          energy: Math.max(0, pet.energy - 0.3),
          health: pet.hunger === 0 || pet.happiness === 0 ? Math.max(0, pet.health - 1) : pet.health
        }))
      );
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const adoptPet = (petType) => {
    const newPet = {
      id: Date.now(),
      type: petType,
      name: `${petType.charAt(0).toUpperCase() + petType.slice(1)}`,
      hunger: 100,
      happiness: 100,
      energy: 100,
      health: 100,
      level: 1,
      experience: 0,
      lastFed: Date.now(),
      lastPlayed: Date.now(),
      lastSlept: Date.now()
    };
    setPets(prev => [...prev, newPet]);
    setSelectedPet(newPet);
  };

  const feedPet = (petId) => {
    if (inventory.food > 0) {
      setPets(prev => prev.map(pet => 
        pet.id === petId 
          ? { ...pet, hunger: Math.min(100, pet.hunger + 30), health: Math.min(100, pet.health + 5) }
          : pet
      ));
      setInventory(prev => ({ ...prev, food: prev.food - 1 }));
      setCoins(prev => prev + 2);
    }
  };

  const playWithPet = (petId) => {
    if (inventory.toys > 0) {
      setPets(prev => prev.map(pet => 
        pet.id === petId 
          ? { 
              ...pet, 
              happiness: Math.min(100, pet.happiness + 25), 
              energy: Math.max(0, pet.energy - 10),
              experience: pet.experience + 5
            }
          : pet
      ));
      setInventory(prev => ({ ...prev, toys: prev.toys - 1 }));
      setCoins(prev => prev + 3);
    }
  };

  const healPet = (petId) => {
    if (inventory.medicine > 0) {
      setPets(prev => prev.map(pet => 
        pet.id === petId 
          ? { ...pet, health: Math.min(100, pet.health + 40) }
          : pet
      ));
      setInventory(prev => ({ ...prev, medicine: prev.medicine - 1 }));
    }
  };

  const giveTreat = (petId) => {
    if (inventory.treats > 0) {
      setPets(prev => prev.map(pet => 
        pet.id === petId 
          ? { 
              ...pet, 
              happiness: Math.min(100, pet.happiness + 15), 
              hunger: Math.min(100, pet.hunger + 10),
              experience: pet.experience + 3
            }
          : pet
      ));
      setInventory(prev => ({ ...prev, treats: prev.treats - 1 }));
      setCoins(prev => prev + 1);
    }
  };

  const buyItem = (item, cost) => {
    if (coins >= cost) {
      setInventory(prev => ({ ...prev, [item]: prev[item] + 1 }));
      setCoins(prev => prev - cost);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <header>
            <div className="left">
              <h1 className="title">🐾 Digital Pets</h1>
              <p className="subtitle">Adopt, care for, and love your virtual companions!</p>
            </div>
            <div className="coins-display">
              <span className="coins">💰 {coins} coins</span>
            </div>
          </header>
        </div>

        <div className="main-content">
          {pets.length === 0 ? (
            <PetShop onAdopt={adoptPet} />
          ) : (
            <div className="pet-interface">
              <div className="pets-list">
                <h3>Your Pets</h3>
                {pets.map(pet => (
                  <div 
                    key={pet.id} 
                    className={`pet-card ${selectedPet?.id === pet.id ? 'selected' : ''}`}
                    onClick={() => setSelectedPet(pet)}
                  >
                    <span className="pet-emoji">
                      {pet.type === 'dog' ? '🐕' : pet.type === 'cat' ? '🐱' : pet.type === 'bird' ? '🐦' : '🐰'}
                    </span>
                    <span className="pet-name">{pet.name}</span>
                    <div className="pet-status">
                      <div className="status-bar">
                        <span>❤️</span>
                        <div className="bar">
                          <div className="fill" style={{width: `${pet.health}%`}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedPet && (
                <div className="pet-details">
                  <Pet pet={selectedPet} />
                  <PetStats pet={selectedPet} />
                  <PetActions 
                    pet={selectedPet}
                    onFeed={() => feedPet(selectedPet.id)}
                    onPlay={() => playWithPet(selectedPet.id)}
                    onHeal={() => healPet(selectedPet.id)}
                    onTreat={() => giveTreat(selectedPet.id)}
                    inventory={inventory}
                  />
                </div>
              )}
            </div>
          )}

          <Inventory 
            inventory={inventory} 
            coins={coins}
            onBuyItem={buyItem}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
