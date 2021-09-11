<template>
  <div
    class="
      transition-all
      duration-300
      w-[3.5rem]
      h-[3.5rem]
      shadow-lg
      rounded-full
      cursor-pointer
      hover:bg-gray-50
      flex
      items-center
      justify-center
      select-none
      relative
    "
  >
    <div class="absolute w-full h-full"></div>
    <img class="w-[50%] h-[50%]" :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
  },
}
</script>
