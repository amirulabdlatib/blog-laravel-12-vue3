import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
    actions: {
        async getAllUsers(page = 1) {
            const res = await fetch(`/api/users?page=${page}`, {
                method: "get",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const data = await res.json();
            return data.users;
        },
    },
});
