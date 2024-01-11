<template>
    <div class="f-user">
        <div class="f-user__head">
            <p class="f-title">Ваши данные</p>
        </div>
        <div class="f-user__content">
            <label class="f-input">
                <p class="f-input__title">ФИО</p>
                <input
                        type="text"
                        class="f-input__field"
                        v-model="name"
                        placeholder="ФИО"
                        :class="[messageUser ? '' : 'f-input__field--error']"
                />
            </label>
            <label class="f-input">
                <p class="f-input__title">Контактный телефон</p>
                <input
                        type="text"
                        class="f-input__field f-input__field--phone"
                        placeholder="+7(000)000-00-00"
                        v-model="phone"
                        :class="[messagePhone ? '' : 'f-input__field--error']"
                />
            </label>
            <label class="f-input">
                <p class="f-input__title">Email</p>
                <input
                        type="email"
                        class="f-input__field f-input__field--email"
                        placeholder="mail@mail.ru"
                        v-model="email"
                        :class="[messageEmail ? '' : 'f-input__field--error']"
                />
            </label>
        </div>
    </div>
</template>

<script>
    import IMask from "imask";

    export default {
        name: "User",
        computed: {
            name: {
                get() {
                    const obj = this.$store.getters.getItems('user');
                    return obj.name;
                },
                set(value) {
                    this.$store.commit("setUserValue", {key: 'name', value: value});
                },
            },
            phone: {
                get() {
                    const obj = this.$store.getters.getItems('user');
                    return obj.phone;
                },
                set(value) {
                    this.$store.commit("setUserValue", {key: 'phone', value: value});
                },
            },
            email: {
                get() {
                    const obj = this.$store.getters.getItems('user');
                    return obj.email;
                },
                set(value) {
                    this.$store.commit("setUserValue", {key: 'email', value: value});
                },
            },
            messageUser() {
                return this.$store.getters["getMessageUser"];
            },
            messagePhone() {
                return this.$store.getters["getMessagePhone"];
            },
            messageEmail() {
                return this.$store.getters["getMessageEmail"];
            },
        },
        mounted() {
            /* eslint-disable */
            let initMask = () => {
                let phone = document.querySelector(".f-input__field--phone");
                let mail = document.querySelector(".f-input__field--email");

                IMask(phone, {
                    mask: "+{7} (000) 000-00-00",
                });
            };
            initMask();
        },
    };
</script>

<style lang="scss" scoped>
    .f-user {
        height: 100%;
        color: inherit;
        line-height: 1.4;
        padding: 60px 100px;
        background-size: cover;
        background-color: #00b152;
        background-position: center;
        background-repeat: no-repeat;
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

        &__content {
            display: flex;

            @include r(770) {
                gap: 1rem;
                flex-direction: column;
            }
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
