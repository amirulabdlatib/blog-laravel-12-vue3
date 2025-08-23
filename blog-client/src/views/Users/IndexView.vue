<script setup>
    import { useUsersStore } from "@/stores/users";
    import { ref, onMounted } from "vue";
    import { useRoute, useRouter } from "vue-router";

    const { getAllUsers } = useUsersStore();
    const route = useRoute();
    const router = useRouter();

    const users = ref([]);
    const pagination = ref({
        current_page: 1,
        last_page: 1,
        links: [],
    });

    const fetchUsers = async (page = 1) => {
        const response = await getAllUsers(page);
        users.value = response.data;
        pagination.value = {
            current_page: response.current_page,
            last_page: response.last_page,
            links: response.links,
        };

        // Update URL without page reload
        if (page > 1) {
            router.replace({ query: { page } });
        } else {
            router.replace({ query: {} }); // Remove page param for page 1
        }
    };

    const goToPage = (url) => {
        if (!url) return;
        const pageParam = new URL(url).searchParams.get("page");
        fetchUsers(Number(pageParam));
    };

    onMounted(() => {
        // Get page from URL query parameter
        const currentPage = Number(route.query.page) || 1;
        fetchUsers(currentPage);
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
                        <td class="px-4 py-2 text-sm text-gray-900">
                            {{ (pagination.current_page - 1) * 5 + index + 1 }}
                        </td>
                        <td class="px-4 py-2 text-sm text-gray-900">{{ user.name }}</td>
                        <td class="px-4 py-2 text-sm text-gray-900">{{ user.email }}</td>
                        <td class="px-4 py-2 text-sm text-gray-500">
                            {{ new Date(user.created_at).toLocaleDateString() }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-6 flex justify-center space-x-1">
            <button
                v-for="(link, index) in pagination.links"
                :key="index"
                v-html="link.label"
                :disabled="!link.url"
                @click="goToPage(link.url)"
                :class="['px-3 py-1 border rounded text-sm', link.active ? 'bg-blue-500 text-white' : 'bg-white text-gray-700', !link.url ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-100']"
            />
        </div>
    </div>
</template>
