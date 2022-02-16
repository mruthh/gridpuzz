<template>
  <div class="grid">
    <template v-for="(square, index) in grid" :key="square.item">
      <button 
        class="grid-item"
        :style="square.selected ? 'border: 2px solid red' : null"
        @click="toggleSelected(index)"
      >
          {{ square.item }}
        </button>
    </template>  
  </div>
</template>

<script>

import { ref, computed } from 'vue'

const group1 = { id: 1, items: ['Bea', 'Mae', 'Angus', 'Selmers'], connections: { description: 'Night in the woods' } }
const group2 = { id: 2, items: ['Gregg', 'Robert\'s', 'Road', 'House'], connections: { description: 'Rules' } }
const group3 = { id: 3, items: ['Germ', 'Paste', 'Grass', 'Bran'], connections: { description: 'Wheat' } }
const group4 = { id: 4, items: ['Ground', 'Calm', 'Settle', 'Center'], connections: { description: 'Find peace' } }


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
      grid.push({ item, groupId: group.id, selected: false })

      return groups.length ? buildGrid(groups, grid) : grid
    }


    const grid = ref(buildGrid([group1, group2, group3, group4]))

    const selectedItems = computed(() => {
      return grid.value.filter(item => item.selected)
    })

    const resetItems = () => {
      for (const item of grid.value) {
        item.selected = false
      }
    }

    const isValidGroup = items => {
      return items.every(item => item.groupId === items[0].groupId)
    }

    const validateGroup = items => {
      if (isValidGroup(items)) {
        alert('You found a group!')
      }
      else alert('Sorry, not a group')

      resetItems()
    }

    const toggleSelected = index => {
      grid.value[index].selected = !grid.value[index].selected

      if (selectedItems.value.length >= 4) validateGroup(selectedItems.value)
    }

    return { grid, toggleSelected }
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
