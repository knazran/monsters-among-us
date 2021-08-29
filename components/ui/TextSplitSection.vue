<template>
  <div class="flex flex-col md:flex-row py-4">
    <!-- Left Side-->
    <div class="md:w-1/2 2xl:w-2/5 text-mau-secondary-900 px-6 mb-8">
      <div class="md:pr-20">
        <slot name="left"></slot>
      </div>
    </div>
    <!-- End Left Side-->

    <!-- Right Side with List and button -->
    <div class="md:w-1/2 2xl:w-1/2 lg:px-0 px-5">
      <div class="2xl:pr-12 xl:pr-12">
        <slot name="right"></slot>
      </div>
    </div>
    <!--End Right side with Pic -->
  </div>
</template>

