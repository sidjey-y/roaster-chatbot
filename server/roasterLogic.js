
function analyzeMessage(message) {
  const analysis = {
    isShort: false,
    isFormal: false,
    hasExcessiveEmojis: false,
    isSpam: false,
    isLongParagraph: false,
    spicyModifier: 0,
    clownModifier: 0,
    dramaModifier: 0,
    keyboardWarriorModifier: 0,
    reaction: 'neutral' 
  };
  
  if (message.trim().split(/\s+/).length <= 2 && message.length < 10) {
    analysis.isShort = true;
    analysis.dramaModifier = -5;
    analysis.spicyModifier = 5;
    analysis.reaction = 'smug';
  }
  
  const formalPhrases = /\b(furthermore|therefore|consequently|hence|thus|moreover|nevertheless|accordingly|subsequently)\b/i;
  if (formalPhrases.test(message) || message.includes('Dear') || message.includes('Sincerely')) {
    analysis.isFormal = true;
    analysis.clownModifier = 15;
    analysis.dramaModifier = -5;
    analysis.reaction = 'laughing';
  }
  
  const emojiCount = (message.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27FF]/g) || []).length;
  if (emojiCount > 3 || emojiCount / message.length > 0.15) {
    analysis.hasExcessiveEmojis = true;
    analysis.clownModifier = 20;
    analysis.reaction = 'shocked';
  }
  
  if (message.length > 200) {
    analysis.isLongParagraph = true;
    analysis.dramaModifier = 15;
    analysis.spicyModifier = 10;
    analysis.reaction = 'sleepy';
  }

  
  return analysis;
}

const roastTemplates = {
  short: [
    "Wow, saving those keystrokes for something important later? 🐔",
    "I've seen fortune cookies with more content than that message. 🐔",
    "Is your keyboard missing letters or are you just that lazy? 🐔",
    "Brevity is the soul of wit, but this is more like the soul of 'can't be bothered.' 🐔",
    "That message was shorter than a chicken's attention span...and that's saying something! 🐔"
  ],
  formal: [
    "Oh pardon me, I didn't realize I was speaking with the Queen of England! 🐔",
    "Did you swallow a dictionary before typing that message? 🐔",
    "Hereby I declare thee the most pretentious texter in the realm. 🐔",
    "Who talks like that? Did you time-travel from the 1800s? 🐔",
    "Your message is so formal I feel underdressed just reading it. 🐔"
  ],
  emojis: [
    "Are you communicating or just having a seizure on the emoji keyboard? 🐔",
    "I didn't realize I was talking to the official emoji ambassador! 🐔",
    "Your emoji game is stronger than your actual conversation skills. 🐔",
    "Translation: 'I have nothing to say but look at all these pretty pictures!' 🐔",
    "Did your words get lost in the emoji avalanche? 🐔"
  ],
  longParagraph: [
    "Wow, I asked for a message, not your autobiography. 🐔",
    "TL;DR: You talk too much. 🐔",
    "I've seen shorter novels than that message. 🐔",
    "Do you get paid by the word or something? 🐔",
    "Next time just send the audiobook version, it might be quicker. 🐔"
  ],
  normal: [
    "Is that really the best you could come up with? 🐔",
    "My grandma types more interesting messages than that. 🐔",
    "Keep practicing, you'll get better at conversation...maybe. 🐔",
    "That message was about as spicy as vanilla ice cream. 🐔",
    "Even for a human, that was pretty mediocre. 🐔"
  ]
};

function generateRoast(analysis) {

  if (analysis.isShort) {
    return getRandomRoast(roastTemplates.short);
  } else if (analysis.isFormal) {
    return getRandomRoast(roastTemplates.formal);
  } else if (analysis.hasExcessiveEmojis) {
    return getRandomRoast(roastTemplates.emojis);
  } else if (analysis.isLongParagraph) {
    return getRandomRoast(roastTemplates.longParagraph);
  } else {
    return getRandomRoast(roastTemplates.normal);
  }
}

function getRandomRoast(roasts) {
  const randomIndex = Math.floor(Math.random() * roasts.length);
  return roasts[randomIndex];
}

module.exports = {
  analyzeMessage,
  generateRoast
}; 