<script>
import Builder from "./Builder.vue";
import ModalProfiles from './ModalProfiles.vue';
import Footer from './Footer.vue';
import InputNumber from './InputNumber.vue';
import Preview from './Preview.vue';
import Select from './Select.vue';
import Tabs from './Tabs.vue';
import Title from './Title.vue';
import Input from "./Input.vue";
import ColorType from "@/components/ColorType.vue";
import File from "@/components/File.vue";

export default {
  name: 'Item',
  components: {
    File,
    ColorType,
    Builder,
    ModalProfiles,
    Footer,
    InputNumber,
    Preview,
    Select,
    Tabs,
    Title,
    Input
  },
  props: {
    index: Number
  },
  data() {
    return {
      opened: true,
      minValue: 0,
      maxValue: 10,
      currentMilling: 1,
      millingsList: [],
    };
  },
  computed: {
    activeTab() {
      return this.$store.getters["getActiveTab"];
    },
  },
  methods: {
    changeMilling(value) {
      this.currentMilling = value;
    },
    updateMillingList(millingIdx) {
      this.millingsList.push(millingIdx);
      console.log('millingList', this.millingsList)
    },
  },
  mounted() {
  }
}
</script>

<template>
  <article class="f-item" :class="[{'f-item--hidden': activeTab !== index}]">
    <button class="f-item__header" type="button" @click="opened = !opened">
            <span class="f-item__title">
                Зеркало {{ index + 1 }}
            </span>
      <svg class="f-item__icon" viewBox="0 0 20 11" :class="[{'f-item__icon--rotate': !opened}]">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.418418 0.402728C0.97631 -0.134243 1.88083 -0.134243 2.43872 0.402728L10 7.68046L17.5613 0.402727C18.1192 -0.134244 19.0237 -0.134244 19.5816 0.402727C20.1395 0.939698 20.1395 1.8103 19.5816 2.34727L11.0102 10.5973C10.4523 11.1342 9.54774 11.1342 8.98985 10.5973L0.418419 2.34727C-0.139473 1.8103 -0.139473 0.939699 0.418418 0.402728Z"/>
      </svg>
    </button>
    <div class="f-item__content" :class="[{'f-item__content--hidden': opened}]">
      <div class="columns columns--main mb-35">
        <div class="columns__col columns__col--7 mbm-40">
          <div class="mb-20">
            <Title title="Размеры стекла/зеркала" :isCentered="false"></Title>
          </div>
          <div class="columns mb-40">
            <div class="columns__col columns__col--4">
              <InputNumber title="Высота (мм)" value="height"></InputNumber>
            </div>
            <div class="columns__col columns__col--4">
              <InputNumber title="Ширина (мм)" value="width"></InputNumber>
            </div>
            <div class="columns__col columns__col--4">
              <InputNumber title="Кол-во (шт)" value="quantity"></InputNumber>
            </div>
          </div>
          <div class="columns mb-55">
            <div class="columns__col columns__col--4">
              <ModalProfiles></ModalProfiles>
            </div>
            <div class="columns__col columns__col--4">
              <ColorType></ColorType>
            </div>
          </div>
          <div class="columns">
            <div class="columns__col columns__col--8">
              <InputNumber title="Диаметр сверления D 5 мм" v-bind:minValue="this.minValue"
                           v-bind:maxValue="this.maxValue" value="milling" :millingType="1"
                           @updateMillingList="updateMillingList" @changeMilling="changeMilling"></InputNumber>
            </div>
            <div class="columns__col columns__col--8">
              <InputNumber title="Диаметр сверления D 8 мм" v-bind:minValue="this.minValue"
                           v-bind:maxValue="this.maxValue" value="milling" :millingType="2"
                           @updateMillingList="updateMillingList" @changeMilling="changeMilling"></InputNumber>
            </div>
            <div class="columns__col columns__col--8">
              <InputNumber title="Диаметр сверления D 26 мм" v-bind:minValue="this.minValue"
                           v-bind:maxValue="this.maxValue" value="milling" :millingType="3"
                           @updateMillingList="updateMillingList" @changeMilling="changeMilling"></InputNumber>
            </div>
          </div>
        </div>
        <div class="columns__col columns__col--5">
          <div class="mb-25">
            <Title title="Визуализация зеркала" description="может отличаться от изготовленного варианта"
                   :isCentered="true"></Title>
          </div>
          <Builder :millingsList="millingsList" :currentMilling="currentMilling"></Builder>
        </div>
      </div>
    </div>
    <div class="f-item__comment">
      <File></File>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.f-item {
  margin-bottom: rem(15);

  &--hidden {
    margin-bottom: 0;
    overflow: hidden;
    //display: none;
    visibility: hidden;
    height: 0px;
    @include r(1200) {
      height: auto;
      //display: block;
      visibility: visible;
      margin-bottom: rem(15);
    }
  }

  &__header {
    width: 100%;
    display: none;
    color: $light;
    cursor: pointer;
    padding: rem(15);
    visibility: hidden;
    min-height: rem(50);
    align-items: center;
    background-color: $accent;
    justify-content: space-between;
    @include r(1200) {
      display: flex;
      visibility: visible;
    }
  }

  &__title {
    font-weight: 500;
  }

  &__icon {
    fill: $light;
    height: rem(8);
    width: rem(14);
    display: block;

    &--rotate {
      transform: rotate(180deg);
    }
  }

  &__content {
    padding-top: rem(20);
    padding-bottom: rem(30);

    &--hidden {
      display: block;
      visibility: visible;
      @include r(1200) {
        display: none;
        visibility: hidden;
      }
    }
  }
}

.f-title {
  font-weight: 400;
  font-size: rem(20);
  @include r(1200) {
    font-size: rem(16);
  }
}
</style>
