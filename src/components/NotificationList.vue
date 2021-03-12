<template>
    <div class="notification-list">
        <NotificationMessage
            v-for="notification in notifications"
            :key="notification.id"
            :notification="notification"
        />
    </div>
</template>

<script>
import NotificationMessage from "@/components/NotificationMessage.vue";
import { mapGetters } from "vuex";
export default {
    name: "NotificationList",
    components: { NotificationMessage },
    computed: { ...mapGetters("notification", ["notifications"]) }
};
</script>

<style>
.notification-list {
    z-index: 9999;
    position: fixed;
    top: 75px;
    right: 50%;
    transform: translateX(50%);
    min-width: 320px;
}
</style>
