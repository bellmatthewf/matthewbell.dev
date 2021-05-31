<template>
    <v-app>
        <TheNavBar />

        <v-main>
            <h1
                v-for="index in 100"
                :key="index"
            >Matthew Bell</h1>
        </v-main>
    </v-app>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";
import { initTheme } from "@/mixins/mixins";

export default {
    name: "Index",
    components: { TheNavBar },
    mixins: [initTheme],
};
</script>

<style lang="scss">
@import "../../styles/global";
</style>
