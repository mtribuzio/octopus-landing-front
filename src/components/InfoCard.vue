<template>
    <div
      class="bg-white w-11/12 min-h-[100px] md:h-[370px] md:w-[345px] rounded-3xl
      flex md:flex-col items-center md:justify-center md:text-center text-left py-2 px-8 gap-5 lg:"
    >
        <img class="w-[50px] h-[50px]" :src="require(`../assets/img/${img}`)" alt="icon">
        <div class="lg:flex flex-col gap-5">
          <h3 class="text-md md:text-2xl font-semibold">{{ title }}</h3>
          <p class="text-sm leading-7 text-[#696871]">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    img: String,
    title: String,
    description: String,
  },
};
</script>
