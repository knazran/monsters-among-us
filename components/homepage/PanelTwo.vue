<template>
  <div class="h-full" :style="{ backgroundImage: getBackgroundImage}">
    <div class="container mx-auto py-8 lg:py-16 px-4">
      <div class="flex flex-wrap">
        <!-- Left Side-->
        <div
          class="lg:py-6 lg:px-8 md:w-1/2 2xl:w-2/5 text-mau-secondary-900 px-6"
        >
          <div class="2xl:pr-32 xl:pr-24">
            <p
              class="font-medium lg:text-4xl text-3xl text-center md:text-left"
            >
              Malaysia scored 0 out of 100 for Internet Protection in the Out of
              the Shadows Index and only 20 out of a 100 for accessible support
              programmes for victims.
            </p>
          </div>
        </div>
        <!-- End Left Side-->

        <!-- Right Side with List and button -->
        <div class="lg:my-4 lg:py-6 md:w-1/2 2xl:w-3/5 lg:px-0 px-5">
          <div class="2xl:pr-12 xl:pr-20">
            <h4 class="mb-5 text-xl text-mau-primary-700 underline font-semibold">
              Facts about Online Child Sexual Abuse and Exploitation 
            </h4>
            <!-- List -->
            <ul
              class="
                list-decimal list-inside
                font-light
                text-xl text-mau-primary-700
              "
            >
              <li class="mb-5">
                <!-- <strong>60% of this </strong> Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s -->
                <strong>Internet service providers </strong>are not necessarily
                required to block and delete child sexual abuse and exploitation
                materials.
              </li>
              <li class="mb-5">
                <!-- It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. -->
                Sexual harassment is
                <strong>not legally acknowledeged in Malaysia</strong>, as the
                Sexual Harassment Bill and it’s specificities have not been
                passed as a law yet.
              </li>
              <li>
                <!-- The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for <strong> those interested.</strong> -->
                Though sexual intercourse with a child is strictly prohibited,
                <strong
                  >our Penal Code exempts sexual intercourse between a man and a
                  wife</strong
                >, further legalising and exempting the archaic concept of child
                marriage.
              </li>
            </ul>
            <!-- End List -->
            <!-- Button -->
            <div
              class="
                mt-12
                md:mt-24
                flex flex-col
                items-center
                md:flex-row md:items-start
                space-y-4
                md:space-y-0 md:space-x-12
              "
            >
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
                In The Press
              </button>
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
    };
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgGreen})`;
    },
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>
