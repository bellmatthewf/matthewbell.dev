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
            >
                Create New Account
            </v-btn>
            <v-btn
                color="primary"
                class="mr-4"
                text
            >
                Forgot password?
            </v-btn>
        </div>

    </v-form>
</template>

<script>
import { statusCodes } from "@/lib/statusCodes";

export default {
    data () {
        return {
            loading: false,
            email: { value: "", error: "" }
        };
    },
    computed: {
        logInForm () {
            return {
                email: this.email.value,
                password: this.password.value
            };
        }
    },
    methods: {
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
            const res = await this.logIn(this.logInForm);
            this.loading = false;
            return res;
        },
        handleResponse (res) {
            if (res.status === statusCodes.unprocessableEntity) {
                this.displayErrors(res);
            }
            if (res.status === statusCodes.ok) {
                this.$router.push(this.$route.query.redirect || { name: "Home" });
            }
        },
        displayErrors (res) {
            console.log(res);
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
