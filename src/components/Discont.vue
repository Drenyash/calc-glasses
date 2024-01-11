<template>
    <div class="f-discont">
        <div class="f-discont__head">
            <p class="f-title">Номер карты</p>
        </div>
        <div class="f-discont__content">
            <label class="f-input">
                <p class="f-input__title">Номер скидочной карты</p>
                <input
                    type="text"
                    class="f-input__field"
                    placeholder="0000"
                    v-model="discont"
                />
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Discont",
        props: {
            // msg: String
        },
        computed: {
            discont: {
                get() {
                    const obj = this.$store.getters.getItems('user');
                    return obj.discontCard;
                },
                set(value) {
                    this.$store.commit("setUserValue", {key: 'discontCard', value: value});
                },
            },
        },
    };
</script>

<style lang="scss" scoped>

    .f-discont {
        height: 100%;
        color: $light;
        padding: 60px 80px;
        background-size: cover;
        background-color: #2e2e2e;
        background-position: center;
        background-repeat: no-repeat;
        /*background-image: url("../assets/discont-bg.svg");*/

        @include r(1200) {
            padding: 30px 30px;
        }

        &__head {
            margin-bottom: 2.5rem;
            @include r(1200) {
                margin-bottom: 1.2rem
            }
        }

        &__title {
            font-size: 0.875rem;
        }
    }

    .f-title {
        font-weight: 700;
        font-size: rem(30);
    }

    .f-input {
        width: auto;
        min-width: 0;
        display: block;
        box-sizing: border-box;

        &__title {
            font-size: .875rem;
            margin-bottom: 0.5rem;
        }

        &__field {
            color: #fff;
            width: 100%;
            min-width: 0;
            display: block;
            font-weight: 400;
            outline-color: #fff;
            transition: all .3s;
            font-family: inherit;
            border: 1px solid #fff;
            box-sizing: border-box;
            padding: 0.75rem 1.25rem;
            background-color: inherit;
        }
    }
</style>
