<template>
    <div class="mb-10">
        <router-link :to="{ name: 'BlogPost', params: { filename } }">
            <h3 class="my-0 blog-title divergent-11--text">{{ title }}</h3>
        </router-link>
        <h6 class="mb-0 subtitle-2">
            <span class="divergent-6--text">{{ date }}</span>
            <span class="divergent-4--text"> - {{ duration }}</span>
        </h6>
        <v-chip
            v-for="tag in sortedTags"
            :key="tag.name"
            @click="emitChipClicked(tag.name)"
            class="mr-1"
            :color="getColor(tag.isActive)"
            small
        >
            {{ tag.name }}
        </v-chip>
    </div>
</template>

<script>
import { sortArrayOfObjectsByKey } from "@/lib/utils"

const allowedTags = [
    "Reflection",
    "Book Review",
    "Project",
    "Python",
    "SQL",
    "Vue",
    "Javascript",
    "3D Printing",
    "Analytics",
]

export default {
    name: "PostLink",
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
            validator: (arr) => {
                arr.forEach((tag) => {
                    if (!allowedTags.includes(tag.name)) {
                        throw new Error(`Invalid blog tag: '${tag.name}'`)
                    }
                })
                return true
            },
        },
    },
    computed: {
        sortedTags() {
            return sortArrayOfObjectsByKey(this.tags, "name")
        },
    },
    methods: {
        emitChipClicked(tagName) {
            this.$emit("chipClicked", tagName)
        },
        getColor(isActive) {
            return isActive ? "grey" : ""
        },
    },
}
</script>

<style lang="scss" scoped>
.blog-title {
    opacity: 0.7;
    transition: all 0.2s ease;
    line-height: 1.15;

    &:hover {
        opacity: 1;
    }
}

.v-chip {
    opacity: 0.7;

    &::v-deep .v-chip__content {
        cursor: pointer;
    }
}
</style>
