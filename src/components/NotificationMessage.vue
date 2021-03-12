<template>
    <div>
        <v-alert
            dismissible
            text
            elevation="1"
            outlined
            :type="notification.type"
        >
            {{notification.message}}
        </v-alert>
    </div>
</template>

<script>
export default {
    name: "NotificationMessage",
    props: {
        notification: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            timeout: null
        };
    },
    created () {
        this.timeout = setTimeout(() => {
            this.removeNotification();
        }, 5000);
    },
    beforeDestroy () {
        clearTimeout(this.timeout);
    },
    methods: {
        removeNotification () {
            this.$store.dispatch("notification/removeNotification", this.notification);
        }
    }
};
</script>

<style lang="scss">
// .alert {
// margin: 10px 0px;
// padding: 15px 15px;
// color: get-var("text-white");
// font-size: get-var("l");
// font-weight: get-var("bold");
// border-radius: get-var("rounded");
// }
</style>
