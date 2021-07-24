<template>
  <nav class="bg-mau-primary-700">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-20">
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch
            sm:justify-start
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
          <div id="social-media" class="flex flex-shrink-0 space-x-1 mx-2">
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
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static
            sm:inset-auto
            sm:ml-6
            sm:pr-0
          "
        >
          <AccentButton text="Report" />
          <button
            type="button"
            @mouseover="mouseOver"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>

            <h3 class="text-white text-md mx-4 font-light">Menu</h3>
            <iconify-icon
              :icon="icons.menu"
              height="28"
              :style="{ color: 'white' }"
            />
          </button>
          <SlideOver :slideover="slideover" @updateSlideOver="updateSlideOver($event)"/>
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
        menu: menu,
        facebook: facebook,
        youtube: youtube,
        twitter: twitter,
        instagram: instagram,
      },
      slideover:false
    }
  },
  methods: {
        mouseOver: function(){
           setTimeout(() => { this.slideover = true }, 300)
        },
        updateSlideOver: function(value){
           this.slideover=value
        }

  }
}
</script>
<style scoped>
.slide-enter-active {
  animation: menu-slide 0.7s;
}
.slide-leave-active {
  animation: menu-slide 1s reverse;
}
@keyframes menu-slide {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>