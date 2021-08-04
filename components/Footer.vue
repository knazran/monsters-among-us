<template>
  <div class="bg-mau-primary-700 lg:h-72">
    <div class="container mx-auto">
      <div class="lg:flex lg:flex-wrap">
        <div class="my-10 px-10 lg:w-1/3 w-full">
          <div class="px-12">
            <p class="text-white font-thin">
              <strong>Monsters Among Us </strong>Youth Advocates is a youth-led
              organisation in Malaysia combating child sexual abuse through
              advocacy, education and community development
            </p>
          </div>
        </div>

        <div class="my-10 px-10 lg:w-1/3 w-full lg:mx-0 mx-12">
          <p class="text-white font-base">Follow us on social media</p>
          <div id="social-media" class="flex flex-shrink-0 space-x-1 mt-3">
            <a href="https://www.google.com" target="_blank">
              <iconify-icon
                :icon="icons.facebook"
                height="28"
                :style="{ color: 'white' }"
              />
            </a>
            <a href="https://www.google.com" target="_blank">
              <iconify-icon
                :icon="icons.instagram"
                height="28"
                :style="{ color: 'white' }"
              />
            </a>
            <a href="https://www.google.com" target="_blank">
              <iconify-icon
                :icon="icons.twitter"
                height="28"
                :style="{ color: 'white' }"
              />
            </a>
            <a href="https://www.google.com" target="_blank">
              <iconify-icon
                :icon="icons.youtube"
                height="28"
                :style="{ color: 'white' }"
              />
            </a>
          </div>
        </div>

        <div class="my-10 px-10 lg:w-1/3 w-full lg:mx-0 mx-12">
          <ul class="text-white font-thin">
            <li><p>Privacy Policy</p></li>
            <li><p>Enquiries</p></li>
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
