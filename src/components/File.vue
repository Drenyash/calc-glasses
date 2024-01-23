<template>
  <div class="file">
    <ul class="file__ul">
      <li class="file__li" v-for="file in getFiles()">
        <button class="file__remove" title="Убрать файл" @click="clearFile(file)">
          <img src="/src/assets/icon-remove.svg"
               alt="Убрать кромку этого вида"
               class="file__remove-icon">
        </button>
        <p class="file__item-title">{{ file.text }}</p>
      </li>
    </ul>
    <label class="file__label">
      <span class="file__label-text"> + Файлы чертежей </span>
      <input class="file__input"
             type="file"
             multiple=""
             @change="updateFiles"
             id="formFile">
    </label>
    <button class="file__btn" @click="clearAllFiles">Очистить</button>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";

export default {
  components: {Input},
  data() {
    return {}
  },
  methods: {
    clearAllFiles() {
      this.$store.commit('removeDrawingFiles')
      this.$store.dispatch('sendClearData');
    },
    clearFile(file) {
      this.$store.commit('removeDrawingFiles', file)
      this.$store.dispatch('sendClearData');
    },
    updateFiles(evt) {
      const reader = new FileReader();
      reader.readAsDataURL(evt.target.files[0]);
      reader.onload = () => {
        const data = {
          id: Date.now(),
          text: evt.target.files[0].name,
          file: reader.result
        }

        this.$store.commit('setDrawingFiles', data)
        this.$store.dispatch('sendClearData');
        evt.target.value = '';
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    },
    getFiles() {
      return this.$store.getters.getDrawingFiles
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.file {
  &__input {
    display: none;
  }

  &__label {
    &-text {
      color: #00b152;
      display: inline-flex;
      align-items: center;
      padding: 0.9375rem;
      cursor: pointer;
      transition: all .3s;
      background: inherit;
      font-size: .875rem;
      padding-left: 0;
    }
  }

  &__btn {
    color: #ff3131;
    display: inline-flex;
    align-items: center;
    padding: 0.9375rem;
    cursor: pointer;
    background: inherit;
    font-size: .875rem;
    transition: all .3s;
  }

  &__remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 0.25rem;
    margin-right: 0.5rem;
    background: none;
    transition: all .3s;
    cursor: pointer;

    &-icon {
      display: block;
      width: 14px;
      height: 16px;
    }
  }

  &__li {
    display: flex;
    align-items: center;
  }
}
</style>
