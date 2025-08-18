<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
    router.go(-1);
};

const goHome = () => {
    router.push({ name: "home" });
};
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
            <div class="mb-4">
                <svg class="mx-auto h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
            </div>
            <h1 class="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
            <p class="text-gray-600 mb-6">You don't have permission to access this resource.</p>
            <div class="space-x-4">
                <button @click="goBack" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">Go Back</button>
                <button @click="goHome" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Go Home</button>
            </div>
        </div>
    </div>
</template>
