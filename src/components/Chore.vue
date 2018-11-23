<template>
  <li>
    {{ chore.name }}: ({{ chore.description }})
    <button @click="$emit('remove', chore.id)">
      X
    </button>
    <br>
  </li>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    chore: {
      type: Object,
      required: true
    }
  }
})
</script>
