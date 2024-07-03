<template>
  <div v-if="tags" class="project-tags-container">
    <div class="project-tag" v-for="tag in tags" :key="tag">
      <i :class="tag.icon"></i>
      {{ tag.name }}
    </div>
  </div>
</template>

<script setup>
defineProps({ tags: [{ icon: String, name: String }] })
</script>
