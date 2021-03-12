<template>
    <v-app>
        <NotificationList />
        <NavigationBar />

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import NotificationList from "@/components/NotificationList";

export default {
    name: "App",
    components: { NavigationBar, NotificationList },
    computed: {
        theme () {
            return (this.$vuetify.theme.dark) ? "dark" : "light";
        }
    }
};
</script>
