<template>
  <div class="sm:h-full h-48 container mx-auto  py-8 lg:py-16 px-4 ">
      <HeadingControl :title="content.title" />

      <div class="flex py-4 flex-row ">
        <!-- Left Side-->
        <div class="w-1/2  py-4 px-2">
          <slot name="left">
            <div class="flex justify-center">
              <SupporterCard
                :name="content.organisation[0].name"
                :img="content.organisation[0].image"
                :description="content.organisation[0].description"
              />
              <!-- <div
                    class="
                        sm:h-64
                      sm:w-64
                      h-40
                       w-40
                      bg-white
                      rounded-lg
                      shadow-lg
                      border-2 border-mau-purple-500
                      p-4
                      flex
                      justify-center
                    "
                  >
                    <img class=" max- object-contain rounded-lg" :src="content.organisation[0].image" />
                  </div> -->
            </div>
          </slot>
        </div>
        <!-- End Left Side-->

        <!-- Right Side with List and button -->
        <div class="w-1/2  py-4 px-2">
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


