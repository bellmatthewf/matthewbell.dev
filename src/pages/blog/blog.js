import vuetify from "@/plugins/vuetify";
import Vue from "vue";
import blog from "./Blog.vue";

Vue.config.productionTip = false;

new Vue({
    vuetify,
    render: h => h(blog),
}).$mount("#blog");
