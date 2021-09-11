<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="min-w-[24px] min-h-[24px]" v-html="src">Icon</div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: { type: String, required: true, default: '' },
  },
  computed: {
    src() {
      return require(`assets/icons/ui/${this.icon}.svg?raw`)
    },
  },
}
</script>
