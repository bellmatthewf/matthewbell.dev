<template>
    <v-app-bar
        app
        flat
        class="app-bar white pa-5 mb-10 red"
    >
        <div class="d-flex align-center">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                transition="scale-transition"
                width="40"
            />

            <v-img
                alt="Vuetify Name"
                class="shrink mt-1 hidden-sm-and-down"
                contain
                min-width="100"
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                width="100"
            />
        </div>

        <v-spacer></v-spacer>

        <ul>
            <v-btn
                plain
                exact
                v-for="btn in navBtns"
                :class=btn.class
                :key="btn.name"
                :href=btn.url
            >
                {{btn.text}}
            </v-btn>
            <v-icon>mdi-github</v-icon>
            <v-icon>mdi-linkedin</v-icon>
            <v-icon>mdi-weather-night</v-icon>
            <v-icon>mdi-white-balance-sunny</v-icon>
        </ul>
    </v-app-bar>
</template>

<script>
import routes from "@/lib/routes";

export default {
    name: "TheNavBar",
    data () {
        return {
            navBtns: [
                { text: "Home", url: routes.home, class: "transparent black--text mx-3 active-class" },
                { text: "Blog", url: routes.blog, class: "transparent black--text mx-3" },
                { text: "Contact", url: routes.contact, class: "transparent black--text mx-3" },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
</style>
