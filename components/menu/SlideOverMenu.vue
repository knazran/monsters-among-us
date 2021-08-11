<template>
  <transition name="slide">
    <div
      v-if="showOverlayMenu"
      class="fixed h-screen inset-y-0 right-0 w-4/5 md:w-auto md:max-w-full flex z-10 "
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
              <MenuButton text="Our Story" to='/our-story'></MenuButton>
              <MenuButton text="Our Milestone" to='/our-milestone'></MenuButton>
              <MenuButton text="Our Policies" to='/our-milestone'></MenuButton>
              <MenuButton text="Meet The Team" to='/meet-the-team'></MenuButton>
            </MenuAccordion>
            <MenuAccordion title="Our Initiatives">
              <MenuButton text="Lapor Predator" to='/lapor-predator'></MenuButton>
              <MenuButton text="Catch Em' Predator" to='/initiatives/catch-em-predator'></MenuButton>
              <MenuButton text="Colour With MAU" to='/initiatives/colour-with-mau'></MenuButton>
              <MenuButton text="MAU Reading Club" to='/initiatives/mau-reading-club'></MenuButton>
            </MenuAccordion>
            <MenuAccordion title="The Issue">
              <MenuButton text="Child Sexual Abuse" to='/about-us'></MenuButton>
              <MenuButton text="Online Child Sexual Abuse" to='/about-us'></MenuButton>
              <MenuButton text="Sexual and Reproductive Health Rights" to='/about-us'></MenuButton>
              <MenuButton text="Child Rights" to='/about-us'></MenuButton>
            </MenuAccordion>
            <MenuButton text="Gotta Read This" to='/blog'></MenuButton>
            <MenuAccordion title="Lapor Predator">
              <MenuButton text="About Lapor Predator" to='/lapor-predator'></MenuButton>
              <MenuButton text="How to Lapor Predator" to='/lapor-predator/how-to'></MenuButton>
            </MenuAccordion>
            <MenuAccordion title="Advocate with MAU">
              <MenuButton text="Volunteers and Vacancies " to='advocate-with-mau/volunteers-and-vacancies'></MenuButton>
              <MenuButton text="Collaborate with Us" to='advocate-with-mau/collaborate-with-us'></MenuButton>
              <MenuButton text="Be a Member" to='advocate-with-mau/be-a-member'></MenuButton>
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