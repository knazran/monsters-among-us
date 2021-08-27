<template>
  <div class="h-full" :style="{ backgroundImage: getBackgroundImage}">
    <div
      class="
        container
        mx-auto
        flex
        lg:flex-row
        flex-col
        py-8
        lg:py-16
        px-4
        lg:px-8
        2xl:px-0
      "
    >
      <!-- Left Side-->

      <div class="lg:w-1/2 text-mau-primary-700 py-8 2xl:py-16">
        <div class="mb-5">
          <p
            class="
              font-bold
              2xl:text-5xl
              xl:text-4xl
              lg:text-3xl
              text-3xl text-center
              lg:text-left
            "
          >
            1 in every 10 children in Malaysia is a victim of sexual abuse at the hands of someone they know.
          </p>
          <p
            class="
              font-semibold
              2xl:text-5xl
              xl:text-4xl
              lg:text-3xl
              text-3xl text-center
              lg:text-left
              mt-2
            "
          >
            
          </p>
        </div>
        <div class="mb-12">
          <p
            class="
              font-thin
              2xl:text-2xl
              lg:text-xl
              lg:text-left
              text-center
            "
          >
            Here’s how you can join us in the fight against CSA.
          </p>
        </div>
        <!-- Button -->
        <div
          class="
            flex flex-col
            lg:flex-wrap lg:flex-row
            items-center
            lg:items-start
          "
        >
          <a href="#webchat_widget">
            <AccentButtonLong text="Lapor Predator" />
          </a>

          <button
            class="
              rounded-xl
              bg-mau-primary-700
              text-center text-white
              2xl:w-64
              xl:w-52
              w-64
              xl:ml-5 xl:mt-0
              mt-3
              py-2
            "
          >
            Donate
          </button>
        </div>
        <!-- End Button -->
      </div>
      <!-- End Left Side-->

      <!-- Right Side with Pic -->
      <div class="hidden md:block lg:w-1/2">
        <div class="flex flex-col justify-center items-center">
          <img
            class="
              lg:transform lg:translate-x-16
              -z-20
              object-cover
              xl:h-72
              2xl:h-96
              border-2 border-mau-primary-700
              rounded-md
            "
            src="../../static/img/homepage/Home_Panel1.1.jpg"
            alt="Profile image"
          />
          <img
            class="
              hidden
              lg:block
              transform
              -translate-x-16 -translate-y-12
              -z-30
              object-cover
              xl:h-72
              2xl:h-96
              border-2 border-mau-primary-700
              rounded-md
            "
            src="../../static/img/homepage/Home_Panel1.2.jpg"
            alt="Profile image"
          />
        </div>
      </div>
      <!--End Right side with Pic -->
    </div>
  </div>
</template>

<script>
import TextureBeige from '~/static/img/textures/texture-beige-2.png'
export default {
  data() {
    return {
      bgBeige: TextureBeige,
    };
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgBeige})`;
    },
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>
