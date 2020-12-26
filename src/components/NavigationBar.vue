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
                class="transparent mx-3"
                exact
                v-for="btn in navBtns"
                :key="btn.name"
                elevation="0"
                :to="btn.route"
            >
                {{btn.label}}
            </v-btn>
            <v-btn
                elevation="3"
                exact
                dark
                class="mx-3"
                :to="{name: 'SignUp'}"
            >
                Sign Up
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
                { label: "Home", route: { name: "Home" } },
                { label: "About", route: { name: "About" } },
                { label: "Sign In", route: { name: "SignIn" } }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
