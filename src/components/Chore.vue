<template>
  <li>
    {{ chore.text }}
    <button @click="$emit('remove', chore.id)">
      X
    </button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    chore: {
      type: Object,
      required: true
    }
  }
})
</script>
