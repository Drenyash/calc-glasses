<template>
  <label class="f-textarea">
    <p class="f-textarea__title">
      {{ title }}
    </p>
    <input type="text" class="f-textarea__field" v-model="message">
  </label>
</template>

<script>
export default {
  name: "Input",
  props: {
    fieldKey: String,
    title: String,
    millingType: Number,
  },
  data() {
    return {
      milling: this.millingType,
    }
  },
  computed: {
    message: {
      get() {
        return this.$store.getters.getTabValue(this.fieldKey);
      },
      set(newValue) {
        const data = {
          key: this.fieldKey,
          value: newValue,
        }
        this.$store.commit('setTabValue', data);
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.f-textarea {
  display: block;

  &__title {
    font-weight: 400;
    font-size: rem(13);
    margin-bottom: rem(10);
  }

  &__field {
    width: 100%;
    display: block;
    height: rem(50);
    font-size: rem(13);
    padding: 0 rem(15);
    border: 1px solid #DCDCDC;

    &::placeholder {
      color: #B0B0B0;
    }
  }
}
</style>
