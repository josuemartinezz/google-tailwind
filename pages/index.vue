<template>
  <div class="w-full">
    <div class="flex flex-col">
      <div class="logo-container flex justify-center relative">
        <div class="absolute w-full h-full"></div>
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
        />
      </div>
      <Searchbar class="mt-[2rem]" />
      <div
        class="recommended-apps space-x-[1rem] flex justify-center mt-[3rem]"
      >
        <Avatar
          v-for="(apps, i) in googleRecommendedApps"
          :key="i"
          :alt="apps['name']"
          :src="apps['icon']"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/ui/Avatar.vue'
import Searchbar from '@/components/ui/Searchbar.vue'

export default {
  name: 'Home',
  components: {
    Avatar,
    Searchbar,
  },
  data() {
    return {
      googleRecommendedApps: [
        {
          name: 'Youtube',
          icon: 'https://lh3.googleusercontent.com/I95wjYii8vhFSSx-aSYdh2hPAMjgZkA9yjarSQoOd98COwOxkAVn_dulBcTcfbsa7Limy6IKX6G95ep6OB6y2yMLMiX0YEqFx3KQHQ=h128',
        },
        {
          name: 'Gmail',
          icon: 'https://lh3.googleusercontent.com/mK6uPlO8TKCVSU8TsniV0pOUB0SSETbAPB_QUaaJ96qbBdZwaygmzf_bWRTIHmCNKgJ2hhn86KSfEAHvHN-P2EjFWAxPd77ob_2k8ew=h128',
        },
        {
          name: 'Drive',
          icon: 'https://lh3.googleusercontent.com/AGsg9hOAylBkWuFrfSgOt8psYWcr3b-vZcmIVk0ocwx7KAVSu--tg1ZIAUSL7nAbORTHI5eZaweHYVPMJu5ac8Xw7GP_WiCs1w60=h128',
        },
        {
          name: 'Google meet',
          icon: 'https://lh3.googleusercontent.com/5CsRqfMEP1Rv-PPv9G4962lyEuvb4roSLJHJQWPbmCa51AmvynfoGfoKsKiS87QhX07xQMZAeLp8qoSy7CjVZkXJ1WapQiJkroCeJw=h120',
        },
        {
          name: 'Traductor',
          icon: 'https://lh3.googleusercontent.com/vNgpLTvnDUr6-QM8s4OuuESGDXs_brbGoPR-7vfwdxQI7M4MVFV0CC_Hil4qRDSp4P66ik85fdv09jKn89kDAJVknIbd6wkl0zGQJQ=h120',
        },
      ],
    }
  },
}
</script>
