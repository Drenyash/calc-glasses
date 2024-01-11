<script>
    export default {
        name: 'Select',
        props: {
            title: String,
            type: String,
            itemKey: String
        },
        data() {
            return {
                msg: '',
            };
        },
        computed: {
            items() {
                return this.$store.getters.getTabValue(this.type);
            },
            inputValue: {
                get() {
                    return this.$store.getters.getTabValue(this.itemKey);
                },
                set(newValue) {
                    const data = {
                        key: this.itemKey,
                        value: +newValue
                    }
                    this.$store.commit('setTabValue', data);
                }
            },
            loading() {
                return this.$store.getters.getValue('loading');
            },
            sendData() {
                this.$store.dispatch('sendClearData');
            }
        },
        mounted() {}
    }
</script>

<template>
    <label class="f-select">
        <p class="f-select__title">
            {{ title }}
        </p>
        <select class="f-select__field" v-model="inputValue" v-bind:disabled="loading" v-on:blur="sendData">
            <option v-for="(item, index) in items" :value="item.id" :key="index">{{item.title}}</option>
        </select>
    </label>

</template>

<style lang="scss" scoped>

    .f-select {
        &__title {
            font-weight: 400;
            font-size: rem(13);
            margin-bottom: rem(10);
        }

        &__field {
            width: 100%;
            display: block;
            height: rem(50);
            cursor: pointer;
            appearance: none;
            white-space: nowrap;
            box-sizing: border-box;
            text-overflow: ellipsis;
            padding: 0 rem(50) 0 rem(20);
            background-repeat: no-repeat;
            background-position: right rem(10) center;
            /*background-image: url("@/assets/dropdown.svg");*/
        }
    }
</style>
