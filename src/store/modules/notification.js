const initialState = {
    notifications: []
};

const state = () => ({
    ...initialState
});

const getters = {
    notifications (state) { return state.notifications; }
};

const mutations = {
    addNotification (state, notification) {
        state.notifications.push({
            id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
            ...notification

        });
    },
    removeNotification (state, notificationToRemove) {
        state.notifications = state.notifications.filter((notification) => {
            return notification.id !== notificationToRemove.id;
        });
    }
};

const actions = {
    // Notification template: {message: str, type: str}
    addNotification ({ commit }, notification) {
        commit("addNotification", notification);
    },
    removeNotification ({ commit }, notification) {
        commit("removeNotification", notification);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
