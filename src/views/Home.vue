<template>
    <div class="content">
        <div
            v-html="md"
            class="blog-post"
        ></div>
    </div>
</template>

<script>
import marked from "marked";

export default {
    name: "Home",
    data () {
        return {
            md: undefined,
        };
    },
    async created () {
        console.log("Can't you just assume that there are no errors?");
        const postPath = `${process.env.VUE_APP_DOMAIN}/posts/home.md`;
        const md = await fetch(postPath);
        const res = await md.text();
        this.md = marked(res);
    },
};
</script>

<style scoped lang="scss">
@import "../styles/blog_post.scss";
</style>
