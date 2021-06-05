import vuetify from "@/plugins/vuetify";
import router from "@/router";
import Vue from "vue";
import app from "./App.vue";

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    render: h => h(app),
}).$mount("#app");
