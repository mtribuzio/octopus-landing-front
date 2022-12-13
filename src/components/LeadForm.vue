<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/media-has-caption -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="bg-[#0B6BFF] text-center text-white relative">
        <img
          src="../assets/img/white-shape.svg"
          alt="white-shape"
          class="min-w-[100vw] relative top-[-1px]"
        />
        <img
          alt="consortium image"
          src="../assets/img/info-img.svg"
          class="absolute
          top-[-45px]
            sm:top-[-60px]
            lg:top-[-70px]
            left-[5vw] w-[200px]
            xl:left-[15vw]
            sm:w-[250px]
            md:w-[300px]
            lg:w-[400px]"
        />
        <h1 class="text-3xl px-5 lg:text-5xl font-semibold mb-10 mt-20">
            Si administrás <br/> consorcios y barrios,<br/> necesitás Octopus.
        </h1>
        <div class="modal" :class="showModal ? '' : 'hidden'"
          @click="toggleModal"
        >
            <div class="modal-content" @click="(event) => event.stopPropagation()">
                <button class="close" @click="toggleModal">X</button>
                <video ref="video" width="320" height="240" controls>
                    <source src="../assets/video/video.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                </video>
            </div>
        </div>
        <button
            class="mb-20 lg:mb-32 max-w-[90%] md-w-[400px] px-10 text-semibold"
            @click="toggleModal"
        >
            Mirá todo lo que podes hacer
        </button>
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
