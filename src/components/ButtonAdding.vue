<script>
    export default {
        name: 'ButtonAdding',
        methods: {
            addTab() {
                this.$store.commit('createTab');
            }
        },
        computed: {
            loading() {
                return this.$store.getters.getValue('loading');
            }
        },
        mounted() {
        }
    }
</script>

<template>
    <button class="f-button" @click="addTab" v-bind:disabled="loading">
        <span class="f-button__text">
            Добавить фасад
        </span>
        <svg class="f-button__icon" viewBox="0 0 22 22">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.60139 4.60135C0.989039 8.2137 0.989039 14.0705 4.60139 17.6828C8.21374 21.2952 14.0705 21.2952 17.6829 17.6828C21.2952 14.0705 21.2952 8.2137 17.6829 4.60135C14.0705 0.989003 8.21374 0.989002 4.60139 4.60135ZM3.54073 18.7435C-0.657407 14.5454 -0.657407 7.73883 3.54073 3.54069C7.73887 -0.657444 14.5454 -0.657444 18.7435 3.54069C22.9417 7.73883 22.9417 14.5454 18.7435 18.7435C14.5454 22.9416 7.73887 22.9416 3.54073 18.7435ZM6.14949 11.1421C6.14949 10.7279 6.48527 10.3921 6.89949 10.3921L10.3921 10.3921L10.3921 6.89945C10.3921 6.48524 10.7279 6.14945 11.1421 6.14945C11.5563 6.14945 11.8921 6.48524 11.8921 6.89945L11.8921 10.3921H15.3848C15.799 10.3921 16.1348 10.7279 16.1348 11.1421C16.1348 11.5563 15.799 11.8921 15.3848 11.8921H11.8921L11.8921 15.3847C11.8921 15.7989 11.5563 16.1347 11.1421 16.1347C10.7279 16.1347 10.3921 15.7989 10.3921 15.3847L10.3921 11.8921L6.89949 11.8921C6.48527 11.8921 6.14949 11.5563 6.14949 11.1421Z"/>
        </svg>
    </button>
</template>

<style lang="scss" scoped>
    .f-button {
        width: 100%;
        display: none;
        cursor: pointer;
        visibility: hidden;
        align-items: center;
        min-height: rem(50);
        transition: 0.3s all;
        border: 1px solid $dark;
        background-color: $light;
        padding: rem(10) rem(15);
        justify-content: space-between;

        &:hover {
            color: $light;
            background-color: $dark;

            .button {
                &__icon {
                    fill: $light;
                }
            }
        }

        @include r(1200) {
            display: flex;
            visibility: visible;
        }

        &__text {
            font-weight: 500;
        }

        &__icon {
            display: block;
            width: rem(22);
            height: rem(22);
            fill: $dark;
        }
    }
</style>