<template>
  <div class="relative max-h-screen">
    <div
      class="
        sm:w-1/3
        w-2/5
        absolute
        xl:bottom-40
        lg:bottom-28
        lg:right-18
        md:right-12 md:bottom-18
        sm:bottom-6
        sm:right-6
        bottom-2
        right-1
        2xs:-bottom-1
      "
    >
      <p
        class="
          w-full
          font-semibold
          lg:text-lg
          sm:text-sm
          text-2xs text-left text-mau-primary-700
          px-1
        "
      >
        Every child and young adult deserve to be able to safely surf the
        Internet. Their online protection isn't a privilege - it's a right. But
        for instances when that right is violated, what can be done? For this,
        we encourage you to "Let's Lapor Predator".
      </p>
      <div class="my-2 flex justify-center">
        <NuxtLink to="/in-control">
          <button
            class="
              rounded-lg
              bg-mau-primary-700
              text-center text-white
              2xl:w-48
              xl:w-40
              sm:w-28
              w-16
              py-1
              sm:py-2
              transform
              hover:scale-105
              lg:text-base
              sm:text-xs
              text-2xs
            "
          >
            Read More
          </button>
        </NuxtLink>
      </div>
    </div>
    <img
      class="object-cover h-full w-full"
      src="../../static/img/in-control/Banner.jpg"
      alt="MAU logo"
    />

    <!-- End Left Side-->

    <!-- Right Side Logo -->

    <!--End Right side with Logo -->
  </div>
</template>

<script>
</script>

<style scoped>
.describe {
  font-size: 0.1rem;
}
</style>