<script setup>
    import { useUsersStore } from "@/stores/users";
    import { onMounted } from "vue";

    const { getAllUsers } = useUsersStore();

    onMounted(async () => {
        await getAllUsers();
    });
</script>

<template>user list page</template>
