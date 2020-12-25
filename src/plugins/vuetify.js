import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                // primary: colors.purple.base,
                // secondary: colors.grey.darken1,
                // accent: colors.shades.black,
                // error: colors.red.accent3,
                background: colors.blueGrey.lighten5 // Not automatically applied
            },
            dark: {
                // primary: colors.blue.lighten3,
                // background: colors.indigo.base // If not using lighten/darken, use base to return hex
            }
        }
    }
});

Vue.use(Vuetify);

export default vuetify;
