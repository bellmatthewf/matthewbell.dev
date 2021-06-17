<template>
    <div class="mb-10">
        <p class="my-0">{{title}}</p>
        <p class="my-0">{{date}} - {{duration}}</p>
        <v-chip
            v-for="tag in tags"
            :key=tag
            class="mr-1"
            small
        >
            {{tag}}
        </v-chip>
    </div>
</template>

<script>
const allowedTags = [
    "Reflection",
    "Book Review",
    "Technical",
    "Non-technical",
];

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
            validator: arr => {
                arr.forEach(tag => {
                    if (!(allowedTags.includes(tag))) {
                        throw new Error("Invalid blog tag");
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
