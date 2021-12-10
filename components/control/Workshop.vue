<template>
  <div class="container px-4 mb-12">
    <HeadingControl :title="content.title" />
    <div
      class="
        py-4
        px-4
        text-center
        flex
        justify-center
        lg:text-xl
        md:text-lg
        text-base
        font-body font-medium
      "
    >
      <p>{{ content.description }}</p>
    </div>

    <div class="py-12">
      <div class="flex justify-center flex-row relative">
        <div
          class="transform h-32 sm:h-72 rounded-full scale-100 hover:scale-105"
        >
          <NuxtLink :to="content.link">
            <SimpleThumbnailCard
              :isWorkshop="true"
              :is-button="false"
              :image="content.image"
            />
          </NuxtLink>
        </div>

        <img
          class="
            absolute
            -right-10
            xs:right-8
            sm:-right-20
            md:-right-8
            top-10
            lg:right-24
            xl:right-56
            2xl:right-64 2xl:right-80
            h-36
            sm:h-80
            rounded-lg
          "
          :src="content.image2"
        />
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


