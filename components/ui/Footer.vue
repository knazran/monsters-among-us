<template>
  <div class="bg-mau-primary-700 py-8 lg:py-16 relative z-20">
    <div class="container mx-auto">
      <div class="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-10 px-12">
        <div class="lg:w-1/3 w-full">
            <p class="text-white font-thin">
              <strong>Monsters Among Us (MAU) </strong> is a non-profit organisation that combats systemic violence against children in Malaysia through youth-led child rights advocacy.
            </p>
        </div>

        <div class="lg:w-1/3 w-full">
          <p class="text-white font-base">Follow us on social media</p>
          <div id="social-media" class="flex flex-shrink-0 space-x-1 mt-3">
            <a href="https://www.facebook.com/MonstersAmongUsMY" target="_blank">
              <iconify-icon
                :icon="icons.facebook"
                height="28"
                :style="{ color: 'white' }"
              />
            </a>
            <a href="https://www.instagram.com/monstersamongus_my" target="_blank">
              <iconify-icon
                :icon="icons.instagram"
                height="28"
                :style="{ color: 'white' }"
              />
            </a>
            <a href="https://twitter.com/mau17_my" target="_blank">
              <iconify-icon
                :icon="icons.twitter"
                height="28"
                :style="{ color: 'white' }"
              />
            </a>
            <a href="https://www.youtube.com/channel/UCvw1lAGU1waLvbyc2UHlJOA" target="_blank">
              <iconify-icon
                :icon="icons.youtube"
                height="28"
                :style="{ color: 'white' }"
              />
            </a>
          </div>
        </div>

        <div class="lg:w-1/3 w-full">
          <ul class="text-white font-thin">
            <NuxtLink to='/our-policies/privacy-policy'><li>Privacy Policy</li></NuxtLink>
            
           <NuxtLink to='/enquiries'><li>Enquiries</li></NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconifyIcon from '@iconify/vue'
import menu from '@iconify-icons/mdi/menu'
import facebook from '@iconify-icons/mdi/facebook'
import youtube from '@iconify-icons/mdi/youtube'
import twitter from '@iconify-icons/mdi/twitter'
import instagram from '@iconify-icons/mdi/instagram'
export default {
  components: { IconifyIcon },
  data() {
    return {
      icons: {
        menu,
        facebook,
        youtube,
        twitter,
        instagram,
      },
    }
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>
