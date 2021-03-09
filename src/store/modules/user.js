import api from "@/lib/api";
import { CaseConverter } from "@/lib/caseConverter";
import { statusCodes } from "@/lib/statusCodes";

const initialState = {
    isLoggedIn: false,
    user: null
};

const state = { ...initialState };

const getters = {
    isLoggedIn (state) {
        return state.isLoggedIn;
    }
};

const mutations = {
    setUser (state, user) {
        state.user = user;
    },
    setIsLoggedIn (state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn;
    }
};

const actions = {
    async signUp ({ commit }, payload) {
        const caseConverter = new CaseConverter();
        payload = caseConverter.convertCamelToSnake(payload);
        payload = JSON.stringify(payload);
        let res = await api.post("/auth/sign-up", payload);
        res = caseConverter.convertSnakeToCamel(res);
        if (res.status === statusCodes.created) {
            commit("setUser", res.data.user);
            commit("setIsLoggedIn", res.data.isLoggedIn);
        }
        return res;
    },
    async logIn ({ commit }, payload) {
        const caseConverter = new CaseConverter();
        payload = caseConverter.convertCamelToSnake(payload);
        payload = JSON.stringify(payload);
        let res = await api.post("/auth/log-in", payload);
        res = caseConverter.convertSnakeToCamel(res);
        if (res.status === statusCodes.ok) {
            commit("setUser", res.data.user);
            commit("setIsLoggedIn", res.data.isLoggedIn);
        }
        return res;
    },
    async logOut ({ commit }, payload) {
        const res = await api.post("/auth/log-out", payload);
        if (res.status === statusCodes.ok) {
            commit("setUser", null);
            commit("setIsLoggedIn", false);
        }
        return res;
    },
    async verifyEmail ({ commit }, token) {
        const res = await api.get(`/auth/verify-email/${token}`);
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
