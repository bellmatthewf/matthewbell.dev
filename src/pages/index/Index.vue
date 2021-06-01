<template>
    <v-app>
        <TheNavBar />

        <v-main>
            <div class="d-flex flex-column content">
                <h1>Matt Bell</h1>
                <p>Hi, I'm Matt. I'm a Software Engineer working at Partnerstack</p>
            </div>

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
