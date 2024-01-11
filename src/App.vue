<script>
    import ButtonAdding from './components/ButtonAdding.vue';
    import ButtonModal from './components/ModalProfiles.vue';
    import Footer from './components/Footer.vue';
    import InputNumber from './components/InputNumber.vue';
    import Item from './components/Item.vue';
    import Preview from './components/Preview.vue';
    import Select from './components/Select.vue';
    import SelectFront from './components/SelectFront.vue';
    import Tabs from './components/Tabs.vue';
    import Title from './components/Title.vue';
    import User from './components/User.vue';
    import Discont from "./components/Discont.vue";

    export default {
        name: 'App',
        components: {
            ButtonAdding,
            ButtonModal,
            Discont,
            Footer,
            InputNumber,
            Item,
            Preview,
            Select,
            SelectFront,
            Tabs,
            Title,
            User
        },
        computed: {
            items() {
                return this.$store.getters["getTabs"];
            }
        },
        created() {
            this.$store.commit('init');
        }
    }
</script>

<template>
    <div class="container">
        <div class="columns mb-30">
            <div class="columns__col columns__col--8">
                <User></User>
            </div>
            <div class="columns__col columns__col--4">
                <Discont></Discont>
            </div>
            <div class="columns__col columns__col--12">
                <p>
                    *Для того, чтобы сделать заказ, Вам необходимо заполнить форму
                </p>
            </div>
        </div>
        <header class="f-header">
            <Tabs></Tabs>
        </header>
        <main class="f-main">
            <template v-for="(item, index) in items" :key="index">
                <Item :index="index"></Item>
            </template>
            <ButtonAdding></ButtonAdding>
        </main>
        <Footer></Footer>
    </div>

</template>

<style lang="scss">

    @import "styles/modules.scss";

    .f-header {
        @include r(1200) {
            display: none;
            visibility: hidden;
        }
    }

    .container {
        position: relative;
    }

    .f-main {
        background: $light;
        padding: rem(44) rem(100) rem(30) rem(70);
        box-shadow: rem(2) rem(4) rem(30) rgba(0, 0, 0, 0.14);
        @include r(1200) {
            padding: 0;
            box-shadow: none;
            padding-bottom: rem(30);
        }
    }

</style>
