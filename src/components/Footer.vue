<script>
    export default {
        name: 'Footer',
        computed: {
            items() {
                return this.$store.getters['getTabs'];
            },
            price() {
                return this.$store.getters.getValue('price');
            },
            loading() {
                return this.$store.getters.getValue('loading');
            },
            message() {
                return this.$store.getters.getValue('buttonMessage');
            }
        },
        methods: {
            sendData() {
                this.$store.dispatch('sendResultData');
            }
        },
        mounted() {
        }
    }
</script>

<template>
    <footer class="f-footer">
        <div class="f-footer__content">
            <div class="f-footer-section">
                <h2 class="f-title">
                    Ваш заказ:
                </h2>
            </div>
            <div class="f-footer-section" v-for="(item, index) in items" :key="index">
                <p class="f-description">
                    Стоимость {{ index + 1 }}-го фасада:
                </p>
                <p class="f-info">
                    {{ item.price }} руб.
                </p>
            </div>
            <div class="f-footer-section f-footer-section--large">
                <p class="f-description f-description--accent">
                    Стоимость заказа:
                </p>
                <p class="f-info f-info--large f-info--accent">
                    {{ price }} руб.
                </p>
            </div>
            <button class="f-button" v-bind:disabled="loading" type="button" @click="sendData()">
                <span class="f-button__text">
                    {{ message }}
                </span>
            </button>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .f-footer {
        top: 0;
        height: 100%;
        width: rem(310);
        position: absolute;
        left: calc(100% + 20px);

        @include r(2300) {
            width: 100%;
            position: static;
        }

        &__content {
            top: 0;
            width: 100%;
            color: $light;
            position: sticky;
            padding: rem(30);
            font-weight: 400;
            font-size: rem(20);
            background-color: #2E2E2E;
        }
    }

    .f-footer-section {
        padding: rem(20) 0;
        border-bottom: 1px dashed #9A9999;

        &--large {
            padding: rem(35) 0;
            border-bottom: none;
        }

        &:first-of-type {
            padding-top: 0;
        }
    }

    .f-title {
        color: #9A9999;
        font-weight: 500;
        font-size: rem(20);
    }

    .f-description {
        font-weight: 500;
        font-size: rem(16);
        margin-bottom: rem(15);

        &--accent {
            color: $accent;
        }
    }

    .f-info {
        font-weight: 500;
        font-size: rem(24);

        &--large {
            font-size: rem(32);
        }

        &--accent {
            color: $accent;
        }
    }

    .f-button {
        width: 100%;
        display: flex;
        color: $light;
        cursor: pointer;
        font-weight: 500;
        font-size: rem(16);
        min-height: rem(60);
        max-width: rem(260);
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        background-color: $accent;
    }
</style>
