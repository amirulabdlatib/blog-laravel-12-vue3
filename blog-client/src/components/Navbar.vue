<script setup>
import { RouterLink } from "vue-router";

defineProps({
    authStore: Object,
});
</script>

<template>
    <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <div v-if="authStore.user" class="flex items-center space-x-3">
            <p class="text-sm text-slate-300">Welcome {{ authStore.user.name }}</p>
            <div v-if="authStore.user.is_admin">
                <RouterLink :to="{ name: 'users-list' }" class="nav-link">Users</RouterLink>
            </div>
            <div v-else>
                <RouterLink :to="{ name: 'create-post' }" class="nav-link">New Post</RouterLink>
            </div>
            <form @submit.prevent="authStore.logout()" class="nav-link">
                <button type="submit">Logout</button>
            </form>
        </div>
        <div v-else>
            <RouterLink to="/register" class="nav-link">Register</RouterLink>
            <RouterLink to="/login" class="nav-link">Login</RouterLink>
        </div>
    </nav>
</template>
