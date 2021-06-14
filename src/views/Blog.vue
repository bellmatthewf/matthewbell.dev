<template>
    <div>
        <p>MAIN PAGE </p>
        <div v-html="md"></div>
    </div>
</template>

<script>
import marked from "marked";
import fm from "front-matter";

export default {
    name: "Blog",
    data () {
        return {
            md: undefined,
        };
    },
    async created () {
        // console.log(md);
        // console.log(process.env.NODE_ENV);
        console.log(process.env.blogData);

        // Injected by webpack
        // eslint-disable-next-line no-undef
        // console.log(TWO);

        // console.log(TWo);

        const md = await fetch("http://localhost:8081/posts/home.md");
        const res = await md.text();
        // console.log(res);
        const fmContent = fm(res, { allowUnsafe: true });
        // console.log(fmContent);
        // console.log(fmContent.attributes);
        // console.log(fmContent);
        // const md = fs.readFileSync("home.md", "utf-8");
        // console.log(md);
        this.md = marked(fmContent.body);
    },
};
</script>

<style lang="scss">
</style>
