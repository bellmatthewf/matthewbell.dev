import api from "@/lib/api";

const initialState = {
    isLoggedIn: false,
    data: null
};

const state = { ...initialState };

const getters = {
};

const mutations = {

};

const actions = {
    async signUpUser (context, payload) {
        const data = JSON.stringify(payload);
        const res = await api.post("/auth/sign-up", data);
        return res;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
