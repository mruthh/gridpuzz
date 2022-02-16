<template>
  <div class="grid">
    <template v-for="square in grid" :key="square.item">
      <button class="grid-item">{{ square.item }}</button>
    </template>  
  </div>
</template>

<script>

import { ref } from 'vue'

const group1 = { items: ['Bea', 'Mae', 'Angus', 'Selmers'], connections: { description: 'Night in the woods' } }
const group2 = { items: ['Gregg', 'Robert\'s', 'Road', 'House'], connections: { description: 'Rules' } }
const group3 = { items: ['Germ', 'Paste', 'Grass', 'Bran'], connections: { description: 'Wheat' } }
const group4 = { items: ['Ground', 'Calm', 'Settle', 'Center'], connections: { description: 'Find peace' } }


export default {
  name: 'App',
  setup () {
    const randomIndex = length => {
      return Math.round((Math.random() * 10000)) % length
    }

    const buildGrid = (groups, grid = []) => {
      const groupIndex = randomIndex(groups.length)
      const group = groups[groupIndex]
      const itemIndex = randomIndex(group.length)
      const item = group.items.splice(itemIndex, 1)[0]
      
      if (!group.items.length) groups.splice(groupIndex, 1)
      grid.push({ item, connections: group.connections })

      return groups.length ? buildGrid(groups, grid) : grid
    }


    const grid = ref(buildGrid([group1, group2, group3, group4]))

    return { grid }
  }
}
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    grid-template-rows: 100px 100px 100px 100px;
  }

  .grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }
</style>
