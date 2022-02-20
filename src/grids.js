const group1 = { 
  id: 1, 
  items: ['Bea', 'Mae', 'Angus', 'Selmers'], 
  connections: { 
    description: 'Characters from A Night in the Woods',
    keywords: ['Night', 'woods', 'characters']
  } }
const group2 = { 
  id: 2, 
  items: ['Gregg', 'Robert\'s', 'Road', 'House'], 
  connections: {
    description: '_____ Rules',
    keywords: ['rules']
  } 
}
const group3 = { 
  id: 3, 
  items: ['Germ', 'Paste', 'Grass', 'Bran'], 
  connections: { 
    description: 'Wheat _____',
    keywords: ['wheat']
  } 
}
const group4 = { 
  id: 4, 
  items: ['Ground', 'Calm', 'Settle', 'Center'], 
  connections: { 
    description: 'Synonyms for "to find peace"',
    keywords: ['synonyms', 'ground', 'calm', 'settle', 'center', 'relax', 'peace']
  } 
}

const group5 = { 
  id: 1, 
  items: ['Clamp', 'Paddle', 'Gag', 'Whip'], 
  connections: { 
    description: 'BDSM implements',
    keywords: ['kink', 'bdsm', 'implements', 'toys']
  } }
const group6 = { 
  id: 2, 
  items: ['Cane', 'Daddy', 'Cookie', 'Glider'], 
  connections: {
    description: 'Sugar _____',
    keywords: ['sugar']
  } 
}
const group7 = { 
  id: 3, 
  items: ['Chain', 'Cuff', 'Missing', 'Hyper'], 
  connections: { 
    description: '_____ link',
    keywords: ['link']
  } 
}
const group8 = { 
  id: 4, 
  items: ['Plug', 'Stem', 'Stop', 'Stanch'], 
  connections: { 
    description: 'Synonyms for "stop" or "restrict"',
    keywords: ['synonyms', 'plug', 'stem', 'stop', 'stanch', 'restrict']
  } 
}

const group9 = { 
  id: 1, 
  items: ['Stoat', 'Price', 'Misspelt', 'Acorn'], 
  connections: { 
    description: 'They end with grains (oat, rice, spelt, corn)',
    keywords: ['grain']
  } }
const group10 = { 
  id: 2, 
  items: ['Bap', 'Pippped', 'Chuffed', "Lorry"], 
  connections: {
    description: 'Things the British say',
    keywords: ['British', 'English', 'UK']
  } 
}
const group11 = { 
  id: 3, 
  items: ['Elk', 'Mantis', 'Bee', 'Sparrow'], 
  connections: { 
    description: 'Cards in Inscryption',
    keywords: ['Inscryption', 'incscription', 'cards']
  } 
}
const group12 = { 
  id: 4, 
  items: ['Yeet', 'Scam', 'Grant', 'Horsey'], 
  connections: { 
    description: 'NPCs from Dungeons and Daddies',
    keywords: ['dungeons', 'daddies', 'characters', 'npc']
  } 
}

export const grids = [
  [group1, group2, group3, group4],
  [group5, group6, group7, group8],
  [group9, group10, group11, group12]
]