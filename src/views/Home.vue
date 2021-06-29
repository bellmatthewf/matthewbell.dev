<template>
    <div class="content">
        <div
            v-html="renderedMd"
            class="blog-post"
        ></div>

        <div class="my-15 d-flex justify-center">
            <v-btn
                v-if="!loading"
                elevation="0"
                class="divergent-9 primary--text center"
                :class="margin"
                :to="featuredPost.link"
            >{{featuredPost.text}}</v-btn>
        </div>
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
            loading: true,
            renderedMd: "",
            featuredPost: {
                text: "FEATURED POST",
                link: { name: "BlogPost", params: { filename: "building-pet-scanning-booth" } },
            },
        };
    },
    computed: {
        margin () {
            switch (this.$vuetify.breakpoint.name) {
                case "xs": return "ml-n12";
                case "sm": return "ml-n14";
                case "md": return "ml-n16";
                case "lg": return "ml-n16";
                case "xl": return "ml-n16";
                default: return "ml-n16";
            }
        },
    },
    async created () {
        // eslint-disable-next-line no-console
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
            this.loading = false;
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
