<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full">
    <div class="flex flex-col fixed w-full bg-black">
      <nav class="flex justify-center space-x-5">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Projects</RouterLink>
      </nav>
    </div>
  </header>
  <div class="flex flex-col h-full items-center pb-2">
    <RouterView />
  </div>
</template>