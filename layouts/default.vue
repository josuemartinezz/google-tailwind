<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <nuxt class="flex-1 flex items-center justify-center" />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  nanme: 'default',
  components: {
    Navbar,
    Footer,
  },
}
</script>
