<template>
    <div class="mb-10">
        <p class="my-0">{{title}}</p>
        <p class="my-0">{{date}} - {{duration}}</p>
        <v-chip
            v-for="tag in tags"
            :key=tag
            :color=allowedTags[tag]
            class="mx-1"
            small
        >
            {{tag}}
        </v-chip>
    </div>
</template>

<script>
const allowedTags = {
    Reflection: "green",
    "Book Review": "#123422",
};

export default {
    name: "PostLink",
    data () {
        return {
            allowedTags,
        };
    },
    props: {
        filename: {
            type: String,
            require: true,
        },
        title: {
            type: String,
            require: true,
        },
        date: {
            type: String,
            require: true,
        },
        duration: {
            type: String,
            require: true,
        },
        tags: {
            type: Array,
            require: false,
            validator: function (arr) {
                arr.forEach(tag => {
                    if (!(tag in allowedTags)) {
                        return false;
                    }
                });
                return true;
            },
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
