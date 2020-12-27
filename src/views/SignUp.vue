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
            :rules="[]"
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
    data: () => ({
        formIsValid: true,
        email: "",
        emailRules: [
            v => !!v || "E-mail is required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        password: "",
        passwordRules: [],
        confirmPassword: "",
        confirmPasswordRules: []
    }),

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
            await this.validate();
            if (this.formIsValid) {
                this.sendData();
            }
        },
        async sendData () {
            console.log("SENDING");
            const r = await api.get("/login").catch(err => {
                console.log(err);
            });
            console.log(r);
            console.log(r.body);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
