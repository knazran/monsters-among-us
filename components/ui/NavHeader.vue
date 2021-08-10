<template>
  <nav class="bg-mau-primary-700">
    <div class="container mx-auto px-2 sm:px-6 lg:px-8">
      <div class="flex justify-between min-h-20 items-stretch">
        <div
          class="
            flex-1 flex
            align-baseline
            items-start
            justify-between
            sm:items-stretch sm:justify-start
            flex-col
            md:flex-row
          "
        >
          <div class="flex items-center">
            <NuxtLink to="/">
              <img
                class="block h-36 md:h-32 w-auto"
                src="~/static/mau-logo-horizontal.png"
                alt="Logo"
              />
            </NuxtLink>
          </div>
          <div
            id="social-media"
            class="flex space-x-1 mb-4 md:mb-0 mx-4 items-start md:items-center"
          >
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
        <div class="inset-y-0 right-0 flex items-center pr-2">
          <a href="#webchat_widget">
            <AccentButton class="hidden sm:block" text="Report" />
          </a>

          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="showMenu"
          >
            <span class="sr-only">Open main menu</span>

            <h3 class="text-white text-md mx-4 font-light hidden sm:block">
              Menu
            </h3>
            <iconify-icon
              :icon="icons.menu"
              height="28"
              :style="{ color: 'white' }"
            />
          </button>
        </div>
      </div>
    </div>
  </nav>
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
  methods: {
    showMenu(e) {
      this.$store.commit('toggleOverlayMenu')
    },
  },
}
</script>
