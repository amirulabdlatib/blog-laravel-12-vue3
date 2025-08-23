<script setup>
    import { useUsersStore } from "@/stores/users";
    import { ref, onMounted } from "vue";

    const { getAllUsers } = useUsersStore();
    const users = ref([]);

    onMounted(async () => {
        users.value = await getAllUsers();
    });
</script>

<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">User List</h1>

        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 border border-gray-300">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">No</th>
                        <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                        <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                        <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Created At</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="(user, index) in users" :key="index">
                        <td class="px-4 py-2 text-sm text-gray-900">{{ index + 1 }}</td>
                        <td class="px-4 py-2 text-sm text-gray-900">{{ user.name }}</td>
                        <td class="px-4 py-2 text-sm text-gray-900">{{ user.email }}</td>
                        <td class="px-4 py-2 text-sm text-gray-500">{{ new Date(user.created_at).toLocaleDateString() }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
