<template>
  <div class="container h-[500px] w-100 m-auto">
    <div
      v-for="(testimonial, index) in testimonials"
      class="w-4/5 lg:w-1/2"
      :key="index"
      :class="'item-' + (index + 1)"
    >
      <p class="text-xl md:text-4xl text-[#0b6bff] font-semibold">{{ testimonial.author }}</p>
      <p class="text-[15px] text-[#0b6bff] font-semibold mb-3">{{ testimonial.administration }}</p>
      <p class="text-base md:text-3xl font-normal">{{ testimonial.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quotes-section',
  components: {},
  data() {
    return {
      testimonials: [
        {
          author: 'Carlos García Herrera',
          administration: 'Administración ABG - 90 consorcios',
          text: '“La implementación de Octopus fue muy buena . El equipo de Octopus nos ayuda un montón. Lo recomendamos ampliamente”',
        },
        {
          author: 'María Elena Fernandez',
          administration: '12 consorcios',
          text: '“Octopus es una empresa del futuro. Me siento acompañada y respaldada. Mis vecinos lo agradecen en las asambleas”',
        },
        {
          author: 'Marita Carreño',
          administration: '26 consorcios',
          text: '“Me facilitó muchísimo el trabajo. Ganamos muchísimo tiempo desde que trabajamos con Octopus”',
        },
        {
          author: 'Daiana Blum',
          administration: '115 consorcios',
          text: '“Octopus se convirtió en una pieza fundamental de la administración. Es nuestro socio estratégico en el crecimiento. Lo mejor es que te atienden personalmente, te capacitan y responden muy rápido”',
        },
      ],
    };
  },
};
</script>

<style>
.container {
  color: white;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
}

.item-1,
.item-2,
.item-3,
.item-4 {
  position: absolute;
  display: block;

  animation-duration: 30s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.item-1 {
  animation-name: anim-1;
}

.item-2 {
  animation-name: anim-2;
}

.item-3 {
  animation-name: anim-3;
}

.item-4 {
  animation-name: anim-4;
}

@keyframes anim-1 {
  0%, 0% { left: -100%; opacity: 0; }
  10%, 20% { left: 50%; transform: translateX(-50%); opacity: 1; }
  25%, 100% { left: 110%; opacity: 0; }
}

@keyframes anim-2 {
  0%, 20% { left: -100%; opacity: 0; }
  30%, 45% { left: 50%; transform: translateX(-50%); opacity: 1; }
  50%, 100% { left: 110%; opacity: 0; }
}

@keyframes anim-3 {
  0%, 45% { left: -100%; opacity: 0; }
  55%, 70% { left: 50%; transform: translateX(-50%); opacity: 1; }
  75%, 100% { left: 110%; opacity: 0; }
}

@keyframes anim-4 {
  0%, 70% { left: -100%; opacity: 0; }
  80%, 95% { left: 50%; transform: translateX(-50%); opacity: 1; }
  100% { left: 110%; opacity: 0; }
}

</style>
