import api from "@/lib/api";
import { CaseConverter } from "@/lib/caseConverter";
import { statusCodes } from "@/lib/statusCodes";

const initialState = {
    isLoggedIn: false,
    user: null
};

const state = { ...initialState };

const getters = {
};

const mutations = {
    setUser (state, user) {
        console.log(user);
        state.user = user;
    },
    setIsLoggedIn (state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn;
    }
};

const actions = {
    async signUpUser ({ commit }, payload) {
        const caseConverter = new CaseConverter();
        payload = caseConverter.convertCamelToSnake(payload);
        payload = JSON.stringify(payload);
        let res = await api.post("/auth/sign-up", payload);
        res = caseConverter.convertSnakeToCamel(res);
        console.log(res);
        if (res.status === statusCodes.created) {
            commit("setUser", res.data.user);
            commit("setIsLoggedIn", res.data.isLoggedIn);
        }
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
