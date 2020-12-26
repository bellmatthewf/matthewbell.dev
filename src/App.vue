<template>
    <v-app>
        <NavigationBar />

        <v-main>
            <HelloWorld />
        </v-main>
    </v-app>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import NavigationBar from "@/components/NavigationBar";

export default {
    name: "App",
    components: { NavigationBar, HelloWorld },
    data () {
        return {};
    },
    computed: {
        theme () {
            return (this.$vuetify.theme.dark) ? "dark" : "light";
        }
    }
};
</script>
