<template>
    <v-app>
        <TheNavBar />

        <v-main>
            <h1>HELLOoo</h1>
        </v-main>
    </v-app>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";
import { initTheme } from "@/mixins/mixins";

export default {
    name: "Blog",
    components: { TheNavBar },
    mixins: [initTheme],
};
</script>

<style lang="scss">
@import "../../styles/global";
</style>
