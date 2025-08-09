<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
