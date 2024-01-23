<script>
export default {
  name: 'ColorType',
  data() {
    return {
    };
  },
  methods: {
    processingType(evt) {
      const target = evt.target;
      let key = null;
      if (target.getAttribute('data-index') === 0) {
        key = target.value
      } else {
        key = target.value
      }
      const data = {
        key: key,
        value: !!target.checked,
      };
      this.$store.commit('setProcessingType', data);
      this.$store.dispatch('sendClearData');
    }
  },
  computed: {}
}
</script>

<template>
  <p class="f-button__title f-button__title--transparent">
    Вставка:
  </p>
  <ul class="f-color-type">
    <li class="f-color-type__item">
      <label class="f-color-type__element">
        <input class="f-color-type__input" type="checkbox" name="colorType" value="chamfer" data-index="0"
               @change="processingType">
        <span>Со снятием фаски</span>
      </label>
    </li>
    <li class="f-color-type__item">
      <label class="f-color-type__element">
        <input class="f-color-type__input" type="checkbox" name="colorType" value="polishing" data-index="1"
               @change="processingType">
        <span>С полировкой</span>
      </label>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.f-button__title {
  width: 100%;
  text-align: left;
  font-size: rem(13);
  margin-bottom: rem(15);

  &--transparent {
    color: transparent;
  }
}

.f-color-type {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__element {
    display: flex;
    align-items: center;
    gap: 7px;
    cursor: pointer;

    span {
      color: #2E2E2E;
      font-size: 14px;
      font-weight: 400;
    }
  }

  &__input {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #DBDBDB;
    width: 15px;
    height: 15px;

    &::before {
      content: '';
      display: block;
      flex-shrink: 0;
      width: 7.5px;
      height: 7.5px;
      border-radius: 50%;
      background-color: #DBDBDB;
    }

    &:checked {
      border-color: $green;

      &::before {
        background-color: $green;
      }
    }
  }
}
</style>
