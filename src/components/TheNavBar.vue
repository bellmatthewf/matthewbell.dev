<template>
    <v-app-bar
        app
        flat
        class="app-bar primary"
        height="88"
    >
        <div class="d-flex align-center">
            <a :href="routes.home">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="40"
                />
            </a>

            <a :href="routes.home">
                <v-img
                    alt="Vuetify Name"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="100"
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                    width="100"
                />
            </a>

        </div>

        <v-spacer></v-spacer>
        <div>
            <ul>
                <v-btn
                    plain
                    exact
                    medium
                    v-for="btn in navBtns"
                    :key=btn.name
                    :ripple="false"
                    :href=btn.url
                >
                    {{btn.text}}
                </v-btn>
                <v-btn
                    plain
                    exact
                    x-small
                    v-for="btn in navIcons"
                    :key=btn.icon
                    :ripple="false"
                    :href=btn.url
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <v-icon>{{btn.icon}}</v-icon>
                </v-btn>
                <v-btn
                    plain
                    exact
                    x-small
                    :ripple="false"
                    @click="toggleTheme"
                >
                    <v-icon>{{themeIcon}}</v-icon>
                </v-btn>
            </ul>
        </div>

    </v-app-bar>
</template>

<script>
import routes from "@/lib/routes";

export default {
    name: "TheNavBar",
    data () {
        return {
            routes,
            navBtns: [
                { text: "Home", url: routes.home },
                { text: "Blog", url: routes.blog },
                { text: "Contact", url: routes.contact },
            ],
            navIcons: [
                { icon: "mdi-github", url: "https://github.com/bellmatthewf" },
                { icon: "mdi-linkedin", url: "https://www.linkedin.com/in/matthewfbell/" },
            ],
        };
    },
    computed: {
        themeIcon () {
            if (this.$vuetify.theme.dark) {
                return "mdi-white-balance-sunny";
            } else {
                return "mdi-weather-night";
            }
        },
    },
    methods: {
        toggleTheme () {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem("vue-dark-mode", this.$vuetify.theme.dark);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
