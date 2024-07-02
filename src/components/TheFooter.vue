<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <footer class="bg-ziggurat-200 flex flex-row px-10 py-7 mt-10 gap-12 flex-wrap">
    <div>
      <h5>Ссылки</h5>
      <div class="">
        <a href="https://t.me/mathuc" class="footer-link group/link"
          ><i class="group-hover/link:text-blue-500 fa-telegram fa-brands"></i> Мой telegram</a
        >
        <a href="https://github.com/yugh78" class="footer-link group/link"
          ><i class="fa-github fa-brands group-hover/link:text-black"></i> Мой github</a
        >
      </div>
    </div>
    <div>
      <h5>Навигация</h5>
      <RouterLink to="/" class="footer-link group/link">
        <i class="fas fa-home"></i>
        Главная
      </RouterLink>
      <RouterLink to="/about" class="footer-link">
        <i class="fas fa-info-circle"></i>
        Инфо
      </RouterLink>
    </div>
  </footer>
</template>
