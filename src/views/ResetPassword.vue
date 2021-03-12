<template>
    <v-form
        @submit.prevent="submitHandler"
        class="pa-10"
        ref="form"
        lazy-validation
    >

        <v-text-field
            @input="password.error = ''"
            v-model="password.value"
            :counter="128"
            :rules="passwordRules"
            :error-messages="password.error"
            label="Password"
            type="password"
            :loading="loading"
            required
            validate-on-blur
        ></v-text-field>

        <v-text-field
            @input="confirmPassword.error = ''"
            v-model="confirmPassword.value"
            :counter="128"
            :rules="confirmPasswordRules"
            :error-messages="confirmPassword.error"
            label="Confirm password"
            type="password"
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
        </div>

    </v-form>
</template>

<script>
import { mapActions } from "vuex";
import { statusCodes } from "@/lib/statusCodes";

export default {
    data () {
        return {
            loading: false,
            password: { value: "", error: "" },
            confirmPassword: { value: "", error: "" },
            passwordRules: [
                value => !!value || "Password is required",
                value => value.length >= 8 || "Password must be at least 8 characters",
                value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value) || "Password must contain at least one uppercase letter, one lowercase letter, one number"
            ],
            confirmPasswordRules: [
                value => value === this.password.value || "Passwords must match"
            ]
        };
    },
    computed: {
        resetPasswordForm () {
            return {
                password: this.password.value,
                confirmPassword: this.confirmPassword.value
            };
        }
    },
    methods: {
        ...mapActions("user", ["resetPassword"]),
        ...mapActions("notification", ["addNotification"]),
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
            const token = this.$route.params.token;
            const res = await this.resetPassword({ resetPasswordForm: this.resetPasswordForm, token });
            this.loading = false;
            return res;
        },
        handleResponse (res) {
            if (res.status === statusCodes.unprocesssableEntity) {
                this.displayErrors(res);
            } else if (res.status === statusCodes.ok) {
                this.$router.push(this.$route.query.redirect || { name: "LogIn" });
                this.addNotification({ message: "Password reset. Please log in with new password.", type: "success" });
            }
        },
        displayErrors (res) {
            const errorsDict = res.data.errors;
            for (const field in errorsDict) {
                const errorMsg = errorsDict[field][0];
                try {
                    this[field].error = errorMsg;
                } catch (err) {
                    console.log(err);
                    // Show error processing request in banner
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
