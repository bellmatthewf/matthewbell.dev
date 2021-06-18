<template>
    <div>
        <div v-html="md"></div>
    </div>
</template>

<script>
import marked from "marked";
import fm from "front-matter";

export default {
    name: "BlogPost",
    data () {
        return {
            filename: this.$route.params.filename,
            md: undefined,
        };
    },
    async created () {
        const postPath = `${process.env.VUE_APP_DOMAIN}/posts/blog/${this.filename}.md`;
        const md = await fetch(postPath);
        const res = await md.text();
        const fmContent = fm(res);
        this.md = marked(fmContent.body);
    },
};
</script>

<style lang="scss">
@import "../styles/blog_post.scss";
</style>
