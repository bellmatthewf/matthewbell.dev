<template>
    <div class="content mb-16">
        <h1 class="mb-1 blog-title">{{ fmAttributes.title }}</h1>
        <p class="mb-7 subtitle-1 divergent-5--text">
            {{ fmAttributes.date }} - {{ fmAttributes.duration }}
        </p>
        <div v-html="renderedMd" class="blog-post" ref="blogContent"></div>
        <router-link :to="{ name: 'Blog' }">
            <span class="my-7 back-button">Back</span>
        </router-link>
    </div>
</template>

<script>
import marked from "marked"
import fm from "front-matter"
import { endLoadAnimation } from "@/lib/loadAnimation"

export default {
    name: "BlogPost",
    metaInfo: {
        title: "Blog",
    },
    data() {
        return {
            renderedMd: "",
            fmAttributes: {},
        }
    },
    async created() {
        await this.initBlogPost()
        this.completeLoadAnimation()
    },
    methods: {
        async initBlogPost() {
            const md = await this.fetchPost()
            const fmContent = this.loadMarkdown(md)
            this.redirectIfInvalidPost(fmContent)
            this.openMarkdownLinksInNewTab()
        },
        async fetchPost() {
            const postPath = `${process.env.VUE_APP_DOMAIN}/posts/blog/${this.$route.params.filename}.md`
            const res = await fetch(postPath)
            const md = await res.text()
            return md
        },
        loadMarkdown(md) {
            const fmContent = fm(md)
            this.fmAttributes = fmContent.attributes
            this.renderedMd = marked(fmContent.body)
            return fmContent
        },
        redirectIfInvalidPost(fmContent) {
            if (Object.keys(fmContent.attributes).length === 0) {
                this.$router.push({ name: "PageNotFound" })
            }
        },
        async openMarkdownLinksInNewTab() {
            const markdownLinks =
                await this.$refs.blogContent.getElementsByTagName("a")
            markdownLinks.forEach((el) => {
                el.target = "_blank"
            })
        },
        completeLoadAnimation() {
            // Animation started by vue-router
            endLoadAnimation()
        },
    },
}
</script>

<style scoped lang="scss">
@import "../styles/blog_post.scss";

.blog-title {
    font-size: 36px;
}

.back-button {
    display: inline-block;
    color: var(--v-divergent-11-base);
    opacity: 0.4;
    font-weight: 500;
    text-decoration: none;
    border-bottom: 1px solid var(--v-divergent-1-base);
    transition: 0.3s ease-in-out;

    &:hover {
        opacity: 1;
        border-bottom: 1px solid var(--v-divergent-11-base);
    }
}
</style>
