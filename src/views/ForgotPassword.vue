<template>
    <v-form
        @submit.prevent="submitHandler"
        class="pa-10"
        ref="form"
        lazy-validation
    >
        <v-text-field
            @input="email.error = ''"
            v-model="email.value"
            :counter="254"
            :error-messages="email.error"
            label="E-mail"
            :loading="loading"
            required
            validate-on-blur
        ></v-text-field>

        <div class="my-5">
            <v-btn
                color="success"
                class="mr-4"
                type="submit"
                :loading="loading"
            >
                Submit
            </v-btn>
            <v-btn
                color="primary"
                class="mr-4"
                :to="{name:'SignUp'}"
            >
                Need an account?
            </v-btn>
            <v-btn
                color="primary"
                class="mr-4"
                text
                :to="{name:'LogIn'}"
            >
                Remember your password?
            </v-btn>
        </div>

    </v-form>
</template>

<script>
import { statusCodes } from "@/lib/statusCodes";
import { mapActions } from "vuex";

export default {
    data () {
        return {
            loading: false,
            email: { value: "", error: "" }
        };
    },
    computed: {
        resetPasswordRequestForm () {
            return {
                email: this.email.value
            };
        }
    },
    methods: {
        ...mapActions("notification", ["addNotification"]),
        ...mapActions("user", ["resetPasswordRequest"]),
        validate () {
            return this.$refs.form.validate();
        },
        async submitHandler () {
            const formIsValid = this.validate();
            if (formIsValid) {
                const res = await this.sendData();
                this.handleResponse(res);
            }
        },
        async sendData () {
            this.loading = true;
            const res = await this.resetPasswordRequest(this.resetPasswordRequestForm);
            this.loading = false;
            return res;
        },
        handleResponse (res) {
            if (res.status === statusCodes.badRequest) {
                this.addNotification({ message: "Could not send verification email. Please try again", type: "error" });
            }
            if (res.status === statusCodes.ok) {
                this.$router.push(this.$route.query.redirect || { name: "Home" });
                this.addNotification({ message: `Password reset email sent to ${this.email.value}`, type: "success" });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
