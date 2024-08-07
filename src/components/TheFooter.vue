<script setup>
import { RouterLink } from 'vue-router'
import { LINKS } from '@/data/links'
</script>
<template>
  <footer class="flex flex-col items-center">
    <div class="grow flex flex-row">
      <p class="font-petrov text-ziggurat-600">
        Этот сайт был разработан исключительно для некомерческого использования
      </p>
    </div>
  </footer>
  <!-- <footer class="bg-ziggurat-200 flex flex-row px-10 py-7 mt-10 gap-12 flex-wrap"> -->
  <!--   <div> -->
  <!--     <h5>Ссылки</h5> -->

  <!--     <div class=""> -->
  <!--       <a -->
  <!--         v-for="link in LINKS" -->
  <!--         :key="link.url" -->
  <!--         class="footer-link group/link" -->
  <!--         :href="link.url" -->
  <!--         target="_blank" -->
  <!--       > -->
  <!--         <i :class="link.service.icon + ' ' + link.service.color"></i> -->
  <!--         {{ link.title }}</a -->
  <!--       > -->
  <!--     </div> -->
  <!--   </div> -->
  <!--   <div> -->
  <!--     <h5>Навигация</h5> -->
  <!--     <RouterLink to="/" class="footer-link group/link"> -->
  <!--       <i class="fas fa-home"></i> -->
  <!--       Главная -->
  <!--     </RouterLink> -->
  <!--     <RouterLink to="/about" class="footer-link"> -->
  <!--       <i class="fas fa-info-circle"></i> -->
  <!--       Инфо -->
  <!--     </RouterLink> -->
  <!--   </div> -->
  <!-- </footer> -->
</template>
