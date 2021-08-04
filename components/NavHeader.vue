<template>
  <nav class="bg-mau-primary-700">
    <div class="container mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-20">
        <div
          class="
            flex-1 flex
            items-center
            justify-between
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div id="social-media" class="flex flex-shrink-0 space-x-1 mx-4">
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
        <div class="inset-y-0 right-0 flex items-center pr-2">
          <!-- <NuxtLink :to="{ path: `${$route.path}`, hash: '#webchat_widget' }">
            <AccentButton class="hidden sm:block" text="Report" />
          </NuxtLink> -->
          <nuxt-link to="#webchat_widget"><AccentButton class="hidden sm:block" text="Report" /></nuxt-link>
          <nuxt-link :to="{path: `${$route.path}`, hash: '#webchat_widget'}"><AccentButton class="hidden sm:block" text="Report" /></nuxt-link>
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
