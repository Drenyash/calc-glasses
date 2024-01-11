<script>
    export default {
        name: 'Title',
        props: {
            title: String,
            description: String,
            isCentered: Boolean
        },
        data() {
            return {
                msg: 'Привет',
            };
        },
        mounted() {
        }
    }
</script>

<template>
    <h3 class="f-title" :class="[{'f-centered': isCentered}]">
        {{ title }}
    </h3>
    <template v-if="description">
        <p class="f-description" :class="[{'f-centered': isCentered}]">
            {{ description }}
        </p>
    </template>
</template>

<style lang="scss" scoped>
    .f-title {
        font-weight: 400;
        font-size: rem(20);
        @include r(1200) {
            font-size: rem(16);
        }
    }
    .f-description {
        margin-top: rem(10);
    }
    .f-centered {
        text-align: center;
    }
</style>
