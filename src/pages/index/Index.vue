<template>
    <v-app>
        <TheNavBar />

        <v-main>
            <h1>Matthew Bell</h1>
        </v-main>
    </v-app>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";

export default {
    name: "Index",
    components: { TheNavBar },
    computed: {
        theme () {
            return (this.$vuetify.theme.dark) ? "dark" : "light";
        },
    },
};
</script>
