<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { onMounted } from "vue";

const authStore = useAuthStore();

onMounted(() => {
  authStore.getUser();
});
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>

      <div v-if="authStore.user" class="flex items-center space-x-3">
        <p class="text-sm text-slate-300">Welcome back {{ authStore.user.name }}</p>
        <form @submit.prevent="authStore.logout()" class="nav-link">
          <button type="submit">Logout</button>
        </form>
      </div>
      <div v-else>
        <RouterLink to="/register" class="nav-link">Register</RouterLink>
        <RouterLink to="/login" class="nav-link">Login</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>
