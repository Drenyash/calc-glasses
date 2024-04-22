<script>
export default {
  name: "Parties",
  data() {
    return {};
  },
  methods: {
    processingType(evt) {
      const target = evt.target;
      const targetName = target.getAttribute("name");
      const targetValue = target.getAttribute("value");
      const data = {
        key: "processings",
        name: targetName,
        value: targetValue,
        status: target.checked,
      };
      this.$store.commit("setProcessingType", data);
      this.$store.dispatch("sendClearData");
    },
  },
  computed: {},
};
</script>

<template>
  <p class="f-button__title">Обработка сторон:</p>
  <div class="f-processing">
    <div class="f-processing__item">
      <svg
        width="95"
        height="120"
        viewBox="0 0 95 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="95" height="120" fill="white" />
        <rect
          x="0.5"
          y="0.5"
          width="94"
          height="119"
          stroke="#2E2E2E"
          stroke-opacity="0.5"
        />
        <rect width="95" height="12" fill="#00B152" />
        <path
          d="M49.602 35C49.4713 34.6173 49.336 34.2393 49.196 33.866C49.056 33.4927 48.9207 33.11 48.79 32.718H44.702C44.5713 33.11 44.436 33.4973 44.296 33.88C44.1653 34.2533 44.0347 34.6267 43.904 35H42.07C42.434 33.964 42.7793 33.0073 43.106 32.13C43.4327 31.2527 43.75 30.422 44.058 29.638C44.3753 28.854 44.688 28.1073 44.996 27.398C45.304 26.6887 45.6213 25.9887 45.948 25.298H47.614C47.9407 25.9887 48.258 26.6887 48.566 27.398C48.874 28.1073 49.182 28.854 49.49 29.638C49.8073 30.422 50.1293 31.2527 50.456 32.13C50.792 33.0073 51.142 33.964 51.506 35H49.602ZM46.746 27.174C46.5313 27.6687 46.284 28.2707 46.004 28.98C45.7333 29.6893 45.4487 30.4593 45.15 31.29H48.342C48.0433 30.4593 47.754 29.6847 47.474 28.966C47.194 28.2473 46.9513 27.65 46.746 27.174Z"
          fill="#00B152"
        />
      </svg>
      <ul class="f-processing-type">
        <li class="f-processing-type__item">
          <label class="f-processing-type__element">
            <input
              class="f-processing-type__input"
              type="checkbox"
              name="type-a"
              value="grinding"
              data-index="0"
              @change="processingType"
            />
            <span>С шлифовкой</span>
          </label>
        </li>
        <li class="f-processing-type__item">
          <label class="f-processing-type__element">
            <input
              class="f-processing-type__input"
              type="checkbox"
              name="type-a"
              value="polishing"
              data-index="1"
              @change="processingType"
            />
            <span>С полировкой</span>
          </label>
        </li>
        <li class="f-processing-type__item">
          <label class="f-processing-type__element">
            <input
              class="f-processing-type__input"
              type="checkbox"
              name="type-a"
              value="chamfer"
              data-index="1"
              @change="processingType"
            />
            <span>Снятие фаски</span>
          </label>
        </li>
      </ul>
    </div>
    <div class="f-processing__item">
      <svg
        width="96"
        height="120"
        viewBox="0 0 96 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.497192" width="95" height="120" fill="white" />
        <rect
          x="0.997192"
          y="0.5"
          width="94"
          height="119"
          stroke="#2E2E2E"
          stroke-opacity="0.5"
        />
        <rect
          x="83.4972"
          y="120"
          width="120"
          height="12"
          transform="rotate(-90 83.4972 120)"
          fill="#00B152"
        />
        <path
          d="M67.5852 66.112C67.0719 66.112 66.5539 66.0933 66.0312 66.056C65.5085 66.028 65.0512 65.9627 64.6592 65.86V56.438C64.8645 56.4007 65.0839 56.368 65.3172 56.34C65.5505 56.3027 65.7885 56.2747 66.0312 56.256C66.2739 56.2373 66.5119 56.2233 66.7452 56.214C66.9879 56.2047 67.2165 56.2 67.4312 56.2C68.0192 56.2 68.5652 56.2467 69.0692 56.34C69.5732 56.424 70.0072 56.5687 70.3712 56.774C70.7445 56.9793 71.0339 57.25 71.2392 57.586C71.4445 57.922 71.5472 58.3373 71.5472 58.832C71.5472 59.2893 71.4352 59.6813 71.2112 60.008C70.9965 60.3347 70.6932 60.596 70.3012 60.792C70.8892 60.988 71.3232 61.2773 71.6032 61.66C71.8832 62.0427 72.0232 62.528 72.0232 63.116C72.0232 64.1147 71.6592 64.866 70.9312 65.37C70.2032 65.8647 69.0879 66.112 67.5852 66.112ZM66.3952 61.632V64.586C66.5912 64.6047 66.8012 64.6187 67.0252 64.628C67.2492 64.6373 67.4545 64.642 67.6412 64.642C68.0052 64.642 68.3412 64.6187 68.6492 64.572C68.9665 64.5253 69.2372 64.446 69.4612 64.334C69.6945 64.2127 69.8765 64.054 70.0072 63.858C70.1472 63.662 70.2172 63.41 70.2172 63.102C70.2172 62.5513 70.0165 62.1687 69.6152 61.954C69.2139 61.7393 68.6585 61.632 67.9492 61.632H66.3952ZM66.3952 60.246H67.6412C68.3132 60.246 68.8405 60.1527 69.2232 59.966C69.6059 59.77 69.7972 59.4247 69.7972 58.93C69.7972 58.4633 69.5965 58.132 69.1952 57.936C68.8032 57.74 68.2899 57.642 67.6552 57.642C67.3845 57.642 67.1419 57.6467 66.9272 57.656C66.7219 57.6653 66.5445 57.6793 66.3952 57.698V60.246Z"
          fill="#00B152"
        />
      </svg>
      <ul class="f-processing-type">
        <li class="f-processing-type__item">
          <label class="f-processing-type__element">
            <input
              class="f-processing-type__input"
              type="checkbox"
              name="type-b"
              value="grinding"
              data-index="0"
              @change="processingType"
            />
            <span>С шлифовкой</span>
          </label>
        </li>
        <li class="f-processing-type__item">
          <label class="f-processing-type__element">
            <input
              class="f-processing-type__input"
              type="checkbox"
              name="type-b"
              value="polishing"
              data-index="1"
              @change="processingType"
            />
            <span>С полировкой</span>
          </label>
        </li>
        <li class="f-processing-type__item">
          <label class="f-processing-type__element">
            <input
              class="f-processing-type__input"
              type="checkbox"
              name="type-b"
              value="chamfer"
              data-index="1"
              @change="processingType"
            />
            <span>Снятие фаски</span>
          </label>
        </li>
      </ul>
    </div>
    <div class="f-processing__item">
      <svg
        width="95"
        height="120"
        viewBox="0 0 95 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="-0.00564575" width="95" height="120" fill="white" />
        <rect
          x="0.494354"
          y="0.5"
          width="94"
          height="119"
          stroke="#2E2E2E"
          stroke-opacity="0.5"
        />
        <rect x="-0.00564575" y="108" width="95" height="12" fill="#00B152" />
        <path
          d="M48.4684 95.21C47.7404 95.21 47.087 95.098 46.5084 94.874C45.9297 94.65 45.4397 94.3233 45.0384 93.894C44.637 93.4553 44.329 92.9233 44.1144 92.298C43.8997 91.6727 43.7924 90.954 43.7924 90.142C43.7924 89.33 43.9137 88.6113 44.1564 87.986C44.4084 87.3607 44.749 86.8333 45.1784 86.404C45.6077 85.9653 46.1117 85.634 46.6904 85.41C47.269 85.186 47.8897 85.074 48.5524 85.074C48.9537 85.074 49.3177 85.1067 49.6444 85.172C49.971 85.228 50.2557 85.2933 50.4984 85.368C50.741 85.4427 50.9417 85.522 51.1004 85.606C51.259 85.69 51.371 85.7507 51.4364 85.788L50.9184 87.23C50.6944 87.09 50.3724 86.9593 49.9524 86.838C49.5417 86.7073 49.0937 86.642 48.6084 86.642C48.1884 86.642 47.7964 86.7167 47.4324 86.866C47.0684 87.006 46.751 87.2207 46.4804 87.51C46.219 87.7993 46.0137 88.1633 45.8644 88.602C45.715 89.0407 45.6404 89.5493 45.6404 90.128C45.6404 90.6413 45.6964 91.1127 45.8084 91.542C45.9297 91.9713 46.1117 92.3447 46.3544 92.662C46.597 92.97 46.905 93.2127 47.2784 93.39C47.6517 93.558 48.0997 93.642 48.6224 93.642C49.2477 93.642 49.7564 93.5813 50.1484 93.46C50.5404 93.3293 50.8437 93.208 51.0584 93.096L51.5344 94.538C51.4224 94.6127 51.2684 94.6873 51.0724 94.762C50.8857 94.8367 50.6617 94.9113 50.4004 94.986C50.139 95.0513 49.845 95.1027 49.5184 95.14C49.1917 95.1867 48.8417 95.21 48.4684 95.21Z"
          fill="#00B152"
        />
      </svg>
      <ul class="f-processing-type">
        <li class="f-processing-type__item">
          <label class="f-processing-type__element">
            <input
              class="f-processing-type__input"
              type="checkbox"
              name="type-c"
              value="grinding"
              data-index="0"
              @change="processingType"
            />
            <span>С шлифовкой</span>
          </label>
        </li>
        <li class="f-processing-type__item">
          <label class="f-processing-type__element">
            <input
              class="f-processing-type__input"
              type="checkbox"
              name="type-c"
              value="polishing"
              data-index="1"
              @change="processingType"
            />
            <span>С полировкой</span>
          </label>
        </li>
        <li class="f-processing-type__item">
          <label class="f-processing-type__element">
            <input
              class="f-processing-type__input"
              type="checkbox"
              name="type-c"
              value="chamfer"
              data-index="1"
              @change="processingType"
            />
            <span>Снятие фаски</span>
          </label>
        </li>
      </ul>
    </div>
    <div class="f-processing__item">
      <svg
        width="96"
        height="120"
        viewBox="0 0 96 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.491516" width="95" height="120" fill="white" />
        <rect
          x="0.991516"
          y="0.5"
          width="94"
          height="119"
          stroke="#2E2E2E"
          stroke-opacity="0.5"
        />
        <rect
          x="0.491516"
          y="120"
          width="120"
          height="12"
          transform="rotate(-90 0.491516 120)"
          fill="#00B152"
        />
        <path
          d="M25.4175 63.544C25.5202 63.5533 25.6555 63.5627 25.8235 63.572C25.9915 63.572 26.2202 63.572 26.5095 63.572C27.6948 63.572 28.5768 63.2733 29.1555 62.676C29.7435 62.0693 30.0375 61.2247 30.0375 60.142C30.0375 59.0407 29.7528 58.196 29.1835 57.608C28.6142 57.02 27.7322 56.726 26.5375 56.726C26.0148 56.726 25.6415 56.74 25.4175 56.768V63.544ZM31.8855 60.142C31.8855 60.982 31.7548 61.7147 31.4935 62.34C31.2322 62.956 30.8588 63.474 30.3735 63.894C29.8975 64.3047 29.3188 64.6127 28.6375 64.818C27.9655 65.014 27.2188 65.112 26.3975 65.112C26.0055 65.112 25.5622 65.0933 25.0675 65.056C24.5728 65.028 24.1015 64.9627 23.6535 64.86V55.438C24.1015 55.3353 24.5775 55.27 25.0815 55.242C25.5855 55.214 26.0335 55.2 26.4255 55.2C27.2375 55.2 27.9795 55.298 28.6515 55.494C29.3235 55.6807 29.8975 55.9793 30.3735 56.39C30.8588 56.7913 31.2322 57.3047 31.4935 57.93C31.7548 58.546 31.8855 59.2833 31.8855 60.142Z"
          fill="#00B152"
        />
      </svg>
      <ul class="f-processing-type">
        <li class="f-processing-type__item">
          <label class="f-processing-type__element">
            <input
              class="f-processing-type__input"
              type="checkbox"
              name="type-d"
              value="grinding"
              data-index="0"
              @change="processingType"
            />
            <span>С шлифовкой</span>
          </label>
        </li>
        <li class="f-processing-type__item">
          <label class="f-processing-type__element">
            <input
              class="f-processing-type__input"
              type="checkbox"
              name="type-d"
              value="polishing"
              data-index="1"
              @change="processingType"
            />
            <span>С полировкой</span>
          </label>
        </li>
        <li class="f-processing-type__item">
          <label class="f-processing-type__element">
            <input
              class="f-processing-type__input"
              type="checkbox"
              name="type-d"
              value="chamfer"
              data-index="1"
              @change="processingType"
            />
            <span>Снятие фаски</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.f-button__title {
  width: 100%;
  text-align: left;
  font-size: rem(13);
  margin-bottom: rem(15);
}

.f-processing {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: space-between;

  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

.f-processing-type {
  display: flex;
  flex-direction: column;
  gap: 9px;

  &__element {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.09px;
    cursor: pointer;
  }

  &__input {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    width: 15px;
    height: 15px;

    &::before {
      content: "";
      display: block;
      flex-shrink: 0;
      width: 7.5px;
      height: 7.5px;
      border-radius: 50%;
      background-color: #dbdbdb;
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
