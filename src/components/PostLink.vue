<template>
    <div>

    </div>
</template>

<script>
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
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
