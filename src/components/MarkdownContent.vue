<template>
    <div>

        <v-skeleton-loader
            class="mx-auto"
            type="image@4"
            :height="height"
            :loading="loading"
        >
            <div
                v-html="renderedMd"
                class="blog-post"
            />
        </v-skeleton-loader>
    </div>
</template>

<script>
export default {
    name: "MarkdownContent",
    props: {
        renderedMd: {
            required: false,
            type: String,
        },
        loading: {
            required: false,
            type: Boolean,
            default: false,
        },
        height: {
            required: false,
            type: String,
            default: "70vh",
        },
    },
};
</script>

<style scoped lang="scss">
@import "../styles/blog_post.scss";
</style>
