<template>
  <nav class="sticky top-0 bg-mau-primary-700 w-full z-40">
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
                class="block h-20 xl:h-32 w-auto"
                src="~/static/mau-logo-horizontal.png"
                alt="Logo"
              />
            </NuxtLink>
          </div>
          <div
            id="social-media"
            class="flex space-x-1 mb-4 md:mb-0 mx-4 items-start md:items-center"
          >
            <a
              href="https://www.facebook.com/MonstersAmongUsMY"
              target="_blank"
            >
              <iconify-icon
                :icon="icons.facebook"
                height="28"
                :style="{ color: 'white' }"
              />
            </a>
            <a
              href="https://www.instagram.com/monstersamongus_my"
              target="_blank"
            >
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
            <a
              href="https://www.youtube.com/channel/UCvw1lAGU1waLvbyc2UHlJOA"
              target="_blank"
            >
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
    <div id="panic-container" class="panic-button">
      <div class="hidden md:block">
        <span class="panic-button__text">Protect yourself online.</span>
      <a
        class="panic-button__link"
        href="https://www.domesticshelters.org/safe-surfing"
      >
        Learn how to hide your browsing history.
      </a>
      <a
        id="panic-button"
        class="panic-button__button"
        title="Google"
        href="https://www.google.com/search?q=the+star"
      >
        <span class="panic-button__icon">&times;</span>
        Quick exit (ESC)
      </a>
      </div>
      <div class="block md:hidden bg-red-500 text-white">
        <a
        id="panic-button"
        class=""
        title="Google"
        href="https://www.google.com/search?q=the+star"
      >
        Quick exit (ESC)
      </a>
      </div>
      
    </div>
    <script
      async
      src="https://cdn.rawgit.com/studiothick/panic-button/v1.2.0/dist/panic.min.js"
    ></script>
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

<style scoped>
.panic-button {
  height: 2.8rem;
  line-height: 2.8rem;
  position: relative;
  z-index: 100;
  width: 100%;
  background-color: #fff;
  text-align: center;
  font-size: 1em;
  vertical-align: middle;
  color: #000;
  box-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.05);
  display: none;
  overflow: hidden;
}

/* @media (min-width: 37.5em) { */
  .panic-button {
    display: block;
  }
/* } */

.panic-button__link {
  color: #666;
  text-decoration: underline;
}

.panic-button__link:hover, .panic-button__link:active {
  color: #444;
}

.panic-button__button {
  height: 2.8rem;
  line-height: 2.8rem;
  display: inline-block;
  background-color: #ef0834;
  color: #fff;
  padding: 0 .7em;
  cursor: pointer;
  position: absolute;
  right: 0;
  text-decoration: none;
}

@media (min-width: 64em) {
  .panic-button__button {
    padding: 0 1em;
  }
}

.panic-button__button:hover, .panic-button__button:active {
  color: #fff;
  background-color: #d6072f;
}

.panic-button__icon {
  margin-right: .5em;
  font-size: 1.08em;
}
</style>