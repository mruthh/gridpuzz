<template>
  <form
    v-if="!hasMadeGuess"
    @submit.prevent="handleGuess"
  >
    <label>
      <input
        ref="input"
        type="text"
        v-model="guess"
      >
      What is the connection?
    </label>
  </form>

  <div v-if="hasMadeGuess">
    <span>{{ isCorrect ? 'Correct!' : 'Incorrect' }}</span>
    <span>{{ connections.description }}</span>
  </div>
</template>

<script>

import { ref, onMounted } from 'vue'

export default {
  props: {
    connections: {
      type: Object,
      required: true
    }
  },
  emits: ['guess'],
  setup(props, { emit }) {
    const guess = ref('')
    const hasMadeGuess = ref(false)
    const isCorrect = ref(false)

    const guessIsCorrect = (guess) => {
      const keywords = props.connections.keywords

      for (const keyword of keywords) {
        if (guess.toLowerCase().includes(keyword.toLowerCase())) return true
      }

      return false
    }
    
    const handleGuess = () => {
      hasMadeGuess.value = true

      if (guessIsCorrect(guess.value)) {
        isCorrect.value = true
      }

      emit('guess', { isCorrect: isCorrect.value})
    }

    const input = ref(null)
    onMounted(() => { 
      console.log(input.value)
      input.value.focus() 
    })
    
    return { guess, handleGuess, hasMadeGuess, isCorrect, input }
  }
}
</script>

<style>

</style>