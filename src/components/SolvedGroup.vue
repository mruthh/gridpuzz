<template>
  <div class="grid-row">
    <template
      v-for="item in items"
      :key="item"
    >
      <GridItem
        :item="item"
        :class="$attrs.class"
      />
    </template>  
  </div>
</template>

<script>

import GridItem from './GridItem.vue'

export default {
  name: 'SolvedGroup',
  components: { GridItem },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>