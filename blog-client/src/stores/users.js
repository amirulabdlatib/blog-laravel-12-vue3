import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
    actions: {
        async getAllUsers() {
            const res = await fetch("/api/users", {
                method: "get",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const data = await res.json();
            console.log(data.users);

            return data.users;
        },
    },
});
