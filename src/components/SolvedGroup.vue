<template>
  <div class="flex-container">
    <template
      v-for="item in items"
      :key="item"
    >
      <div class="grid-item">
        {{ item }}
      </div>
    </template>  
  </div>
</template>

<script>
export default {
  name: 'SolvedGroup',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.flex-container {
  display: flex;
}

</style>