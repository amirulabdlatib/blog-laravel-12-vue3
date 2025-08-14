<script setup>
import { useAuthStore } from "@/stores/auth";
import { usePostsStore } from "@/stores/posts";
import { ref, onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const { getPost, deletePost } = usePostsStore();
const authStore = useAuthStore();
const post = ref(null);

onMounted(async () => {
    post.value = await getPost(route.params.id);
    authStore.getUser();
});
</script>

<template>
    <main class="space-y-6">
        <div class="flex justify-between">
            <h1>Show post detail</h1>

            <p class="text-blue-500 underline">
                <RouterLink :to="{ name: 'home' }"> Back to home </RouterLink>
            </p>
        </div>

        <div v-if="post">
            <div class="border-l-4 border-blue-400 pl-4 mb-12">
                <h1 class="font-bold text-3xl">{{ post.title }}</h1>
                <p class="text-xs text-slate-600 mb-4">Posted by {{ post.user.name }}</p>
                <p>
                    {{ post.body }}
                </p>
            </div>

            <div v-if="authStore.user && authStore.user.id == post.user_id">
                <form @submit.prevent="deletePost(post)">
                    <button class="text-red-500 font-bold px-2 py-1 border rounded transition-colors duration-300 ease-in-out hover:bg-red-500 hover:text-gray-200">Delete</button>
                </form>
            </div>
        </div>
        <div v-else>Page not found</div>
    </main>
</template>
