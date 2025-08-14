<script setup>
import { useAuthStore } from "@/stores/auth";
import { usePostsStore } from "@/stores/posts";
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const { errors } = storeToRefs(usePostsStore());
const { getPost } = usePostsStore();
const { user } = storeToRefs(useAuthStore());
const post = ref(null);

const formData = reactive({
    title: "",
    body: "",
});
console.log(user.value);
onMounted(async () => {
    post.value = await getPost(route.params.id);
    if (post.value.user_id != user.value.id) {
        router.push({ name: "home" });
    } else {
        formData.title = post.value.title;
        formData.body = post.value.body;
    }
});
</script>

<template>
    <main>
        <h1 class="title">Edit your post</h1>
        <form @submit.prevent="" class="w-1/2 mx-auto space-y-6">
            <div>
                <input type="text" placeholder="Post Title" v-model="formData.title" />
                <p v-if="errors.title" class="error">{{ errors.title[0] }}</p>
            </div>
            <div>
                <textarea rows="6" placeholder="Post Body" v-model="formData.body"></textarea>
                <p v-if="errors.body" class="error">{{ errors.body[0] }}</p>
            </div>
            <button class="primary-btn">Update</button>
        </form>
    </main>
</template>
