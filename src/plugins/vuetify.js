import Vue from "vue"
import Vuetify from "vuetify/lib/framework"

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#FFFFFF",
                "divergent-1": "#E8E8E8",
                "divergent-2": "#D2D2D2",
                "divergent-3": "#BBBBBB",
                "divergent-4": "#A4A4A4",
                "divergent-5": "#8D8D8D",
                "divergent-6": "#777777",
                "divergent-7": "#606060",
                "divergent-8": "#494949",
                "divergent-9": "#323232",
                "divergent-10": "#1C1C1C",
                "divergent-11": "#050505",
            },
            dark: {
                primary: "#050505",
                "divergent-1": "#1C1C1C",
                "divergent-2": "#323232",
                "divergent-3": "#494949",
                "divergent-4": "#606060",
                "divergent-5": "#777777",
                "divergent-6": "#8D8D8D",
                "divergent-7": "#A4A4A4",
                "divergent-8": "#BBBBBB",
                "divergent-9": "#D2D2D2",
                "divergent-10": "#E8E8E8",
                "divergent-11": "#FFFFFF",
            },
        },
        options: {
            customProperties: true,
            // Themecache broken when used with custom properties
        },
    },
})

Vue.use(Vuetify)

export default vuetify
