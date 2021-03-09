<template>
    <div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { statusCodes } from "@/lib/statusCodes";

export default {

    async created () {
        const token = this.$route.params.token;
        if (this.isLoggedIn) {
            const res = await this.verifyEmail(token);
            if (res.status === statusCodes.ok) {
                this.$router.push({ name: "Home" });
            }
            // If verifying email fails, display failure message
        } else {
            this.$router.push({ name: "LogIn", query: { redirect: this.$route.fullPath } });
        }
    },
    computed: {
        ...mapGetters("user", ["isLoggedIn"])
    },
    methods: {
        ...mapActions("user", ["verifyEmail"])
    }
};
</script>

<style lang="scss" scoped>
</style>
