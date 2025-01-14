<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/media-has-caption -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="bg-[#0A0547] text-center text-white relative overflow-hidden">
        <img
          src="../assets/img/white-shape.svg"
          alt="white-shape"
          class="min-w-[100vw] relative top-[-1px]"
        />
        <div class="flex md:justify-end flex-col items-center lg:flex-row xl:pr-[2vw] xl:pr[20vw]">
          <h1
            class="text-xl xl:px-5 mx-4 lg:mx-0
              lg:text-2xl xl:text-3xl lg:max-w-xl xl:max-w-2xl font-semibold mb-60 lg:mb-50 mt-10
              2xl:mr-40">
            Si administrás consorcios,
            Octopus es la solución ideal para liquidar expensas y
            sueldos de forma fácil y rápida.
          </h1>
          <img
            alt="consortium image"
            src="../assets/img/Edificios.svg"
            class="
              absolute
              top-[200px]
              sm:top-[150px]
              lg:top-[0px]
              lg:left-[10vw]
              w-[500px]"
          />
        </div>
        <img
          src="../assets/img/black-shape.svg"
          alt="black-shape"
          class="min-w-[100vw] absolute bottom-[0px]"
         />
    </div>
</template>

<script>
export default {
  name: 'Lead-form',
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
      if (this.showModal) {
        this.$refs.video.play();
      } else {
        this.$refs.video.pause();
      }
    },
  },
};
</script>

<style scoped>
    .modal {
        background-color: rgba(0, 0, 0, 0.30);
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    .modal.hidden {
        display: none;
    }
    .modal-content {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        right: 50%;
        margin: auto;
        transform: translate(50%, -50%);
        min-width: 80%;
        max-height: max-content;
        background-color: white;
        cursor: default;
    }

    .modal-content .close{
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        background-color: red;
        color: white;
        width: 30px;
        height: 30px;
        z-index: 100;
        border-radius: 0;
        border-bottom-left-radius: 20px;
    }

    .modal-content video {
        width: 100%;
    }
  button{
    height: 44px;
    border-radius: 5px;
    background-color: #FC5867;
  }
</style>
