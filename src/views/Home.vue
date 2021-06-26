<template>
    <div class="content">
        <div
            v-html="renderedMd"
            class="blog-post"
        ></div>
    </div>
</template>

<script>
import marked from "marked";
import { endLoadAnimation } from "@/lib/loadAnimation";

export default {
    name: "Home",
    metaInfo: {
        title: "Home",
    },
    data () {
        return {
            renderedMd: undefined,
        };
    },
    async created () {
        console.log("Can't you just assume that there are no errors?");
        await this.initIntroPost();
        this.completeLoadAnimation();
    },
    methods: {
        async initIntroPost () {
            const postPath = `${process.env.VUE_APP_DOMAIN}/posts/home.md`;
            const res = await fetch(postPath);
            const md = await res.text();
            this.renderedMd = marked(md);
        },
        completeLoadAnimation () {
            // Animation started by vue-router
            endLoadAnimation();
        },
    },
};
</script>

<style scoped lang="scss">
@import "../styles/blog_post.scss";
</style>
