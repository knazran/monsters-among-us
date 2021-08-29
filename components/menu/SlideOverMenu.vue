<template>
  <transition name="slide">
    <div
      v-if="showOverlayMenu"
      class="
        fixed
        h-screen
        inset-y-0
        right-0
        w-4/5
        md:w-auto md:max-w-full
        flex
        z-30
      "
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
            <MenuButton text="Home" to="index"></MenuButton>
            <MenuAccordion title="About Us">
              <MenuButton text="Our Story" to="/our-story"></MenuButton>
              <MenuButton text="Our Milestone" to="/our-milestone"></MenuButton>
              <MenuButton text="Our Policies" to="/our-policies"></MenuButton>
              <MenuButton text="Meet The Team" to="/meet-the-team"></MenuButton>
            </MenuAccordion>
            <MenuAccordion title="Our Initiatives">
              <MenuButton
                text="Lapor Predator"
                to="/lapor-predator"
              ></MenuButton>
              <MenuButton
                text="Catch Em' Predator"
                to="/initiatives/catch-em-predator"
              ></MenuButton>
              <MenuButton
                text="Colour With MAU"
                to="/initiatives/colour-with-mau"
              ></MenuButton>
              <MenuButton
                text="MAU Reading Club"
                to="/initiatives/mau-reading-club"
              ></MenuButton>
            </MenuAccordion>
            <MenuAccordion title="Focus Areas">
              <MenuButton
                text="Child Sexual Abuse"
                to="/focus-area/child-sexual-abuse"
              ></MenuButton>
              <MenuButton
                text="Online Child Sexual Abuse"
                to="/focus-area/online-child-sexual-abuse"
              ></MenuButton>
              <MenuButton
                text="Sexual and Reproductive Health Rights"
                to="/focus-area/sexual-and-reproductive-health-rights"
              ></MenuButton>
              <!-- <MenuButton
                text="Child Rights"
                to="/focus-area/child-rights"
              ></MenuButton> -->
            </MenuAccordion>
            <MenuButton text="Gotta Read This" to="/blog"></MenuButton>
            <MenuAccordion title="Lapor Predator">
              <MenuButton
                text="About Lapor Predator"
                to="/lapor-predator"
              ></MenuButton>
              <MenuButton
                text="How to Lapor Predator"
                to="/lapor-predator/how-to"
              ></MenuButton>
            </MenuAccordion>
            <MenuButton
              text="Advocate with MAU"
              to="/advocate-with-mau"
            ></MenuButton>
          </div>
          <div class="justify-self-end flex justify-center">
            <a
              href="https://www.sedunia.me/campaigns/lapor-predator-reporting-tool-for-online-child-sexual-abuse/about"
              target="_blank"
            >
              <AccentButton text="Donate" />
            </a>
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
