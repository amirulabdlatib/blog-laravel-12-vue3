<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";

const authStore = useAuthStore();

onMounted(() => {
    authStore.getUser();
});
</script>

<template>
    <header>
        <Navbar :authStore="authStore" />
    </header>

    <RouterView />
</template>
