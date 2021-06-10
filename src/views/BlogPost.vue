<template>
    <div>
        <p>{{postName}}</p>

        <div
            class="content"
            v-html="md"
        ></div>
    </div>
</template>

<script>
// import marked from "marked";

export default {
    name: "BlogPost",
    data () {
        return {
            postName: this.$route.params.postName,
            md: undefined,
        };
    },
    // async created () {
    //     // console.log(md);

    //     const md = await fetch("http://localhost:8081/posts/home.md", { method: "GET" });
    //     const res = await md.content;
    //     console.log(md);
    //     console.log(res);
    //     // const md = fs.readFileSync("home.md", "utf-8");
    //     // console.log(md);
    //     // this.md = marked(md);
    // },
};
</script>

<style lang="scss">
@import "../styles/blog_post.scss";
</style>
