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
            :rules="emailRules"
            :error-messages="email.error"
            label="E-mail"
            :loading="loading"
            required
            validate-on-blur
        ></v-text-field>

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

        <v-btn
            color="success"
            class="mr-4"
            type="submit"
            :loading="loading"
        >
            Submit
        </v-btn>
    </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data () {
        return {
            loading: false,
            email: { value: "bell.matthewf", error: "" },
            password: { value: "Hellorial1@", error: "" },
            confirmPassword: { value: "Hellorial1@2", error: "" },
            emailRules: [
                value => !!value || "E-mail is required",
                value => /.+@.+\..+/.test(value) || "E-mail must be valid"
            ],
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
        signUpForm () {
            return {
                email: this.email.value,
                password: this.password.value,
                confirmPassword: this.confirmPassword.value
            };
        }
    },
    methods: {
        ...mapActions("user", ["signUpUser"]),
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
            const res = await this.signUpUser(this.signUpForm);
            this.loading = false;
            return res;
        },
        handleResponse (res) {
            if (res.status === 422) {
                this.displayErrors(res);
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
