import React from 'react';
import './RoastOMeter.css';

const RoastOMeter = ({ metrics }) => {
  const { spicyLevel, clownEnergy, dramaPotential, keyboardWarriorEnergy } = metrics;
  
  const totalRoastLevel = Math.round(
    (spicyLevel + clownEnergy + dramaPotential + keyboardWarriorEnergy) / 4
  );
  
  const getMeterColor = (level) => {
    if (level < 30) return 'low';
    if (level < 70) return 'medium';
    return 'high';
  };
  
  const getMeterLabel = (type, level) => {
    switch (type) {
      case 'spicy':
        return level < 30 ? 'Mild' : level < 70 ? 'Spicy' : 'Super Hot!';
      case 'clown':
        return level < 30 ? 'Serious' : level < 70 ? 'Silly' : 'Total Clown!';
      case 'drama':
        return level < 30 ? 'Chill' : level < 70 ? 'Dramatic' : 'Drama Queen!';
      case 'warrior':
        return level < 30 ? 'Peaceful' : level < 70 ? 'Feisty' : 'Keyboard Smasher!';
      default:
        return '';
    }
  };
  
  return (
    <div className="roast-o-meter">
      <h2>Roast-O-Meter</h2>
      
      <div className="total-level">
        <div className="level-circle">
          <span>{totalRoastLevel}%</span>
        </div>
        <p>Total Roast Level</p>
      </div>
      
      <div className="meters">
        <div className="meter">
          <div className="meter-label">
            <span>🌶️ Spicy Level</span>
            <span className={`meter-value ${getMeterColor(spicyLevel)}`}>
              {getMeterLabel('spicy', spicyLevel)}
            </span>
          </div>
          <div className="meter-bar">
            <div 
              className={`meter-fill ${getMeterColor(spicyLevel)}`} 
              style={{ width: `${spicyLevel}%` }}
            ></div>
          </div>
        </div>
        
        <div className="meter">
          <div className="meter-label">
            <span>🤡 Clown Energy</span>
            <span className={`meter-value ${getMeterColor(clownEnergy)}`}>
              {getMeterLabel('clown', clownEnergy)}
            </span>
          </div>
          <div className="meter-bar">
            <div 
              className={`meter-fill ${getMeterColor(clownEnergy)}`} 
              style={{ width: `${clownEnergy}%` }}
            ></div>
          </div>
        </div>
        
        <div className="meter">
          <div className="meter-label">
            <span>🎭 Drama Potential</span>
            <span className={`meter-value ${getMeterColor(dramaPotential)}`}>
              {getMeterLabel('drama', dramaPotential)}
            </span>
          </div>
          <div className="meter-bar">
            <div 
              className={`meter-fill ${getMeterColor(dramaPotential)}`} 
              style={{ width: `${dramaPotential}%` }}
            ></div>
          </div>
        </div>
        
        <div className="meter">
          <div className="meter-label">
            <span>⌨️ Keyboard Warrior</span>
            <span className={`meter-value ${getMeterColor(keyboardWarriorEnergy)}`}>
              {getMeterLabel('warrior', keyboardWarriorEnergy)}
            </span>
          </div>
          <div className="meter-bar">
            <div 
              className={`meter-fill ${getMeterColor(keyboardWarriorEnergy)}`} 
              style={{ width: `${keyboardWarriorEnergy}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoastOMeter; 