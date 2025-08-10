<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { reactive } from "vue";

const { authenticate } = useAuthStore();
const { errors } = storeToRefs(useAuthStore());

const formData = reactive({
  email: "",
  password: "",
});
</script>
<template>
  <main>
    <h1 class="title">Login a existing account</h1>

    <form @submit.prevent="authenticate('login', formData)" class="w-1/2 mx-auto space-y-6" action="">
      <div>
        <input type="email" placeholder="Email" v-model="formData.email" />
        <p v-if="errors.email" class="text-red-400">{{ errors.email[0] }}</p>
      </div>
      <div>
        <input type="password" placeholder="Password" v-model="formData.password" />
        <p v-if="errors.password" class="text-red-400">{{ errors.password[0] }}</p>
      </div>
      <button class="primary-btn">Login</button>
    </form>
  </main>
</template>
