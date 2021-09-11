<template>
  <div class="w-full p-[3rem] flex justify-between">
    <div>
      <span
        class="
          py-[.7rem]
          px-[2rem]
          bg-gray-100
          text-sm
          rounded-full
          select-none
          cursor-pointer
        "
        >Español</span
      >
    </div>
    <div class="space-x-[2rem] flex text-sm text-gray-700">
      <p class="cursor-pointer">Privacidad</p>
      <p class="cursor-pointer">Condiciones</p>
      <p class="cursor-pointer">Preferencias</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
