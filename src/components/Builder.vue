<script>
export default {
  name: 'Builder',
  props: {
    title: String,
    description: String,
    isCentered: Boolean,
    currentMilling: Number,
  },
  data() {
    return {
      type: 'materials',
      renderComponent: true,
    };
  },
  methods: {
    forceRerender() {
      this.renderComponent = false;
      this.$nextTick(() => this.renderComponent = true);
    },
  },
  computed: {
    height: {
      get() {
        return this.$store.getters.getTabValue('height');
      },
      set(newValue) {
        const data = {
          key: 'height',
          value: +newValue
        }
        this.$store.commit('setTabValue', data);
      }
    },
    width: {
      get() {
        return this.$store.getters.getTabValue('width');
      },
      set(newValue) {
        const data = {
          key: 'width',
          value: +newValue
        }
        this.$store.commit('setTabValue', data);
      }
    },
    padding: {
      get() {
        return this.$store.getters.getTabValue('padding');
      },
      set(newValue) {
        const data = {
          key: 'padding',
          value: +newValue
        }
        this.$store.commit('setTabValue', data);
      }
    },
    millingsLength: {
      get() {
        return this.$store.getters.getTabValueMilling('currentValue');
      },
    },
    sendData() {
      this.$store.dispatch('sendClearData');
    },
    items() {
      return this.$store.getters.getItems(this.type);
    },
    selectedMaterial() {
      return this.$store.getters['getMaterialById'];
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
  <div class="f-wrapper" id="final-build" v-if="renderComponent">
    <p class="f-title" v-on:click="forceRerender">
      Лицевая часть:
    </p>
    <p class="f-name" v-if="selectedMaterial">
      {{ selectedMaterial.title }}
    </p>
    <div class="f-builder">
      <svg viewBox="0 0 324 461" class="f-svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 15L45 17.8868L45 12.1132L40 15ZM44.5 15.5L120.238 15.5L120.238 14.5L44.5 14.5L44.5 15.5Z"
              fill="#00B152"/>
        <path d="M324 15L319 12.1132V17.8868L324 15ZM244.817 15.5H319.5V14.5H244.817V15.5Z" fill="#00B152"/>
        <foreignObject x="137.63" y="0.5" width="89.7955" height="29">
          <input class="f-svg__field" type="number" v-model="width" v-on:blur="sendData">
        </foreignObject>
        <path d="M15 40L12.1133 45L17.8868 45L15 40ZM15.5 189L15.5 44.5L14.5 44.5L14.5 189L15.5 189Z" fill="#00B152"/>
        <path d="M15 461L17.8868 456L12.1132 456L15 461ZM15.5 456.5L15.5 299L14.5 299L14.5 456.5L15.5 456.5Z"
              fill="#00B152"/>
        <foreignObject x="0.5" y="286.5" width="85" height="29" transform="rotate(-90 0.5 286.5)">
          <input class="f-svg__field" type="number" v-model="height" v-on:blur="sendData">
        </foreignObject>
        <rect x="50" y="52" width="264" height="398" :fill="materialFill" fill="#F1F1F1" stroke="#A7A7A7"/>

        <template v-if="selectedMaterial">
          <image preserveAspectRatio="none " :href="selectedMaterial.img" x="50" y="52" width="264" height="398"
                 object-fit="contain"/>
        </template>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.f-wrapper {
  background-color: $light;
  border: 1px solid #E5E5E5;
  padding: rem(20) rem(30) rem(30) rem(30);
}

.f-name {
  font-size: rem(14);
  line-height: 1.3;
  margin-bottom: rem(20);
}

.f-builder {
  width: 100%;
  height: auto;
  display: block;
  max-width: 324px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-bottom: rem(20);


  &:hover {
    .f-builder {
      &__button {
        opacity: 1;
      }
    }
  }

  &__svg {

  }

  &__content {
    top: 56%;
    left: 56%;
    z-index: 1;
    position: absolute;
    text-align: center;
    font-size: rem(14);
    transform: translate(-50%, -50%);
  }

  &__title {
    margin-bottom: rem(12);
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

  &__button-remove {
    top: rem(247);
    display: flex;
    right: rem(10);
    width: rem(20);
    height: rem(20);
    cursor: pointer;
    position: absolute;
    align-items: center;
    justify-content: center;
    transition: 0.3s opacity;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.9;
    }
  }

  &__remove-icon {
    display: block;
    width: rem(12);
    height: rem(12);
  }
}

.f-title {
  text-align: center;
  font-size: rem(20);
  margin-bottom: rem(20);
}

.f-svg {
  fill: none;
  width: 100%;
  height: auto;
  display: block;

  &__text {
    font-size: rem(13);
    font-family: $font-main;
  }

  &__field {
    width: 100%;
    height: 100%;
    display: block;
    padding: 0 rem(5);
    font-size: rem(13);
    border: 1px solid green;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
}

.f-checkbox {
  cursor: pointer;

  &__field {
    display: none;
    visibility: hidden;

    &:checked + .f-checkbox__wrapper {
      .f-checkbox__marker {
        opacity: 1;
      }
    }

    &:focus + .f-checkbox__wrapper {
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
