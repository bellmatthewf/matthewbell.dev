<template>
    <div>
        <p>{{postName}}</p>

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
            postName: this.$route.params.postName,
            md: undefined,
        };
    },
    async created () {
        // console.log(process.env.blogData);

        const md = await fetch("http://localhost:8081/posts/home.md");
        const res = await md.text();
        const fmContent = fm(res, { allowUnsafe: true });
        this.md = marked(fmContent.body);
    },
};
</script>

<style lang="scss">
@import "../styles/blog_post.scss";
</style>
