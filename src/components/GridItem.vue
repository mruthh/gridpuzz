<template>
  <button>
    <div 
      v-if="item.endsWith('.mp3')"
      class="audio-container"
    >
      <audio
        :src="audioUrl"
        controls
        @playing="stopOtherPlayers"
      />
      <input>
    </div>
            
    <template v-else>
      {{ item }}
    </template>
  </button>
</template>

<script>

import { computed } from 'vue'

export default {
  props: {
    item: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const audioUrl = computed(() => {
      return '/assets/' + props.item
    })

    const stopOtherPlayers = event => {
      const players = Array.from(document.querySelectorAll('audio'))

      for (const player of players) {
        if (!player.isSameNode(event.target)) player.pause()
      }
    }

    return {
      audioUrl,
      stopOtherPlayers
    }
  }
}
</script>

<style>
  .audio-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
  }
</style>