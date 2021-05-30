<template>
    <v-app>
        <NavigationBar />

        <v-main>
            <h1>Matthew Bell</h1>
        </v-main>
    </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
    name: "Index",
    components: { NavigationBar },
    computed: {
        theme () {
            return (this.$vuetify.theme.dark) ? "dark" : "light";
        },
    },
};
</script>
