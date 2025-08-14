import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

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
                this.router.push({ name: "home" });
            }
        },
        // update post
        async updatePost(post, formData) {
            const authStore = useAuthStore();

            if (authStore.user.id == post.user_id) {
                const res = await fetch(`/api/posts/${post.id}`, {
                    method: "PUT",
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
                    this.router.push({ name: "home" });
                }
            } else {
                console.warn("Unauthorized to update this post");
            }
        },
        // Delete a post
        async deletePost(post) {
            const authStore = useAuthStore();

            if (authStore.user.id == post.user_id) {
                const res = await fetch(`/api/posts/${post.id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                const data = await res.json();
                if (data.message == "Post was deleted") {
                    this.router.push({ name: "home" });
                } else {
                    console.error("Delete fail: ", data);
                }
            } else {
                console.warn("Unauthorized to delete this post");
            }
        },
    },
});
