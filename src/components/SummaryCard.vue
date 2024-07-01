<template>
  <div class="summary-card">
    <img class="summary-card-image" :src="img" alt="" />
    <div class="summary-card-text">
      {{ text }}
    </div>
  </div>
</template>
<script>
export default {
  props: ['img', 'text']
}
</script>
