<template>
    <div class="content">
        <h1 class="mb-3">{{fmAttributes.title}}</h1>
        <p class="mb-7 subtitle-1 divergent-5--text">{{fmAttributes.date}} - {{fmAttributes.duration}}</p>
        <div
            v-html="renderedMd"
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
            renderedMd: undefined,
            fmAttributes: {},
        };
    },
    async created () {
        const md = await this.fetchPost();
        const fmContent = this.loadMarkdown(md);
        this.redirectIfInvalidPost(fmContent);
    },
    methods: {
        async fetchPost () {
            const postPath = `${process.env.VUE_APP_DOMAIN}/posts/blog/${this.$route.params.filename}.md`;
            const res = await fetch(postPath);
            const md = await res.text();
            return md;
        },
        loadMarkdown (md) {
            const fmContent = fm(md);
            this.fmAttributes = fmContent.attributes;
            this.renderedMd = marked(fmContent.body);
            return fmContent;
        },
        redirectIfInvalidPost (fmContent) {
            if (Object.keys(fmContent.attributes).length === 0) {
                this.$router.push({ name: "PageNotFound" });
            }
        },
    },
};
</script>

<style scoped lang="scss">
@import "../styles/blog_post.scss";
</style>
