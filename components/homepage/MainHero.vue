<template>
  <div class="bg-mau-secondary-100 h-full">
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
              font-medium
              2xl:text-6xl
              xl:text-5xl
              lg:text-4xl
              text-4xl text-center
              lg:text-left
            "
          >
            Every day, XX child is...
          </p>
          <p
            class="
              font-semibold
              xl:text-5xl
              lg:text-4xl
              text-4xl text-center
              lg:text-left
              mt-2
            "
          >
            So do something about it
          </p>
        </div>
        <div class="mb-12">
          <p
            class="
              font-thin
              2xl:text-4xl
              lg:text-2xl
              text-xl
              lg:text-left
              text-center
            "
          >
            Join us in combating online child sexual abuse
          </p>
        </div>
        <!-- Button -->
        <div class="flex flex-col lg:flex-wrap lg:flex-row items-center lg:items-start">
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
              xl:ml-5
              xl:mt-0
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
              lg:transform
              lg:translate-x-16
              -z-20
              object-cover
              2xl:w-96
              2xl:h-80
              xl:h-72
              xl:w-72
              border-2
              rounded-md
            "
            src="../../static/test.jpg"
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
              2xl:w-96
              2xl:h-80
              xl:h-72
              xl:w-72
              border-2
              rounded-md
            "
            src="../../static/test2.jpg"
            alt="Profile image"
          />
        </div>
      </div>
      <!--End Right side with Pic -->
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>