<template>
    <div class="content">
        <h1 class="mb-8"><span class="divergent-4--text">My </span>Writing</h1>
        <PostLink
            v-for="post in filteredPosts"
            :key="post.filename"
            :filename="post.filename"
            :title="post.title"
            :date="post.date"
            :duration="post.duration"
            :tags="post.tags"
            @chipClicked="handleChipClicked"
        />
    </div>
</template>

<script>
import PostLink from "@/components/PostLink";
import { isSubsetOf, sortArrayOfObjects } from "@/lib/utils";

export default {
    name: "Blog",
    components: {
        PostLink,
    },
    data () {
        return {
            posts: {},
            md: undefined,
            activeTagNames: [],
            activeColor: "#AEC6CF",
        };
    },
    created () {
        // Injected by webpack
        const posts = process.env.VUE_APP_BLOG_DATA;
        posts.forEach(post => {
            post.tags = post.tags.map(tag => {
                return { name: tag, isActive: false };
            });
        });
        sortArrayOfObjects(posts, "date", true);
        this.posts = posts;
    },
    computed: {
        filteredPosts () {
            if (!(this.activeTagNames.length)) {
                return this.posts;
            }
            return this.posts.filter(post => {
                const postTagsArr = post.tags.map(tag => tag.name);
                return isSubsetOf(this.activeTagNames, postTagsArr);
            });
        },
    },
    methods: {
        handleChipClicked (tagName) {
            this.toggleActiveChip(tagName);
            this.toggleChipColour(tagName);
        },
        toggleActiveChip (tagName) {
            const idx = this.activeTagNames.indexOf(tagName);
            if (idx >= 0) {
                this.activeTagNames.splice(idx, 1);
                return;
            }
            this.activeTagNames.push(tagName);
        },
        toggleChipColour (tagName) {
            this.posts.forEach(post => {
                post.tags.forEach(tag => {
                    if (tag.name === tagName) {
                        tag.isActive = !tag.isActive;
                    }
                });
            });
        },
    },
};
</script>
