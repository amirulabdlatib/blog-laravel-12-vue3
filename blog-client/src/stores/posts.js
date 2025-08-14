import { defineStore } from "pinia";

export const usePostsStore = defineStore("postsStore", {
    state: () => {
        return {
            errors: {},
        };
    },
    actions: {
        // get all posts
        async getAllPosts() {
            const res = await fetch("/api/posts");
            const data = await res.json();

            return data;
        },
        // get a post
        async getPost(post) {
            const res = await fetch(`/api/posts/${post}`);
            const data = await res.json();
            return data.post;
        },
        // Create a post
        async createPost(formData) {
            const res = await fetch("/api/posts", {
                method: "post",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.errors) {
                this.errors = data.errors;
            } else {
                this.errors = {};
                console.log(data);
                this.router.push({ name: "home" });
            }
        },
    },
});
