<template>
    <div>
        <PostLink
            v-for="post in blogData"
            :key="post.filename"
            :filename="post.filename"
            :title="post.title"
            :date="post.date"
            :duration="post.duration"
            :tags="post.tags"
        />
    </div>
</template>

<script>
import PostLink from "@/components/PostLink";

export default {
    name: "Blog",
    components: {
        PostLink,
    },
    data () {
        return {
            md: undefined,
        };
    },
    computed: {
        blogData () {
            // Injected by webpack
            return process.env.VUE_APP_BLOG_DATA;
        },
    },
};
</script>

<style lang="scss">
</style>
