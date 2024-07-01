<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <footer class="bg-sky-200 flex flex-row px-10 py-2 mt-10 gap-8 flex-wrap">
    <div>
      <h5>Ссылки</h5>
      <div class="">
        <p>
          <a href="https://t.me/mathuc" class="footer-link group/link"
            ><i class="group-hover/link:text-blue-500 fa-telegram fa-brands"></i> Мой telegram</a
          >
        </p>
        <p>
          <a href="https://github.com/yugh78" class="footer-link group/link"
            ><i class="fa-github fa-brands group-hover/link:text-black"></i> Мой github</a
          >
        </p>
      </div>
    </div>
    <div>
      <h5>Навигация</h5>
      <p>
        <RouterLink to="/" class="footer-link group/link">
          <i class="fas fa-home text-sm"></i>
          Главная
        </RouterLink>
      </p>
      <p>
        <RouterLink to="/about" class="footer-link">
          <i class="fas fa-info-circle text-sm"></i>
          Инфо
        </RouterLink>
      </p>
    </div>
  </footer>
</template>
