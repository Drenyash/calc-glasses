<script>
export default {
  name: 'InputNumber',
  props: {
    title: String,
    value: String,
    minValue: Number,
    maxValue: Number,
    millingType: Number,
    setMaxValue: Function,
    changeMilling: Function,
  },
  computed: {
    inputValue: {
      get() {
        if (this.millingType) {
          return this.$store.getters.getTabValue(this.value, this.millingType);
        } else {
          return this.$store.getters.getTabValue(this.value);
        }
      },
      set(newValue) {
        if (this.minValue && newValue <= this.minValue) {
          newValue = this.minValue;
        } else if (newValue + this.getTotalValues > this.maxValue && newValue !== this.inputValue + 1) {
          if (newValue > this.inputValue) {
            newValue = this.maxValue - this.getTotalValues;
          }
        }
        const data = {
          key: this.value,
          millingType: this.millingType,
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
    },
    getTotalValues() {
      return this.$store.getters.getCurrentValue
    },
  },
  methods: {
    increase(val) {
      if (!val && this.inputValue === 0) return false;
      if (!val && this.inputValue === this.minValue) {
        return false;
      } else if (val && this.inputValue === this.maxValue) {
        return false;
      } else {
        let data = {}
        data = {
          key: this.value,
          value: (val) ? this.$store.getters.getCurrentValue < 10 ? this.inputValue += 1 : null : this.inputValue -= 1,
        }
        this.$store.dispatch('sendClearData');
        this.$store.commit('setTabValue', data);
      }
    }
  },
  mounted() {
  }
}
</script>

<template>
  <label class="f-input">
    <p class="f-input__title">
      {{ title }}
    </p>
    <div class="f-input__wrapper">
      <input type="number" class="f-input__field" :min="this.minValue" :max="this.maxValue" v-bind:disabled="loading" v-model="inputValue" v-on:blur="sendData">
      <div class="f-input__toolbar">
        <button class="f-input__button" @click="increase(true)">
          <svg class="f-input__icon" viewBox="0 0 10 5">
            <path
                d="M4.99216 0.00168991C4.82555 0.00136375 4.6641 0.0594587 4.53581 0.16589L0.257587 3.73547C0.111972 3.85665 0.0204009 4.03079 0.00301722 4.21956C-0.0143664 4.40834 0.0438616 4.5963 0.164892 4.7421C0.285922 4.88789 0.45984 4.97957 0.648386 4.99698C0.836932 5.01438 1.02466 4.95608 1.17027 4.83491L4.99216 1.63656L8.81404 4.72068C8.88698 4.77998 8.9709 4.82427 9.06098 4.85099C9.15107 4.87771 9.24554 4.88635 9.33897 4.87639C9.43239 4.86644 9.52294 4.8381 9.60539 4.793C9.68784 4.7479 9.76058 4.68693 9.81942 4.61359C9.88472 4.54019 9.93418 4.45407 9.96469 4.36064C9.9952 4.2672 10.0061 4.16847 9.99674 4.07062C9.98737 3.97276 9.95792 3.8779 9.91023 3.79198C9.86254 3.70605 9.79764 3.63092 9.7196 3.57127L5.44137 0.123055C5.3094 0.0334477 5.15124 -0.00928402 4.99216 0.00168991Z"
                fill="white"/>
          </svg>
        </button>
        <button class="f-input__button" @click="increase(false)">
          <svg class="f-input__icon" viewBox="0 0 10 5">
            <path
                d="M4.99216 4.99831C4.82555 4.99864 4.6641 4.94054 4.53581 4.83411L0.257587 1.26453C0.111972 1.14335 0.0204009 0.969215 0.00301722 0.780437C-0.0143664 0.591658 0.0438616 0.403697 0.164892 0.257904C0.285922 0.11211 0.45984 0.020426 0.648386 0.00302095C0.836932 -0.0143841 1.02466 0.0439153 1.17027 0.165094L4.99216 3.36344L8.81404 0.279322C8.88698 0.22002 8.9709 0.175734 9.06098 0.149011C9.15107 0.122288 9.24554 0.113654 9.33897 0.123605C9.43239 0.133557 9.52294 0.161897 9.60539 0.206998C9.68784 0.252099 9.76058 0.313071 9.81942 0.386409C9.88472 0.459815 9.93418 0.545932 9.96469 0.639365C9.9952 0.732798 10.0061 0.831533 9.99674 0.929385C9.98737 1.02724 9.95792 1.1221 9.91023 1.20802C9.86254 1.29395 9.79764 1.36908 9.7196 1.42873L5.44137 4.87694C5.3094 4.96655 5.15124 5.00928 4.99216 4.99831Z"
                fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  </label>

</template>

<style lang="scss" scoped>
.f-input {
  &__title {
    font-weight: 400;
    font-size: rem(13);
    margin-bottom: rem(10);
  }

  &__field {
    width: 100%;
    display: block;
    height: rem(50);
    font-family: inherit;
    padding-left: rem(21);
    padding-right: rem(35);
    outline-color: $accent;
    box-sizing: border-box;
    background-color: $light;
    border: 1px solid #DCDCDC;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }

  &__wrapper {
    position: relative;
  }

  &__toolbar {
    top: 50%;
    right: rem(5);
    width: rem(18);
    height: rem(36);
    position: absolute;
    transform: translateY(-50%);
    @include r(1200) {
      display: none;
      visibility: hidden;
    }
  }

  &__button {
    height: 50%;
    width: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    transition: 0.3s all;
    outline-color: $accent;
    justify-content: center;
    background-color: $dark;

    &:hover {
      opacity: 0.7;
    }
  }

  &__icon {
    fill: $light;
    display: block;
    width: rem(10);
    height: rem(6);
  }
}
</style>
