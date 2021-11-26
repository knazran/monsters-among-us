<template>
  <div class="sm:min-h-screen h-48 sm:my-0 my-12">
    <div class="container mx-auto px-1">
      <HeadingControl :title="content.title" />

      <div class="flex my-12 flex-row">
        <!-- Left Side-->
        <div class="w-1/2 px-2">
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
                    <img class=" max-w-full object-contain rounded-lg" :src="content.organisation[0].image" />
                  </div> -->
            </div>
          </slot>
        </div>
        <!-- End Left Side-->

        <!-- Right Side with List and button -->
        <div class="w-1/2 px-2">
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


