<template>
  <div class="grid-row">
    <template
      v-for="item in items"
      :key="item"
    >
      <GridItem
        v-model:memo="memos[item]"
        :item="item"
        :class="$attrs.class"
      />
    </template>  
  </div>
</template>

<script>

import GridItem from './GridItem.vue'
import { ref, inject } from 'vue'

export default {
  name: 'SolvedGroup',
  components: { GridItem },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const memos = inject('memos', ref({}))

    return { memos }
  }
}
</script>