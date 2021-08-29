<template>
  <div class="h-full" :style="{ backgroundImage: getBackgroundImage }">
    <div class="container mx-auto py-8 lg:py-16 px-4">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Left Side-->
        <div
          class="
            lg:py-6 lg:px-12
            md:w-1/2
            2xl:w-2/5
            text-mau-secondary-900
            px-6
            mb-8
          "
        >
          <div class="2xl:pr-32 xl:pr-24">
            <p class="font-medium lg:text-4xl text-3xl text-left leading-tight">
              Malaysia scored 0/100 for Internet Protection in the Out of the
              Shadows Index and 20/100 for accessible support programmes for
              victims.
            </p>
          </div>
        </div>
        <!-- End Left Side-->

        <!-- Right Side with List and button -->
        <div class="lg:my-4 lg:py-6 md:w-1/2 2xl:w-3/5 lg:px-0 px-5">
          <div class="2xl:pr-12 xl:pr-20">
            <h4
              class="
                mb-5
                text-lg
                md:text-xl
                text-mau-primary-700
                underline
                font-semibold
              "
            >
              Facts about Online Child Sexual Abuse (CSA) and Exploitation
            </h4>
            <!-- List -->
            <ul
              class="
                list-decimal list-inside
                font-light
                text-md
                md:text-lg
                2xl:text-xl
                text-mau-primary-700
              "
            >
              <li class="mb-5">
                Internet service providers are
                <strong
                  >not required to block and/or remove CSA and exploitation
                  materials</strong
                >.
              </li>
              <li class="mb-5">
                Sexual harassment is
                <strong>yet to receive legal recognition</strong> in Malaysia.
              </li>
              <li>
                Although sex with (or rather, the rape of) a child is strictly
                prohibited, the Penal Code
                <strong
                  >exempts intercourse between a man and his underage
                  wife</strong
                >, further vindicating child marriages.
              </li>
            </ul>
            <!-- End List -->
            <!-- Button -->
            <div
              class="
                mt-12
                flex flex-col
                items-center
                md:flex-row md:items-start
                space-y-4
                md:space-y-0 md:space-x-12
              "
            >
              <NuxtLink to="/issue/online-child-sexual-abuse">
                <button
                  class="
                    rounded-xl
                    bg-mau-primary-700
                    text-center text-white
                    2xl:w-64
                    xl:w-52
                    w-48
                    py-2
                  "
                >
                  Read More
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!--End Right side with Pic -->
      </div>
    </div>
  </div>
</template>

<script>
import TextureGreen from '~/static/img/textures/texture-green-2.png'
export default {
  data() {
    return {
      bgGreen: TextureGreen,
    }
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgGreen})`
    },
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>
