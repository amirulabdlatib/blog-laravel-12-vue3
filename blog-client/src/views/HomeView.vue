<script setup>
import { usePostsStore } from "@/stores/posts";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

const { getAllPosts } = usePostsStore();
const posts = ref([]);
const currentPage = ref(1);
const hasMorePosts = ref(true);
const loading = ref(false);

const loadPosts = async (page = 1, append = false) => {
    loading.value = true;
    const data = await getAllPosts(page);

    if (append) {
        posts.value = [...posts.value, ...data.data];
    } else {
        posts.value = data.data;
    }

    hasMorePosts.value = data.current_page < data.last_page;
    loading.value = false;
};

const loadMore = async () => {
    currentPage.value++;
    await loadPosts(currentPage.value, true);
};

onMounted(async () => {
    await loadPosts();
});
</script>

<template>
    <main>
        <h1 class="title">Latest posts</h1>
        <div v-if="posts.length > 0">
            <div v-for="post in posts" :key="post.id" class="border-l-4 border-blue-400 pl-4 mb-12">
                <h1 class="font-bold text-3xl">{{ post.title }}</h1>
                <p class="text-xs text-slate-600 mb-4">Posted by {{ post.user.name }}</p>
                <p>
                    {{ post.body }}
                    <RouterLink class="underline text-blue-400" :to="{ name: 'show', params: { id: post.id } }"> Read more... </RouterLink>
                </p>
            </div>
        </div>

        <div v-else>
            <h2>No posts available</h2>
        </div>

        <!-- Load More Button -->
        <div v-if="hasMorePosts" class="text-center my-8 flex justify-end">
            <button @click="loadMore" :disabled="loading" class="primary-btn max-w-xs">
                {{ loading ? "Loading..." : "Load More Posts" }}
            </button>
        </div>

        <div v-else>
            <p class="text-center mb-10 text-gray-400">No more posts available</p>
        </div>
    </main>
</template>
