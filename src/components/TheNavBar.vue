<template>
    <div>
        <v-app-bar
            app
            flat
            class="primary"
            height="88"
        >
            <router-link :to="{name: 'Home'}">
                <v-img
                    v-show="isDark"
                    src="/static/logo_dark.svg"
                    alt="logo"
                    transition="scale-transition"
                    width="40"
                    contain
                />
                <v-img
                    v-show="!isDark"
                    src="/static/logo.svg"
                    alt="logo"
                    transition="scale-transition"
                    width="40"
                    contain
                />
            </router-link>

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
                        :to=btn.route
                        class="hidden-xs-only"
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
                        :href=btn.route
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
                    <v-btn
                        plain
                        exact
                        x-small
                        :ripple="false"
                        @click="showNavDrawer = !showNavDrawer"
                        class="hidden-sm-and-up"
                    >
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </ul>
            </div>

        </v-app-bar>
        <v-navigation-drawer
            app
            disable-resize-watcher
            v-model="showNavDrawer"
            class="primary"
        >
            <div class="mt-16 d-flex flex-column">
                <h2 class="mb-5 pl-10">Menu</h2>

                <ul class="d-flex flex-column align-start">
                    <v-btn
                        plain
                        exact
                        medium
                        v-for="btn in navBtns"
                        :key=btn.name
                        :ripple="false"
                        :to=btn.route
                    >
                        <v-icon class="pr-3">{{btn.icon}}</v-icon> {{btn.text}}
                    </v-btn>
                </ul>
            </div>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "TheNavBar",
    data () {
        return {
            showNavDrawer: false,
            navBtns: [
                { text: "Home", icon: "mdi-home", route: { name: "Home" } },
                { text: "Blog", icon: "mdi-book-open", route: { name: "Blog" } },
                { text: "Contact", icon: "mdi-email", route: { name: "Contact" } },
            ],
            navIcons: [
                { icon: "mdi-github", route: "https://github.com/bellmatthewf" },
                { icon: "mdi-linkedin", route: "https://www.linkedin.com/in/matthewfbell/" },
            ],
        };
    },
    computed: {
        isDark () {
            return this.$vuetify.theme.dark;
        },
        themeIcon () {
            if (this.isDark) {
                return "mdi-white-balance-sunny";
            } else {
                return "mdi-weather-night";
            }
        },
    },
    methods: {
        toggleTheme () {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem("dark-mode", this.$vuetify.theme.dark);
        },
    },
};
</script>
