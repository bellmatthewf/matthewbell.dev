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
                :class=btn.class
                plain
                exact
                v-for="btn in navBtns"
                :key="btn.name"
                :elevation=btn.elevation
                :to="btn.route"
                @click="btn.onClick"
            >
                {{btn.text}}
            </v-btn>
        </ul>
    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "TheNavBar",
    data () {
        return {
            commonNavBtns: [
                { text: "Home", route: { name: "Home" }, class: "transparent black--text mx-3", elevation: "0", onClick: () => { } },
                { text: "About", route: { name: "About" }, class: "transparent black--text mx-3", elevation: "0", onClick: () => { } }
            ],
            loggedOutNavBtns: [
                { text: "Log In", route: { name: "LogIn" }, class: "transparent black--text mx-3", elevation: "0", onClick: () => { } },
                { text: "Sign Up", route: { name: "SignUp" }, class: "black white--text mx-3", elevation: "3", onClick: () => { } }
            ],
            loggedInNavBtns: [
                { text: "Log Out", route: { name: "Home" }, class: "transparent black--text mx-3", elevation: "0", onClick: this.logOutHandler }
            ]
        };
    },
    computed: {
        ...mapGetters("user", ["isLoggedIn"]),
        navBtns () {
            if (this.isLoggedIn) {
                return [...this.commonNavBtns, ...this.loggedInNavBtns];
            } else {
                return [...this.commonNavBtns, ...this.loggedOutNavBtns];
            }
        }
    },
    methods: {
        ...mapActions("user", ["logOut"]),
        logOutHandler () {
            this.logOut();
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
