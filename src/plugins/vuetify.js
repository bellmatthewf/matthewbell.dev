import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#FFF",
                // secondary: colors.grey.darken1,
                // accent: colors.shades.black,
                // error: colors.red.accent3,
                "divergent-1": "#e2e2e2",
                "divergent-2": "#c6c6c6",
                "divergent-3": "#ababab",
                "divergent-4": "#919191",
                "divergent-5": "#050505",

            },
            dark: {
                primary: "#050505",
                "divergent-1": "#1e1e1e",
                "divergent-2": "#333333",
                "divergent-3": "#4a4a4a",
                "divergent-4": "#626262",
                "divergent-5": "#FFF",

            },
        },
        options: {
            customProperties: true,
            // Themecache broken when used with custom properties
        },
    },
});

Vue.use(Vuetify);

export default vuetify;
