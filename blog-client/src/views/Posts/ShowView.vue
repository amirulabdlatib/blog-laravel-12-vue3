<script setup>
import { usePostsStore } from "@/stores/posts";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { getPost } = usePostsStore();
const post = ref(null);

onMounted(async () => (post.value = await getPost(route.params.id)));
</script>

<template>
    <main>
        <h1>Show post detail</h1>

        <div v-if="post">
            <div class="border-l-4 border-blue-400 pl-4 mb-12">
                <h1 class="font-bold text-3xl">{{ post.title }}</h1>
                <p class="text-xs text-slate-600 mb-4">Posted by {{ post.user.name }}</p>
                <p>
                    {{ post.body }}
                </p>
            </div>
        </div>
        <div v-else>Page not found</div>
    </main>
</template>
