<template>
    <v-app>
        <TheNavBar />

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";

export default {
    name: "Home",
    components: { TheNavBar },
    created () {
        this.setupTheme();
    },
    methods: {
        setupTheme () {
            const cachedDarkMode = localStorage.getItem("dark-mode");
            if (cachedDarkMode != null) {
                this.$vuetify.theme.dark = (cachedDarkMode === "true");
                return;
            }

            const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (systemDarkMode != null) {
                this.$vuetify.theme.dark = systemDarkMode;
            }
        },
    },
};
</script>

<style lang="scss">
</style>
