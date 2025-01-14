<template>
    <div class="bg-[#19191B] text-center pb-20">
        <h1 class="text-white text-3xl lg:text-5xl font-semibold mb-10 md:mb-20">
          Beneficios
        </h1>
        <div class="w-11/12 max-w-[1000px] m-auto flex justify-center">
          <video ref="video" height="240" controls>
              <source src="../assets/video/video.mp4" type="video/mp4">
              <source src="movie.ogg" type="video/ogg">
              <track src="../assets/video/captions_en.vtt"
                kind="captions" srclang="en" label="English"
              >
          </video>
        </div>
        <div class="mt-10 lg:mt-20 flex flex-wrap gap-10 justify-center md:px-7 mb-10">
          <InfoCard
            v-for="card in infoCards"
            :key="card.title"
            :img="card.img"
            :title="card.title"
            :description="card.description"
          />
        </div>

        <div class="laptop-container my-20">
          <img src="../assets/img/laptop.png" alt="laptop"
            class="laptop-frame w-full xl:min-w-[1000px]"
          />
          <div class="screen-container">
            <transition :duration="{ enter: 500, leave: 800 }" name="slide-fade" mode="out-in">
              <img
                v-if="currentImage"
                :src="currentImage"
                alt="screen content"
                class="screen-content"
                :key="currentImage"
              />
            </transition>
          </div>
        </div>

        <Quotes />

    </div>
</template>

<script>
import InfoCard from './InfoCard.vue';
import Quotes from './Quotes.vue';
import pantalla1 from '../assets/img/pantalla-01.jpg';
import pantalla2 from '../assets/img/pantalla-02.jpg';
import pantalla3 from '../assets/img/pantalla-03.jpg';
import pantalla4 from '../assets/img/pantalla-04.jpg';
import pantalla5 from '../assets/img/pantalla-05.jpg';

export default {
  name: 'Info-section',
  components: {
    InfoCard,
    Quotes,
  },
  data() {
    return {
      images: [pantalla1, pantalla2, pantalla3, pantalla4, pantalla5],
      currentIndex: 0,
      infoCards: [
        {
          title: 'Gastos automáticos',
          description: 'En un paso podés subir las facturas, cargar gastos y subir documentos.',
          img: 'icon1.png',
        },
        {
          title: 'Cobranzas por extracto bancario',
          description: 'Imputa cobranzas usando el extracto de tu banco.',
          img: 'gastos.png',
        },
        {
          title: 'Equipo de implementación',
          description: 'Implementación personalizada y a cargo de expertos.',
          img: 'equipo.png',
        },
      ],
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  mounted() {
    this.startImageRotation();
  },
  methods: {
    startImageRotation() {
      setInterval(() => {
        if (this.currentIndex === this.images.length - 1) {
          this.currentIndex = 0;
          return;
        }

        this.currentIndex += 1;
      }, 7500); // Cambia cada 3 segundos
    },
  },
};

</script>

<style scoped>
.laptop-container {
  position: relative;
  width: 100%; /* Asegura que sea responsive */
  max-width: 1000px; /* Ajusta según necesites */
  margin: auto;
  margin-top: 100px;
  margin-bottom: 60px;
}

.laptop-frame {
  height: auto;
}

.screen-container {
  width: max-content;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: absolute;
  top: 1.5%; /* Ajusta estos valores para encajar en la pantalla */
  left: 11.9%;
  height: 92%; /* Ajusta según el tamaño relativo de la pantalla */
  overflow: hidden;
}

@media screen and (min-width: 1280px) {
  /* .screen-container {
    left: 15.4%;
  } */
}

.screen-content {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Mantén proporciones de la imagen */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.v-leave,
.v-enter-to {
    position: relative;
    opacity: 1;
}

.v-enter,
.v-leave-to {
    position: absolute;
    opacity: 0;
}
</style>
