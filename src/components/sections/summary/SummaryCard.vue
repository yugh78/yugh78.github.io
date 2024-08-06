<template>
  <div
    class="flex-col lg:flex-row items-center shadow-ziggurat-700 drop-shadow-xl flex border border-ziggurat-400 rounded-xl p-8 gap-8 bg-ziggurat-200 text-lg hover:drop-shadow-2xl transition-all duration-500 hover:border-ziggurat-600 hover:-translate-y-1">
    <img class="md:max-w-80 lg:max-w-40 grow-0 rounded-md drop-shadow-xl shadow-ziggurat-400" :src="img"
      alt="Иллюстрация" loading="lazy" />
    <div class="grow text-balance" v-html="text">
    </div>
  </div>
</template>
<script>
export default {
  props: ['img', 'text']
}
</script>
