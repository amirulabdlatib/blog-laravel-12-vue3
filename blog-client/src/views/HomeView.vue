<script setup>
import { usePostsStore } from "@/stores/posts";
import { ref, onMounted } from "vue";

const { getAllPosts } = usePostsStore();
const posts = ref([]);

onMounted(async () => {
    posts.value = await getAllPosts();
});
</script>

<template>
    <main>
        <h1 class="title">Latest posts</h1>
        <div v-if="posts.length > 0">
            <div v-for="post in posts" :key="post.id" class="border-l-4 border-blue-400 pl-4 mb-12">
                <h1 class="font-bold text-3xl">{{ post.title }}</h1>
                <p class="text-xs text-slate-600 mb-4">Posted by {{ post.user.name }}</p>
                <p>{{ post.body }}</p>
            </div>
        </div>

        <div v-else>
            <h2>No posts available</h2>
        </div>
    </main>
</template>
