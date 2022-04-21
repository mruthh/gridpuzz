const group1 = {
  id: 1, 
  items: [
    '01.mp3', 
    '08.mp3', 
    '10.mp3', 
    '11.mp3'
  ], 
  connections: { 
    description: 'Songs parodied by Dungeons and Daddies',
    keywords: ['dungeons', 'daddies', 'parody', 'parodies']
  } 
}
const group2 = {
  id: 2, 
  items: [
    '02.mp3', 
    '07.mp3', 
    '09.mp3', 
    '13.mp3'
  ], 
  connections: { 
    description: 'Buttholes',
    keywords: ['butt', 'hole']
  } 
}
const group3 = {
  id: 3, 
  items: [
    '03.mp3', 
    '12.mp3', 
    '14.mp3', 
    '16.mp3'
  ], 
  connections: { 
    description: 'Worms!',
    keywords: ['worm']
  } 
}
const group4 = {
  id: 4,
  items: [
    '04.mp3', 
    '05.mp3', 
    '06.mp3', 
    '15.mp3'
  ], 
  connections: { 
    description: 'Songs from rhythm games',
    keywords: ['game', 'video', 'rhythm']
  } 
}

module.exports = { audio1: [group1, group2, group3, group4] }