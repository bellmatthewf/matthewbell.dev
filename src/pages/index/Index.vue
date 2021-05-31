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

export default {
    name: "Index",
    components: { TheNavBar },
    created () {
        this.initTheme();
    },
    methods: {
        async initTheme () {
            const cachedDarkMode = localStorage.getItem("vue-dark-mode");
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
    // computed: {
    //     isDark () {
    //         return this.$vuetify.theme.isDark;
    //     },
    // },
};
</script>

<style lang="scss">
$red: red;

@function set-color($color) {
    @if (lightness($color) > 50) {
        // @return darken($color, 50%);
        @return $color;
    } @else {
        @return lighten($color, 0.9);
        @return $color;
    }
}

:root {
    background: var(--v-primary-base);
    scrollbar-color: var(--v-divergent-base) var(--v-primary-base);
    scrollbar-width: thin;
}

/* width */
::-webkit-scrollbar {
    width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
    background: var(--v-primary-base);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: var(--v-divergent-base);
    opacity: 0;

    /* Handle on hover */
    &:hover {
        background: var(--v-more-divergent-base);
    }
}
</style>
