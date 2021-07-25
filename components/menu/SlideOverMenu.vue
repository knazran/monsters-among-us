<template>
  <transition name="slide">
    <div
      v-if="showOverlayMenu"
      class="fixed inset-y-0 right-0 w-4/5 md:w-auto md:max-w-full flex z-10"
    >
      <div class="w-screen max-w-md border-l-2 border-mau-primary-800">
        <!-- Panel -->
        <div class="h-screen flex flex-col py-6 bg-mau-primary-700 shadow-xl">
          <div class="flex justify-end px-2">
            <button @click="closeMenu">
              <iconify-icon
                :icon="icons.close"
                height="28"
                :style="{ color: 'white' }"
              />
            </button>
          </div>

          <div class="mt-6 relative flex-1">
            <MenuButton text="Home" to='index'></MenuButton>
            <MenuAccordion title="About Us">
              <MenuButton text="Test" to='about-us'></MenuButton>
            </MenuAccordion>
            <MenuAccordion title="The Issue">
              <MenuButton text="Child Sexual Abuse" to='about-us'></MenuButton>
              <MenuButton text="Online Child Sexual Abuse" to='about-us'></MenuButton>
              <MenuButton text="Sexual and Reproductive Health Rights" to='about-us'></MenuButton>
            </MenuAccordion>
            <MenuAccordion title="Gotta Read This">
              <MenuButton text="Test" to='about-us'></MenuButton>
            </MenuAccordion>
            <MenuAccordion title="Lapor Predator">
              <MenuButton text="Test" to='about-us'></MenuButton>
            </MenuAccordion>
            <MenuAccordion title="Advocate with MAU">
              <MenuButton text="Test" to='about-us'></MenuButton>
            </MenuAccordion>
          </div>
          <div class='justify-self-end flex justify-center'>
              <AccentButton text="Donate"></AccentButton>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import IconifyIcon from '@iconify/vue'
import close from '@iconify-icons/mdi/close'

export default {
  components: { IconifyIcon },
  data() {
    return {
      icons: {
        close,
      },
    }
  },
  computed: {
    showOverlayMenu() {
      return this.$store.state.overlayMenu
    },
  },
  methods: {
    closeMenu(e) {
      this.$store.commit('toggleOverlayMenu')
    },
  },
}
</script>

<style scoped>
.slide-enter-active {
  animation: menu-slide 0.5s;
}
.slide-leave-active {
  animation: menu-slide 0.5s reverse;
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