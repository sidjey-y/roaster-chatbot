import React from 'react';
import './ChickenMascot.css';

const ChickenMascot = ({ reaction = 'neutral' }) => {
  const reactionMap = {
    neutral: { emoji: '🐔', class: 'neutral' },
    smug: { emoji: '😏', class: 'smug' },
    laughing: { emoji: '😂', class: 'laughing' },
    shocked: { emoji: '😱', class: 'shocked' },
    sleepy: { emoji: '😴', class: 'sleepy' }
  };
  
  const currentReaction = reactionMap[reaction] || reactionMap.neutral;
  
  return (
    <div className={`chicken-mascot ${currentReaction.class}`}>
      <div className="chicken-body">
        <div className="chicken-face">
          <span className="chicken-emoji">{currentReaction.emoji}</span>
        </div>
      </div>
      <div className="speech-bubble">
        {reaction === 'neutral' && <span>Cluck! Ready to roast!</span>}
        {reaction === 'smug' && <span>Oh, that's all you got?</span>}
        {reaction === 'laughing' && <span>BWAHAHA! So formal!</span>}
        {reaction === 'shocked' && <span>Emoji overload!</span>}
        {reaction === 'sleepy' && <span>*yawn* Too. Many. Words.</span>}
      </div>
    </div>
  );
};

export default ChickenMascot; 