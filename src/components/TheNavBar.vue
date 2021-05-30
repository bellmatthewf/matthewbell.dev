<template>
    <v-app-bar
        app
        flat
        class="app-bar transparent"
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
                    v-for="btn in navBtns"
                    :ripple="false"
                    :key=btn.name
                    :href=btn.url
                    :target="btn.icon ? '_blank' : ''"
                    :rel="btn.icon ? 'noopener noreferrer' : ''"
                >
                    <v-icon v-if="btn.icon">{{btn.icon}}</v-icon>
                    <span v-else>{{btn.text}}</span>
                </v-btn>
                <v-btn
                    plain
                    exact
                    :ripple="false"
                    @click="toggleDarkMode"
                >
                    <v-icon>{{lightOrDarkIcon}}</v-icon>
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
                { icon: "mdi-github", url: "https://github.com/bellmatthewf" },
                { icon: "mdi-linkedin", url: "https://www.linkedin.com/in/matthewfbell/" },
            ],
        };
    },
    computed: {
        isDark () {
            return this.$vuetify.theme.dark;
        },
        lightOrDarkIcon () {
            if (this.isDark) {
                return "mdi-white-balance-sunny";
            } else {
                return "mdi-weather-night";
            }
        },
    },
    methods: {
        toggleDarkMode () {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            window.localStorage.setItem("vue-dark-mode", this.$vuetify.theme.dark);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
