<template>
  <div class="flex w-[36.375rem]">
    <div class="relative flex-1 flex w-full items-center">
      <div
        class="
          flex
          h-full
          w-[4rem]
          absolute
          left-0
          top-0
          justify-center
          items-center
        "
      >
        <Icon icon="search-status" />
      </div>
      <input
        class="outline-none py-[.9rem] px-[4rem] rounded-3xl w-full shadow-lg"
        type="text"
        placeholder="Buscar con google"
      />
      <div class="h-full w-[3rem] flex items-center absolute top-0 right-0">
        <div
          class="bg-gray-50 inline-flex rounded-full p-[.5rem] cursor-pointer"
        >
          <Icon icon="microphone" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/ui/Icon.vue'

export default {
  name: 'Searchbar',
  components: {
    Icon,
  },
}
</script>
