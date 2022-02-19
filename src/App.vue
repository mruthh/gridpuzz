<template>
  <div class="solved">
    <template
      v-for="group in solvedGroups"
      :key="group.id"
    >
      <SolvedGroup :items="group.items" />
    </template>
  </div>

  <div class="grid">
    <template
      v-for="(square, index) in grid"
      :key="square.item"
    >
      <button 
        class="grid-item"
        :class="`background-${square.groupId}`"
        :style="square.selected ? 'border: 2px solid red' : null"
        @click="toggleSelected(index)"
      >
        {{ square.item }}
      </button>
    </template>  
  </div>

  <div v-if="solvedGroups.length === 2">
    <template
      v-for="(life, index) in Array(lives)"
      :key="index"
    >
      X
    </template>
  </div>
</template>

<script>

import { ref, computed } from 'vue'
import { cloneDeep } from 'lodash'
import SolvedGroup from './components/SolvedGroup.vue'

const group1 = { id: 1, items: ['Bea', 'Mae', 'Angus', 'Selmers'], connections: { description: 'Night in the woods' } }
const group2 = { id: 2, items: ['Gregg', 'Robert\'s', 'Road', 'House'], connections: { description: 'Rules' } }
const group3 = { id: 3, items: ['Germ', 'Paste', 'Grass', 'Bran'], connections: { description: 'Wheat' } }
const group4 = { id: 4, items: ['Ground', 'Calm', 'Settle', 'Center'], connections: { description: 'Find peace' } }


export default {
  name: 'App',
  components: { SolvedGroup },
  setup () {
    const randomIndex = length => {
      return Math.round((Math.random() * 10000)) % length
    }

    const buildGrid = (_groups, grid = []) => {
      const groups = cloneDeep(_groups)
      if (!groups.length) return grid

      const groupIndex = randomIndex(groups.length)
      
      const group = groups[groupIndex]

      const itemIndex = randomIndex(group.items.length)
      const item = group.items.splice(itemIndex, 1)[0]
      
      if (!group.items.length) groups.splice(groupIndex, 1)
      grid.push({ item, groupId: group.id, selected: false })

      return groups.length ? buildGrid(groups, grid) : grid
    }

    const solvedGroups = ref([])
    const groups = ref([group1, group2, group3, group4])
    const grid = ref(buildGrid(groups.value))

    const selectedItems = computed(() => {
      return grid.value.filter(item => item.selected)
    })

    const resetItems = () => {
      for (const item of grid.value) {
        item.selected = false
      }
    }

    const lives = ref(3)
    const points = ref(0)

    const isValidGroup = items => {
      return items.every(item => item.groupId === items[0].groupId)
    }

    const addPoint = () => {
      points.value ++

      // if you've found all the groups and all the connections, get 2 bonus pts!
      if (points.value === 8) points.value = 10
    } 

    const handleGroupSelected = items => {
      if (isValidGroup(items)) {
        const solvedGroupId = items[0].groupId

        const group = groups.value.find(g => g.id === solvedGroupId)
        solvedGroups.value.push(group)

        groups.value = groups.value.filter(g => g.id !== solvedGroupId)
        addPoint()
        
        if (groups.value.length === 1) {
          solvedGroups.value.push(groups.value[0])
          groups.value = []
          addPoint()
        } 

        grid.value = buildGrid(groups.value)
      }
      else {
        alert('Sorry, not a group')
        if (groups.value.length === 2) {
          lives.value --
          if (!lives.value) alert ('sorry, no more lives')

          solvedGroups.value.push(groups.value[0])
          solvedGroups.value.push(groups.value[1])
          groups.value = []
        }
      }

      resetItems()
    }

    const toggleSelected = index => {
      grid.value[index].selected = !grid.value[index].selected

      if (selectedItems.value.length >= 4) handleGroupSelected(selectedItems.value)
    }

    return { grid, toggleSelected, solvedGroups, lives }
  }
}
</script>

<style>
  html {
    box-sizing: border-box;
  }

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

  .solved {
    margin-bottom: 8px;
  }

  .background-1 {
    background-color: blue;
  }

  .background-2 {
    background-color: blueviolet;
  }

  .background-3 {
    background-color: aqua;
  }

  .background-4 {
    background-color: cornflowerblue;
  }

</style>
