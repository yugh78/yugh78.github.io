<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <nav class="flex flex-row gap-4 p-4 justify-end items-center">
      <RouterLink to="/" class="nav-link">
        <i class="fas fa-home"></i>
        Главная
      </RouterLink>
      <RouterLink to="/about" class="nav-link">
        <i class="fas fa-info-circle"></i>
        Инфо
      </RouterLink>
    </nav>
  </header>
</template>
