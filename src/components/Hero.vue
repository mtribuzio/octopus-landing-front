<template>
    <img src="../assets/img/circulo.svg" alt="circulo" class="absolute">
    <header
    class="max-w-full
    bg-transparent
    py-5
    px-8 flex
    justify-center
    lg:justify-start
    lg:pl-[5%]"
    >
        <img src="../assets/img/octopus_logo.svg" class="w-44 h-12 lg:w-56 lg:h-16" alt="icon"/>
    </header>

    <div class="min-w-[100vw] max-h-max mt-20 lg:flex justify-end items-end mb-32 z-2 relative">
        <div
            class="
             flex
             flex-col
             text-center
             grow-0
             lg:text-left
             px-5
             lg:justify-between
             xl:mr-[5%]
             lg:ml-[50px]"
            >
            <h2
                class="text-4xl tracking-tight font-semibold
                leading-9"
            >
                El sistema #1 <br/> para administrar
            </h2>
            <p class="text-[#08375F] my-5">
                Dejanos tus datos y conversá con uno de nuestros asesores
            </p>
            <img
                src="../assets/img/hero-image-mobile.png"
                alt="app-image"
                class="my-10 lg:hidden object-cover px-4 max-width-[100%]">
            <ContactForm />
        </div>

        <div class="flex justify-end">
            <img
                src="../assets/img/hero-image.png"
                alt="app-image"
                class="hidden lg:block object-fit lg:w-[100%] lg:max-w-[850px] min-w-[700px]">
        </div>
    </div>
</template>

<script>
import ContactForm from './ContactForm.vue';

export default {
  name: 'Hero-section',
  components: {
    ContactForm,
  },
};

</script>
