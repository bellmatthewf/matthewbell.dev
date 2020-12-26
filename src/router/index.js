import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const PageNotFound = () => import("@/views/PageNotFound.vue");
const SignUp = () => import("@/views/SignUp.vue");
const SignIn = () => import("@/views/SignIn.vue");

const routes = [
    {
        path: "/",
        alias: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp
    },
    {
        path: "/signin",
        name: "SignIn",
        component: SignIn
    },
    {
        path: "/404",
        name: "pageNotFound",
        component: PageNotFound
    },
    {
        path: "*",
        redirect: "/404"
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
