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


export const grids = [
  [group1, group2, group3, group4]
]