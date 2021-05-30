import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

function getDarkMode () {
    const storedDarkMode = window.localStorage.getItem("vue-dark-mode");

    if (storedDarkMode) {
        return storedDarkMode;
    } else {
        return false;
    }
}

const vuetify = new Vuetify({
    theme: {
        dark: getDarkMode(),
    },
    themes: {
        light: {
            // primary: colors.purple.base,
            // secondary: colors.grey.darken1,
            // accent: colors.shades.black,
            // error: colors.red.accent3,
            // background: colors.blueGrey.lighten5, // Not automatically applied
        },
        dark: {
            primary: colors.blue.lighten3,
            background: colors.blue.base, // If not using lighten/darken, use base to return hex
        },
    },
});

Vue.use(Vuetify);

export default vuetify;
