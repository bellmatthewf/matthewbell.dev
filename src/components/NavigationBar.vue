<template>
    <v-app-bar
        app
        flat
        class="app-bar primary"
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
                exact
                v-for="btn in navBtns"
                :key="btn.name"
                :elevation=btn.elevation
                :to="btn.route"
            >
                {{btn.text}}
            </v-btn>
        </ul>
    </v-app-bar>
</template>

<script>
export default {
    name: "TheNavBar",
    data () {
        return {
            navBtns: [
                { text: "Home", route: { name: "Home" }, class: "transparent white--text mx-3", elevation: "0" },
                { text: "About", route: { name: "About" }, class: "transparent white--text mx-3", elevation: "0" },
                { text: "Sign In", route: { name: "SignIn" }, class: "transparent white--text mx-3", elevation: "0" },
                { text: "Sign Up", route: { name: "SignUp" }, class: "black white--text mx-3", elevation: "3" }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
