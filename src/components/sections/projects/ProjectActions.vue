<template>
  <a
    v-for="action in actions"
    :key="action"
    class="btn btn-flat group/action"
    :disabled="action.disabled"
    :href="action.url"
    target="_blank"
  >
    {{ action.title }}
    <span
      v-if="action.disabled"
      class="hidden group-hover/action:flex absolute bottom-full tooltip tooltip-bad"
    >
      <div class="tooltip-icon">
        <i :class="action.disabled.icon"></i>
      </div>
      {{ action.disabled.message }}
    </span>
    <i :class="action.icon"></i>
  </a>
</template>
<script setup>
import { computed } from 'vue'

defineProps({
  actions: [
    {
      title: String,
      disabled: Boolean,
      disabled: {
        message: String,
        icon: String
      }
    }
  ]
})
</script>
