<template>
  <div class="grid-row">
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

</style>