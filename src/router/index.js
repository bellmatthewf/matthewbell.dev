import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const PageNotFound = () => import("@/views/PageNotFound.vue");
const SignUp = () => import("@/views/SignUp.vue");
const LogIn = () => import("@/views/LogIn.vue");
const VerifyEmail = () => import("@/views/VerifyEmail.vue");
const ForgotPassword = () => import("@/views/ForgotPassword.vue");
const ResetPassword = () => import("@/views/ResetPassword.vue");

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
        path: "/sign-up",
        name: "SignUp",
        component: SignUp
    },
    {
        path: "/log-in",
        name: "LogIn",
        component: LogIn
    },
    {
        path: "/verify-email/:token",
        name: "VerifyEmail",
        component: VerifyEmail
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword
    },
    {
        path: "/reset-password/:token",
        name: "ResetPassword",
        component: ResetPassword
    },
    {
        path: "/404",
        name: "PageNotFound",
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
