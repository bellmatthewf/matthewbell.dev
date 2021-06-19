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
import fm from "front-matter";

export default {
    name: "BlogPost",
    metaInfo: {
        title: "Blog",
    },
    data () {
        return {
            md: undefined,
        };
    },
    async created () {
        const postPath = `${process.env.VUE_APP_DOMAIN}/posts/blog/${this.$route.params.filename}.md`;
        const md = await fetch(postPath);
        const res = await md.text();
        const fmContent = fm(res);
        this.md = marked(fmContent.body);
    },
};
</script>

<style scoped lang="scss">
@import "../styles/blog_post.scss";
</style>
