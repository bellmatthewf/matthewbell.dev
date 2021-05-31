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
                divergent: "#e2e2e2",
                "more-divergent": "#c6c6c6",
            },
            dark: {
                primary: "#050505",
                divergent: "#1e1e1e",
                "more-divergent": "#333333",
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
