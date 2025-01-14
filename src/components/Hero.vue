<template>
    <header
    class="max-w-full
    bg-transparent
    py-5
    px-8 flex
    justify-center
    lg:justify-start
    lg:pl-[5%]
    lg:ml-20"
    >
        <img src="../assets/img/octopus_logo.svg" class="w-44 h-12 lg:w-50 lg:h-16" alt="icon"/>
    </header>

    <div class="
        lg:ml-20 min-w-[100vw] max-h-max mt-20 lg:flex justify-between items-end
        mb-16 md:mb-32 z-2 relative
    ">
        <div
            class="
             flex
             flex-col
             text-center
             grow-0
             px-5
             lg:text-left
             lg:justify-between
             xl:mr-[5%]
             lg:ml-[50px]"
            >
            <h2
                class="
                    nowrap
                    text-3xl
                    sm:text-5xl
                    text-[#08375F]
                    tracking-tight
                    font-semibold
                    sm:mb-16
                    lg:mb-28
                    leading-tight
                    "
            >
                Automatizá la <br> administración de <br> consorcios
            </h2>
            <img
                src="../assets/img/hero-mobile.svg"
                alt="app-image"
                class="my-10 lg:hidden object-cover px-4 max-width-[100%]">
            <ContactForm />
        </div>

        <div class="flex justify-end">
            <img
                src="../assets/img/hero-image.png"
                alt="app-image"
                class="hidden lg:block object-fit lg:w-[100%] lg:max-w-[650px] min-w-[650px]">
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

<style scoped>
.nowrap {
    text-wrap: nowrap !important;
}
</style>
