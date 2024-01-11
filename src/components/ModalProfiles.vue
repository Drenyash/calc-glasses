<script>
export default {
  name: 'ModalProfiles',
  data() {
    return {
      opened: false,
      type: 'materials'
    };
  },
  methods: {
    toggleMaterial() {
      if (this.selectedMaterial) {
        const data = {
          key: 'selectedMaterial',
          value: null
        };
        this.$store.commit('setTabValue', data);
      } else {
        this.opened = !this.opened;
      }
    },
    selectMaterial(item) {
      const data = {
        key: 'selectedMaterial',
        value: +item.id
      };
      this.$store.commit('setTabValue', data);
      this.$store.dispatch('sendClearData');
      this.opened = false;
    },
  },
  computed: {
    items() {
      return this.$store.getters.getItems(this.type);
    },
    selectedMaterial() {
      return this.$store.getters['getMaterialById'];
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

  <button class="f-button" @click="toggleMaterial" v-bind:disabled="loading">
    <p class="f-button__title">
      Вставка:
    </p>
    <div class="f-button__wrapper">
      <div class="f-button__main">
        <picture class="f-button__picture">
          <template v-if="selectedMaterial">
            <svg class="f-button__icon-close" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.418418 0.402728C0.97631 -0.134243 1.88083 -0.134243 2.43872 0.402728L10 7.68046L17.5613 0.402727C18.1192 -0.134244 19.0237 -0.134244 19.5816 0.402727C20.1395 0.939698 20.1395 1.8103 19.5816 2.34727L11.0102 10.5973C10.4523 11.1342 9.54774 11.1342 8.98985 10.5973L0.418419 2.34727C-0.139473 1.8103 -0.139473 0.939698 0.418418 0.402728Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5816 18.5973C19.0237 19.1342 18.1192 19.1342 17.5613 18.5973L10 11.3195L2.43872 18.5973C1.88083 19.1342 0.97631 19.1342 0.418418 18.5973C-0.139474 18.0603 -0.139474 17.1897 0.418419 16.6527L8.98985 8.40273C9.54774 7.86576 10.4523 7.86576 11.0102 8.40273L19.5816 16.6527C20.1395 17.1897 20.1395 18.0603 19.5816 18.5973Z"/>
            </svg>
            <img :src="selectedMaterial.img" :alt="selectedMaterial.title" >
          </template>
          <template v-else>
            <svg viewBox="0 0 490.667 490.667" class="f-button__no-photo" >
              <path d="M245.333,170.667c-1.088,0-2.133,0.085-3.968,0.299c-5.888,0.341-8.981,5.227-8.661,11.115s6.699,10.325,12.629,9.92
                            c29.397,0,53.333,23.936,53.248,54.059c-0.021,0.213-0.192,1.856-0.192,2.091c-0.32,5.739,4.053,10.005,9.792,10.496
                            c0.277,0.021,0.533,0.021,0.811,0.021c5.419,0,10.133-4.672,10.773-10.133c0.064-0.405,0.235-2.773,0.235-3.2
                            C320,204.16,286.507,170.667,245.333,170.667z"/>
              <path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333
                            S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224c0-57.92,22.272-110.613,58.496-150.4l52.267,52.267
                            c-15.808,14.08-25.429,34.155-25.429,55.467V288c0,41.173,33.493,74.667,74.667,74.667h128c10.773,0,21.269-2.773,30.997-7.232
                            l55.403,55.403C355.947,447.061,303.253,469.333,245.333,469.333z M245.333,320c16.213,0,31.637-5.483,44.48-15.083
                            l34.176,34.176c-4.757,1.365-9.664,2.24-14.656,2.24h-128C151.936,341.333,128,317.397,128,288v-85.333
                            c0-15.893,7.061-30.315,19.072-40.491l38.677,38.677c-9.6,12.843-15.083,28.288-15.083,44.48
                            C170.667,286.507,204.16,320,245.333,320z M192,245.333c0-10.517,3.221-20.629,8.939-29.291l73.707,73.707
                            c-8.661,5.717-18.773,8.917-29.312,8.917C215.936,298.667,192,274.731,192,245.333z M410.816,395.755L94.912,79.851
                            c39.808-36.224,92.48-58.517,150.421-58.517c123.52,0,224,100.48,224,224C469.333,303.275,447.04,355.947,410.816,395.755z"/>
              <path d="M309.312,128h-12.48c-4.416-12.416-16.277-21.333-30.187-21.333h-42.667c-14.507,0-26.795,9.728-30.699,22.997
                            c-2.965,1.877-4.949,5.205-4.949,9.003c0,5.888,4.779,10.667,10.667,10.667h3.669c5.888,0,10.667-4.779,10.667-10.667
                            S218.112,128,224,128h42.667c5.888,0,10.667,4.779,10.667,10.667s4.779,10.667,10.667,10.667h21.333
                            c29.397,0,53.333,23.936,53.333,53.333V288c0,5.803-1.067,11.755-3.157,17.707c-1.941,5.568,0.981,11.648,6.528,13.611
                            c1.173,0.405,2.368,0.597,3.541,0.597c4.395,0,8.512-2.752,10.027-7.125c2.901-8.256,4.373-16.576,4.373-24.789v-85.333
                            C383.979,161.493,350.485,128,309.312,128z"/>
            </svg>
          </template>
        </picture>
        <p class="f-button__text">
          <template v-if="selectedMaterial">
            {{ selectedMaterial.articleItem }}
          </template>
          <template v-else>
            Не выбрано
          </template>
        </p>
      </div>
      <div class="f-button__aside">
        <svg class="f-button__icon" viewBox="0 0 20 11">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0.418418 0.402728C0.97631 -0.134243 1.88083 -0.134243 2.43872 0.402728L10 7.68046L17.5613 0.402727C18.1192 -0.134244 19.0237 -0.134244 19.5816 0.402727C20.1395 0.939698 20.1395 1.8103 19.5816 2.34727L11.0102 10.5973C10.4523 11.1342 9.54774 11.1342 8.98985 10.5973L0.418419 2.34727C-0.139473 1.8103 -0.139473 0.939699 0.418418 0.402728Z"/>
        </svg>
      </div>
    </div>
  </button>
  <div class="f-modal" v-if="opened" @click.self="this.opened = false">
    <div class="f-modal__content">
      <button class="f-modal__button" @click="this.opened = false">
        <svg class="f-modal__icon" viewBox="0 0 24 24">
          <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
        </svg>
      </button>
      <div class="columns">
        <div class="columns__col columns__col--2" v-for="(item, index) in items" :key="index">
          <a href="#" @click.prevent="selectMaterial(item)" class="f-article">
            <picture class="f-article__picture">
              <img :src="item.img" :alt="item.title">
            </picture>
            <p class="f-article__title">
              {{ item.title }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.f-button {
  width: 100%;
  cursor: pointer;
  background: none;

  &:hover {
    .button {
      &__aside {
        background-color: $light;
      }

      &__icon {
        fill: $accent;
      }
    }
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &__title {
    width: 100%;
    text-align: left;
    font-size: rem(13);
    margin-bottom: rem(15);
    &--transparent {
      color: transparent;
    }
  }

  &__wrapper {
    width: 100%;
    display: flex;
  }

  &__main {
    flex-grow: 1;
  }

  &__picture {
    display: flex;
    height: rem(120);
    position: relative;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: rem(10);
    justify-content: center;
    border: 1px solid $accent;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
      object-position: center;
    }
  }

  &__text {
    font-size: rem(13);
  }

  &__aside {
    display: flex;
    width: rem(36);
    flex-shrink: 0;
    height: rem(120);
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    border: 1px solid $accent;
    background-color: $accent;
    transition: 0.3s background-color;
  }

  &__icon {
    fill: $light;
    display: block;
    width: rem(20);
    height: rem(11);
    transition: 0.3s fill;
  }

  &__no-photo {
    width: 60%;
    height: 60%;
    fill: $accent;
    display: block;
  }

  &__icon-close {
    top: 50%;
    left: 50%;
    fill: $light;
    width: rem(20);
    display: block;
    height: rem(20);
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
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
</style>
