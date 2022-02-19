<template>
  <h1>GridPuzz</h1>
  <div class="solved">
    <template
      v-for="(group, index) in solvedGroups"
      :key="group.id"
    >
      <div class="flex">
        <SolvedGroup
          :items="group.items"
          :class="`theme-${index + 1}`"
        />
        <ConnectionInput 
          v-if="gridIsSolved && index <= guessIndex" 
          :connections="group.connections"
          @guess="handleGuess"
        />
      </div>
    </template>
  </div>

  <div
    v-if="solvedGroups.length === 2"
    class="lives"
  >
    <template
      v-for="(life, index) in Array(lives)"
      :key="index"
      class="life"
    >
      🧩
    </template>
  </div>

  <div>
    <template
      v-for="(row, rowIndex) in gridRows"
      :key="rowIndex"
    >
      <div class="grid-row">
        <template
          v-for="(square, index) in row"
          :key="square.item"
        >
          <button 
            class="grid-item"
            :class="{ selected: square.selected }"
            @click="toggleSelected(rowIndex, index)"
          >
            {{ square.item }}
          </button>
        </template>
      </div>
    </template>
  </div>

  <div
    v-if="gameIsComplete"
    class="score"
  >
    You got {{ points }} / 10!!
  </div>
</template>

<script>

import { ref, computed } from 'vue'
import { cloneDeep } from 'lodash'
import SolvedGroup from './components/SolvedGroup.vue'
import ConnectionInput from './components/ConnectionInput.vue'

import { grids } from './grids.js'

export default {
  name: 'App',
  components: { SolvedGroup, ConnectionInput },
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
    const gridIsSolved = computed(() => solvedGroups.value.length === 4)
    
    // For a cheesy little mvp trick, let's just grab the grid index from the route!
    const index = window.location.pathname.replace('/', '')
    const groups = ref(grids[index] || grids[0])
    
    const grid = ref(buildGrid(groups.value))

    const gridRows = computed(() => {
      return [
        grid.value.slice(0, 4),
        grid.value.slice(4, 8),
        grid.value.slice(8, 12),
        grid.value.slice(12, 16)
      ].filter(group => group.length)
    })

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
        if (groups.value.length === 2) {
          lives.value --
          if (!lives.value) {
            alert ('sorry, no more lives')

            solvedGroups.value.push(groups.value[0])
            solvedGroups.value.push(groups.value[1])
            groups.value = []

            grid.value = buildGrid(groups.value)
          }
        }
      }

      resetItems()
    }

    const toggleSelected = (rowIndex, index) => {
      const item = gridRows.value[rowIndex][index]
      item.selected = !item.selected

      if (selectedItems.value.length >= 4) handleGroupSelected(selectedItems.value)
    }

    // After grid is solved
    const guessIndex = ref(0)
    const handleGuess = (guess) => {
      if (guess.isCorrect) addPoint()
      guessIndex.value ++
    }

    const gameIsComplete = computed(() => {
      return guessIndex.value > 3
    })

    return { 
      gridIsSolved,
      gridRows, 
      toggleSelected, 
      solvedGroups, 
      lives,
      points,
      addPoint,
      guessIndex,
      handleGuess,
      gameIsComplete
    }
  }
}
</script>

<style>
  html {
    box-sizing: border-box;
  }

  h1 {
    width: 400px;
    display: flex;
    justify-content: center;
  }

  .grid-row {
    display: grid;
    grid-template-columns: 100px 100px 100px 100px;
    height: 75px;
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

  .selected {
    background-color: lightsteelblue;
  }

  .lives {
    margin: 16px 0px 8px;
    width: 400px;
    text-align: right;
  }

  .score {
    display: flex;
    justify-content: center;
    margin-top: 16px;
    font-size: xx-large;
    font-weight: bold;
    width: 400px;
  }
  .flex {
    display: flex;
    align-items: center;
  }

  .theme-1 {
    background-color: blueviolet;
    color: white;
  }

  .theme-2 {
    background-color: aqua;
    color: black;
  }

  .theme-3 {
    background-color: lightskyblue;
    color: black;
  }

  .theme-4 {
    background-color: blue;
    color: white;
  }
  

</style>
