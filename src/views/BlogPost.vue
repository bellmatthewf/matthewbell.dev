<template>
    <div>
        <p>{{postName}}</p>

        <span v-html="md"></span>
    </div>
</template>

<script>
import marked from "marked";
import md from "./home.md";

export default {
    name: "BlogPost",
    data () {
        return {
            postName: this.$route.params.postName,
            md: undefined,
        };
    },
    created () {
        console.log(md);
        // const md = fs.readFileSync("home.md", "utf-8");
        // console.log(md);
        this.md = marked(md);
    },
};
</script>

<style lang="scss" scoped>
</style>
