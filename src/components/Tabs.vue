<script>
    export default {
        name: 'Tabs',
        methods: {
            createTab() {
                this.$store.commit('createTab');
            },
            changeActiveTab(val) {
                const data = {
                    value: val,
                    rewrite: true
                };

                this.$store.commit('setActiveTab', data);
            },
            removeTab() {
                this.$store.commit('removeTab');
            }
        },
        computed: {
            items() {
                return this.$store.getters["getTabs"];
            },
            activeTab() {
                return this.$store.getters["getActiveTab"];
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
    <nav class="f-tabs">
        <div class="f-tabs__wrap" v-for="(item, index) in items" v-bind:class="{ 'active': activeTab === index }">
            <label class="f-tabs__label" v-bind:class="{ 'loading': loading }">
                <input type="radio" class="f-tabs__field" :value="index" @change="changeActiveTab(index)" name="tabs"
                       :checked='activeTab === index'>
                <span class="f-tabs__tab">
                    Зеркало {{ index + 1 }}
                </span>
            </label>
            <button class="f-tabs__remove" v-if="activeTab === index && items.length > 1" v-on:click="removeTab">
                <svg class="f-tabs__remove-icon" viewBox="0 0 7 7">
                    <path d="M7 0.865031L6.13497 0L3.5 2.63497L0.865031 0L0 0.865031L2.63497 3.5L0 6.13497L0.865031 7L3.5 4.36503L6.13497 7L7 6.13497L4.36503 3.5L7 0.865031Z"/>
                </svg>
            </button>
        </div>
        <button class="f-tabs__button" @click="createTab" v-bind:disabled="loading">
            <svg viewBox="0 0 22 22" class="f-tabs__icon">
                <path d="M4.45918 4.45926C0.846827 8.07161 0.846827 13.9284 4.45918 17.5407C8.07153 21.1531 13.9283 21.1531 17.5407 17.5407C21.153 13.9284 21.153 8.07161 17.5407 4.45926C13.9283 0.846913 8.07153 0.846912 4.45918 4.45926ZM3.39852 18.6014C-0.799619 14.4033 -0.799619 7.59674 3.39852 3.3986C7.59665 -0.799534 14.4032 -0.799534 18.6013 3.3986C22.7994 7.59674 22.7994 14.4033 18.6013 18.6014C14.4032 22.7995 7.59665 22.7995 3.39852 18.6014ZM6.00727 11C6.00727 10.5858 6.34306 10.25 6.75727 10.25L10.2499 10.25L10.2499 6.75736C10.2499 6.34315 10.5857 6.00736 10.9999 6.00736C11.4141 6.00736 11.7499 6.34315 11.7499 6.75736L11.7499 10.25H15.2426C15.6568 10.25 15.9926 10.5858 15.9926 11C15.9926 11.4142 15.6568 11.75 15.2426 11.75H11.7499L11.7499 15.2426C11.7499 15.6569 11.4141 15.9926 10.9999 15.9926C10.5857 15.9926 10.2499 15.6569 10.2499 15.2426L10.2499 11.75L6.75727 11.75C6.34306 11.75 6.00727 11.4142 6.00727 11Z"/>
            </svg>
        </button>
    </nav>

</template>

<style lang="scss" scoped>

    .f-tabs {
        gap: rem(5);
        display: flex;
        height: rem(84);
        align-items: center;

        &__label {
            display: block;
            cursor: pointer;
            transition: 0.3s opacity;

            &.loading {
                opacity: 0.5;
                pointer-events: none;
            }
        }

        &__field {
            display: none;
            visibility: hidden;
        }

        &__wrap {
            position: relative;
            &.active {
                .f-tabs__tab {
                    color: $light;
                    background-color: $accent;
                }
                .f-tabs__remove-icon {
                    fill: #ffffff;
                }
            }
        }

        &__remove {
            top: 0;
            right: 0;
            z-index: 1;
            cursor: pointer;
            padding: rem(6);
            background: none;
            position: absolute;
        }

        &__remove-icon {
            fill: #828282;
            width: rem(7);
            height: rem(7);
            display: block;
            transition: 0.3s fill;
        }

        &__tab {
            height: rem(84);
            display: flex;
            padding: rem(25);
            font-weight: 500;
            font-size: rem(20);
            align-items: center;
            transition: 0.3s all;
            background-color: $light;
            box-shadow: 0 rem(-5) rem(10) rgba(0, 0, 0, 0.05);
        }

        &__button {
            width: rem(72);
            height: 100%;
            border: none;
            display: flex;
            cursor: pointer;
            align-items: center;
            transition: 0.3s all;
            justify-content: center;

            &:hover {
                background-color: $accent;

                .tabs__icon {
                    fill: $light;
                }
            }
        }

        &__icon {
            fill: $dark;
            display: block;
            width: rem(18);
            height: rem(18);
        }
    }
</style>
