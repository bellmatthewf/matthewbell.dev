<template>
    <v-form
        @submit.prevent=""
        class="pa-10"
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-text-field
            v-model="email"
            :counter="254"
            :rules=emailRules
            label="E-mail"
            required
        ></v-text-field>

        <v-text-field
            v-model="password"
            :counter="128"
            :rules="[]"
            label="Password"
            type="password"
            required
        ></v-text-field>

        <v-text-field
            v-model="confirmPassword"
            :counter="128"
            :rules="[]"
            label="Confirm password"
            type="password"
            required
        ></v-text-field>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
        >
            Validate
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

export default {
    data: () => ({
        valid: true,
        email: "",
        emailRules: [
            v => !!v || "E-mail is required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        password: "",
        confirmPassword: ""
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
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
