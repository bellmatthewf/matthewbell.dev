<template>
    <div>
        <v-select
            v-model="filterValues"
            :items="blogDataTags"
            label="Filter by Tag"
            item-color="info"
            chips
            multiple
            solo
        />
        <PostLink
            v-for="post in filteredBlogData"
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
            filterValues: "",
        };
    },
    computed: {
        blogData () {
            // Injected by webpack
            return process.env.VUE_APP_BLOG_DATA;
        },
        blogDataTags () {
            const tagsList = new Set();
            this.blogData.forEach(postData => {
                postData.tags.forEach(tag => {
                    tagsList.add(tag);
                });
            });
            return Array.from(tagsList);
        },
        filteredBlogData () {
            if (!this.filterValues.length) {
                return this.blogData;
            }
            return this.blogData.filter(postData => {
                return this.filterValues.some(filterVal => postData.tags.includes(filterVal));
            });
        },
    },
};
</script>

<style lang="scss">
</style>
