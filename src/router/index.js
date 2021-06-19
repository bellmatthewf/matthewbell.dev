
import "@/styles/nprogress_overrides.scss";
import NProgress from "nprogress";
import Vue from "vue";
import VueMeta from "vue-meta";
import VueRouter from "vue-router";

Vue.use(VueMeta);
Vue.use(VueRouter);

const Home = () => import("@/views/Home.vue");
const Blog = () => import("@/views/Blog.vue");
const BlogPost = () => import("@/views/BlogPost.vue");
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
    }, {
        path: "/blog/:filename",
        name: "BlogPost",
        component: BlogPost,
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

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        NProgress.start();
        NProgress.set(0.1);
    }
    next();
});

router.afterEach((to, from) => {
    NProgress.done();
});

export default router;
