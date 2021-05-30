<template>
    <v-app-bar
        app
        flat
        class="app-bar white pa-5"
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
                class="transparent black--text"
                :key=btn.name
                :href=btn.url
            >
                <v-icon v-if="btn.icon">{{btn.icon}}</v-icon>
                <span v-else>{{btn.text}}</span>
            </v-btn>
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
                { text: "Home", url: routes.home },
                { text: "Blog", url: routes.blog },
                { text: "Contact", url: routes.contact },
                { icon: "mdi-github" },
                { icon: "mdi-linkedin" },
                { icon: "mdi-weather-night" },
                { icon: "mdi-white-balance-sunny" },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
</style>
