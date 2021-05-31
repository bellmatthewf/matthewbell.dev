const initTheme = {
    created () {
        this.initTheme();
    },
    methods: {
        initTheme () {
            const cachedDarkMode = localStorage.getItem("vue-dark-mode");
            if (cachedDarkMode != null) {
                this.$vuetify.theme.dark = (cachedDarkMode === "true");
                return;
            }

            const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (systemDarkMode != null) {
                this.$vuetify.theme.dark = systemDarkMode;
            }
        },
    },
};

export { initTheme };
