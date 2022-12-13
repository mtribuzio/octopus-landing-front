<template>
    <div class="bg-black text-center pb-20">
        <img
          src="../assets/img/blue-shape.png"
          alt="black-shape"
          class="min-w-[100vw]"
         />
        <h1 class="text-white mt-20 text-3xl lg:text-5xl font-semibold mb-20">
          Características <br/> Principales
        </h1>
        <div class="flex flex-wrap gap-10 justify-center px-7">
          <InfoCard
            v-for="card in infoCards"
            :key="card.title"
            :img="card.img"
            :title="card.title"
            :description="card.description"
          />
        </div>
        <div class="w-[80vw] mx-auto mt-10">
          <hr class="border-slate-600">
          <p class="text-white text-left mt-3 text-sm">
            Visitá nuestra web <a href="https://octopus.com.ar" target="_blank" class="text-blue-500">octopus.com.ar</a>
          </p>
        </div>

    </div>
</template>

<script>
import InfoCard from './InfoCard.vue';

export default {
  name: 'Info-section',
  components: {
    InfoCard,
  },
  data() {
    return {
      infoCards: [
        {
          title: 'Velocidad',
          description: 'Automatizá la carga de gastos. Imputá cobranzas masivas. Liquidá sueldos en 2 pasos.',
          img: 'icon1.png',
        },
        {
          title: 'Transparencia',
          description: 'Comunicate con tus vecinos en forma eficiente. Mostrá tus gestiones con claridad.',
          img: 'icon2.png',
        },
        {
          title: 'Tecnología superior',
          description: 'Trabajá desde donde quieras. Toda tu informacion almacenada en la nube.',
          img: 'icon3.png',
        },
      ],
    };
  },
};

</script>
