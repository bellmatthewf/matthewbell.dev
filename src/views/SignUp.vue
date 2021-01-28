<template>
    <v-form
        @submit.prevent="submitHandler"
        class="pa-10"
        ref="form"
        v-model="formIsValid"
        lazy-validation
    >
        <v-text-field
            v-model="email"
            :counter="254"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>

        <v-text-field
            v-model="password"
            :counter="128"
            :rules="passwordRules"
            label="Password"
            type="password"
            required
        ></v-text-field>

        <v-text-field
            v-model="confirmPassword"
            :counter="128"
            :rules="confirmPasswordRules"
            label="Confirm password"
            type="password"
            required
        ></v-text-field>

        <v-btn
            :disabled="!formIsValid"
            color="success"
            class="mr-4"
            @click="submitHandler()"
        >
            Submit
        </v-btn>

        <v-btn
            color="error"
            class="mr-4"
            @click="reset"
        >
            Reset Form
        </v-btn>

        <v-btn
            color="warning"
            @click="resetValidation"
        >
            Reset Validation
        </v-btn>
    </v-form>
</template>

<script>
import api from "@/lib/api";
export default {
    data () {
        return {
            formIsValid: true,
            email: "",
            emailRules: [
                value => !!value || "E-mail is required",
                value => /.+@.+\..+/.test(value) || "E-mail must be valid"
            ],
            password: "",
            passwordRules: [
                value => value.length >= 8 || "Password must be at least 8 characters",
                value => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) || "Must contain at least one uppercase letter, one lowercase letter, one number"
            ],
            confirmPassword: "",
            confirmPasswordRules: [
                value => value === this.password || "Passwords must match"
            ]
        };
    },
    methods: {
        validate () {
            this.$refs.form.validate();
        },
        reset () {
            this.$refs.form.reset();
        },
        resetValidation () {
            this.$refs.form.resetValidation();
        },
        async submitHandler () {
            this.validate();
            if (this.formIsValid) {
                this.sendData();
            }
        },
        async sendData () {
            try {
                const res = await api.get("/sign-up");
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
