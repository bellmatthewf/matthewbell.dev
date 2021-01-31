import api from "@/lib/api";
import { CaseConverter } from "@/lib/caseConverter";

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
        const caseConverter = new CaseConverter();
        payload = caseConverter.convertCamelToSnake(payload);
        payload = JSON.stringify(payload);
        let res = await api.post("/auth/sign-up", payload);
        res = caseConverter.convertSnakeToCamel(res);
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
