<template>
  <div
    class="leading-none p-4 rounded-2xl mt-auto mb-2 font-semibold tracking-tight border w-full bg-opacity-80 backdrop-filter backdrop-blur-sm bg-ziggurat-600 border-ziggurat-600"
  >
    <div class="text-4xl text-white">
      {{ name }}
    </div>
    <div class="text-xl text-white">
      {{ description }}
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'description', 'url']
}
</script>
