<template>
    <v-app :class="classObject">
        <TheNavBar />

        <v-main>
            <h1>Matthew Bell</h1>
        </v-main>
    </v-app>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";

export default {
    name: "Index",
    components: { TheNavBar },
    computed: {
        classObject () {
            return (this.$vuetify.theme.dark) ? "dark" : "light";
        },
    },
};
</script>

<style lang="scss">
/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #121212;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgb(44, 44, 44);

    /* Handle on hover */
    &:hover {
        background: rgb(150, 38, 141);
    }
}
</style>
