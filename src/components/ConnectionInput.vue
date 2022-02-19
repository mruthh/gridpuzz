<template>
  <form @submit.prevent="handleGuess">
    <label>
      <input
        type="text"
        v-model="guess"
      >
      What is the connection?
    </label>
  </form>
</template>

<script>

import { ref } from 'vue'

export default {
  props: {
    connections: {
      type: Object,
      required: true
    }
  },
  setup() {
    const guess = ref('')
    
    const handleGuess = () => {
      console.log(guess.value)
    }

    return { guess, handleGuess }
  }
}
</script>

<style>

</style>