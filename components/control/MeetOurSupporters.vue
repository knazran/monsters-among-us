<template>
  <div class="sm:h-full h-96 container mx-auto py-8 lg:py-16 px-4">
    <HeadingControl :title="content.title" />

    <div class="flex py-6 flex-row">
      <!-- Left Side-->
      <div class="w-1/2 py-4 px-2">
        <slot name="left">
          <div class="flex justify-center">
            <SupporterCard
              :name="content.organisation[0].name"
              :img="content.organisation[0].image"
              :description="content.organisation[0].description"
            />
          </div>
        </slot>
      </div>
      <!-- End Left Side-->

      <!-- Right Side with List and button -->
      <div class="w-1/2 py-4 px-2">
        <slot name="right">
          <div class="flex justify-center">
            <SupporterCard
              :name="content.organisation[1].name"
              :img="content.organisation[1].image"
              :description="content.organisation[1].description"
            />
          </div>
        </slot>
      </div>
      <!--End Right side with Pic -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>


