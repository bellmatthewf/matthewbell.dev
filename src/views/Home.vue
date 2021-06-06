<template>
    <div>
        <p>Hello world</p>
        <!-- <span v-html="res"></span> -->
    </div>
</template>

<script>
// import { markdownData } from "../posts/home.md";
// export default {
//     name: "Home",
//     data () {
//         return {
//             res: undefined,
//         };
//     },
//     created () {
//         console.log(markdownData);
//     },
// };

export default {
    name: "Home",
    data () {
        return {
            fileContent: null,
            rawContent: null,
        };
    },
    created () {
        //  const fileToRender = `./assets/documentation/general/welcome.md`;
        // const rawContent = ""; // Read the file content using fileToRender
        // this.fileContent = "### marked(rawContent) should get executed";
        // this.getContent(markdownData);
    },
    methods: {
        getContent (md) {
            this.fileContent = md;
        },
    },
};
</script>

<style lang="scss">
</style>
