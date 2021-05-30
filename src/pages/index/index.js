import vuetify from "@/plugins/vuetify";
import Vue from "vue";
import index from "./Index.vue";

Vue.config.productionTip = false;

new Vue({
    vuetify,
    render: h => h(index),
}).$mount("#index");
