<script>
    export default {
        name: 'SelectFront',
        data() {
            return {
                type: 'materials',
                opened: false,
                processingType: 0
            };
        },
        methods: {
            selectMaterial(item) {
                const data = {
                    key: 'selectedMaterial',
                    value: +item.id
                };
                this.$store.commit('setTabValue', data);
                this.opened = false;
            },
            setProcessingType(val) {
                const data = {
                    key: 'processingType',
                    value: this.processingType
                };
                this.$store.commit('setTabValue', data);
            }
        },
        computed: {
            items() {
                return this.$store.getters.getItems(this.type);
            },
            selectedMaterial() {
                return this.$store.getters['getMaterialById'];
            },
            drillingsQuantity() {
                return this.$store.getters.getTabValue('drilling');
            },
            materialFill() {
                if (this.selectedMaterial) {
                    return 'url(#fillMaterial)';
                } else {
                    return '#f1f1f1';
                }
            },
            loading() {
                return this.$store.getters.getValue('loading');
            }
        },
        mounted() {
        }
    }
</script>

<template>
    <div class="f-wrapper">
        <p class="f-title">
            Лицевая часть:
        </p>
        <p class="f-name" v-if="selectedMaterial">
            {{ selectedMaterial.title }}
        </p>
        <div class="f-picture">
            <svg class="f-picture__svg" width="100%" height="191" viewBox="0 0 269 191" fill="none">
                <template v-if="selectedMaterial">
                    <pattern id="fillMaterial" patternUnits="userSpaceOnUse" width="100%" height="100%">
                        <image :href="selectedMaterial.img" x="-50" y="0" width="140%" height="140%" object-fit="cover"/>
                    </pattern>
                </template>
                <rect x="1" y="1" width="267" height="189" fill="#E0E0E0" stroke="#2E2E2E" stroke-width="2"/>
                <rect x="9.5" y="8.5" width="250" height="174" :fill="materialFill" stroke="#A7A7A7"/>
                <rect v-if="!selectedMaterial" x="29" y="28" width="211" height="135" fill="#ffffff"/>
<!--                <circle cx="250" cy="50" r="4.5" stroke="#00B152"/>-->
<!--                <circle cx="250" cy="140" r="4.5" stroke="#00B152"/>-->
            </svg>
            <div class="f-picture__aside">
                <div class="f-picture__circle" v-for="(item, index) in drillingsQuantity" v-bind:key="index"></div>
            </div>
            <div class="f-picture__content">
                <p class="f-picture__title" v-if="!selectedMaterial">
                    без вставки
                </p>
                <button class="f-picture__button" @click="opened = !opened" v-bind:disabled="loading" :class="{'picture__button--opacity' : selectedMaterial}">
                    выбрать вставку
                </button>
            </div>
        </div>
        <label class="f-checkbox">
            <input type="checkbox" class="f-checkbox__field" value="true" v-model="processingType" @change="setProcessingType">
            <span class="f-checkbox__wrapper">
                <span class="f-checkbox__circle">
                    <span class="f-checkbox__marker"></span>
                </span>
                <span class="f-checkbox__text">
                    Вставка с гравировкой
                </span>
            </span>
        </label>
    </div>
    <div class="f-modal" v-if="opened" @click.self="this.opened = false">
        <div class="f-modal__content">
            <button class="f-modal__button" @click="this.opened = false">
                <svg class="f-modal__icon" viewBox="0 0 24 24">
                    <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
                </svg>
            </button>
            <div class="columns">
                <div class="columns__col columns__col--2" v-for="(item, index) in items" :key="index">
                    <a href="#" @click.prevent="selectMaterial(item)" class="f-article">
                        <picture class="f-article__picture">
                            <img :src="item.img" :alt="item.title">
                        </picture>
                        <p class="f-article__title">
                            {{ item.title }}
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .f-wrapper {
        margin-bottom: rem(30);
        padding: rem(20) rem(50);
        background-color: $light;
        border: 1px solid #E5E5E5;

    }

    .f-title {
        text-align: center;
        font-size: rem(20);
        margin-bottom: rem(20);
    }

    .f-name {
        font-size: rem(14);
        line-height: 1.3;
        margin-bottom: rem(20);
    }

    .f-picture {
        display: block;
        position: relative;
        margin-bottom: rem(20);
        &:hover {
            .picture {
                &__button {
                    opacity: 1;
                }
            }
        }
        &__thumb {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            position: absolute;
        }
        &__svg {
            position: relative;
            display: block;
        }
        &__content {
            top: 50%;
            left: 50%;
            z-index: 1;
            position: absolute;
            text-align: center;
            font-size: rem(14);
            transform: translate(-50%, -50%);
        }
        &__circle {
            display: block;
            width: rem(10);
            height: rem(10);
            border-radius: rem(10);
            box-sizing: border-box;
            border: 1px solid $accent;
        }
        &__title {
            margin-bottom: rem(12);
        }
        &__aside {
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 0;
            display: flex;
            width: rem(52);
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: space-around;
        }
        &__button {
            opacity: 1;
            color: $accent;
            cursor: pointer;
            white-space: nowrap;
            transition: 0.3s all;
            padding: rem(10) rem(20);
            background-color: $light;
            border: 1px dashed $accent;
            &--opacity {
                opacity: 0;
            }
            &:hover {
                color: $light;
                border-style: solid;
                background-color: $accent;
            }
        }
    }

    .f-checkbox {
        cursor: pointer;
        &__field {
            display: none;
            visibility: hidden;
            &:checked + .checkbox__wrapper {
                .checkbox__marker {
                    opacity: 1;
                }
            }
            &:focus + .checkbox__wrapper {
                outline: 1px solid $accent;
            }
        }
        &__wrapper {
            gap: rem(10);
            display: flex;
            margin-left: auto;
            width: fit-content;
            margin-right: auto;
            align-items: center;
            justify-content: center;
        }
        &__circle {
            display: flex;
            flex-shrink: 0;
            width: rem(16);
            height: rem(16);
            align-items: center;
            border-radius: rem(16);
            justify-content: center;
            border: 1px solid $dark;
        }
        &__marker {
            opacity: 0;
            width: rem(8);
            height: rem(8);
            display: block;
            border-radius: rem(8);
            background-color: $accent;
        }
        &__text {
            font-size: rem(14);
        }
    }

    .f-modal {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.6);

        &__content {
            padding: rem(40);
            overflow-y: scroll;
            height: auto;
            max-width: 100%;
            width: rem(1170);
            max-height: 90vh;
            display: block;
            position: relative;
            background-color: $light;
        }

        &__button {
            top: 0;
            display: flex;
            right: rem(20);
            width: rem(30);
            cursor: pointer;
            height: rem(30);
            position: absolute;
            align-items: center;
            justify-content: center;
            transition: 0.3s opacity;
            background-color: $accent;

            &:hover {
                opacity: 0.7;
            }
        }

        &__icon {
            fill: $light;
            display: block;
            height: rem(15);
            width: rem(15);
        }
    }

    .f-article {
        width: 100%;
        color: inherit;
        display: block;
        text-align: center;
        text-decoration: none;

        &__picture {
            width: 100%;
            display: block;
            height: rem(140);
            padding: rem(15);
            box-sizing: border-box;

            img {
                width: 100%;
                height: 100%;
                display: block;
                object-fit: contain;
            }
        }

        &__title {
            font-size: rem(14);
        }
    }

    @media (min-width: 1200px) {

    }
</style>
