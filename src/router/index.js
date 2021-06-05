import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("@/views/Home.vue");
const Blog = () => import("@/views/Blog.vue");
const Contact = () => import("@/views/Contact.vue");
const PageNotFound = () => import("@/views/PageNotFound.vue");

const routes = [
    {
        path: "/",
        alias: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/404",
        name: "PageNotFound",
        component: PageNotFound,
    },
    {
        path: "*",
        redirect: "/404",
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
