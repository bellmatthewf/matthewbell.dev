<template>
    <v-app>
        <NavigationBar />

        <v-main>
            <h1>HELLOoo</h1>
        </v-main>
    </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
    name: "Contact",
    components: { NavigationBar },
    computed: {
        theme () {
            return (this.$vuetify.theme.dark) ? "dark" : "light";
        },
    },
};
</script>
