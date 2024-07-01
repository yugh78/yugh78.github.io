<template>
  <div class="card">
    <img class="card-image" :src="img" alt="" />
    <div class="card-text">
      {{ text }}
    </div>
  </div>
</template>
<script>
export default {
  props: ['img', 'text']
}
</script>
