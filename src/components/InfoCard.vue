<template>
    <div
      class="bg-white h-[370px] w-[345px] rounded-3xl
      flex flex-col items-center justify-center text-center px-6 gap-5"
    >
        <img class="" :src="require(`../assets/img/${img}`)" alt="icon">
        <h3 class="text-2xl font-semibold">{{ title }}</h3>
        <p class="leading-7 text-[#696871]">{{ description }}</p>
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
