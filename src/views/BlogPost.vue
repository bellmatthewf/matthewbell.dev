<template>
    <div class="content">
        <h1 class="mb-3">{{fmAttributes.title}}</h1>
        <p class="mb-7 subtitle-1 divergent-5--text">{{fmAttributes.date}} - {{fmAttributes.duration}}</p>
        <div
            v-html="md"
            class="blog-post mb-16"
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
            fmAttributes: {},
        };
    },
    async created () {
        const postPath = `${process.env.VUE_APP_DOMAIN}/posts/blog/${this.$route.params.filename}.md`;
        const md = await fetch(postPath);
        const res = await md.text();
        const fmContent = fm(res);

        this.fmAttributes = fmContent.attributes;
        this.md = marked(fmContent.body);
    },
};
</script>

<style scoped lang="scss">
@import "../styles/blog_post.scss";
</style>
