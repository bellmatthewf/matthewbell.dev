import vuetify from "@/plugins/vuetify"
import router from "@/router"
import Vue from "vue"
import VueGtag from "vue-gtag"
import app from "./App.vue"

Vue.use(VueGtag, {
    config: { id: "G-2MF4X5HE1T" },
})

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    render: (h) => h(app),
}).$mount("#app")
