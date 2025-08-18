import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "@/views/Auth/RegisterView.vue";
import LoginView from "@/views/Auth/LoginView.vue";
import { useAuthStore } from "@/stores/auth";
import CreateView from "@/views/Posts/CreateView.vue";
import ShowView from "@/views/Posts/ShowView.vue";
import EditView from "@/views/Posts/EditView.vue";
import UsersList from "@/views/Users/IndexView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView,
            meta: { guest: true },
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
            meta: { guest: true },
        },
        {
            path: "/create-post",
            name: "create-post",
            component: CreateView,
            meta: { auth: true },
        },
        {
            path: "/posts/:id",
            name: "show",
            component: ShowView,
        },
        {
            path: "/posts/:id/edit",
            name: "edit",
            component: EditView,
            meta: { auth: true },
        },
        {
            path: "/admin/users",
            name: "users-list",
            component: UsersList,
            meta: { auth: true, admin: true },
        },
        {
            path: "/unauthorized",
            name: "401",
            component: () => import("../views/Errors/401View.vue"),
        },
    ],
});

router.beforeEach(async (to, from) => {
    const authstore = useAuthStore();
    await authstore.getUser();

    if (authstore.user && to.meta.guest) {
        return { name: "home" };
    }

    if (!authstore.user && to.meta.auth) {
        return { name: "login" };
    }

    if (authstore.user && to.meta.admin && !authstore.user.is_admin) {
        return { name: "401" };
    }
});

export default router;
