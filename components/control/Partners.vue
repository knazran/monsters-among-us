<template>
  <div>
    <div class="h-full py-4 " :style="{ backgroundImage: bgImage }">
      <HeadingControl
        title="Partners and Sponsors
"
      />
      <PageSection>
        <div
          class="
            grid
            md:grid-cols-3
            sm:gap-12
            gap-4
            sm:px-6 sm:mx-12
            mx-4
            py-6
            grid-cols-2
            items-center
          "
        >
          <div
            v-for="partner in content.partners"
            :key="partner.name"
            class="
              sm:h-40 sm:h-40
              lg:h-56
              h-32
              w-32
              lg:w-56
              bg-white
              rounded-full
              items-center
              p-4
              flex
              justify-center
            "
          >
            <img
              class="w-full object-contain rounded-full h-36 w-36"
              :src="partner.image"
            />
          </div>
        </div>
      </PageSection>
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
    bgImage: {
      type: String,
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


