<template>
    <div class="content divergent-6--text">
        <h1 class="mb-5 divergent-11--text">Contact</h1>
        <p class="my-0">
            You can email me at
            <a class="divergent-9--text link" href="mailto: hi@matthewbell.dev"
                >hi@matthewbell.dev</a
            >
        </p>
        <p class="my-0">
            Or message me on
            <a
                class="divergent-9--text link"
                href="https://www.linkedin.com/in/matthewfbell/"
                target="_blank"
                >LinkedIn</a
            >
        </p>
    </div>
</template>

<script>
export default {
    name: "Contact",
    metaInfo: {
        title: "Contact",
    },
}
</script>

<style scoped lang="scss">
.link {
    color: var(--v-divergent-11-base);
    font-weight: 500;
    text-decoration: none;
    border-bottom: 1px solid var(--v-divergent-1-base);
    transition: border 0.3s ease-in-out;

    &:hover {
        border-bottom: 1px solid var(--v-divergent-11-base);
    }
}
</style>
