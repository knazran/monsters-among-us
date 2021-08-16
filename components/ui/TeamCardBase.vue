<template>
  <!-- isDesktop == True -->
  <div class="flex flex-col items-center">
    <div v-if="isDesktop">
      <TeamCardCircle
        :name="name"
        :title="title"
        :img="img"
        :description="description"
      />
    </div>
    <div v-if="!isDesktop">
      <TeamCardCircleMobile
        :name="name"
        :title="title"
        :img="img"
        :description="description"
      />
    </div>
  </div>
  <!-- End True -->
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
    isDesktop: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
<style scoped>
h6 {
  font-size: 0.9rem;
  line-height: 1rem;
}
</style>

