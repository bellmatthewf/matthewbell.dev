import vuetify from "@/plugins/vuetify";
import Vue from "vue";
import contact from "./Contact.vue";

Vue.config.productionTip = false;

new Vue({
    vuetify,
    render: h => h(contact),
}).$mount("#contact");
