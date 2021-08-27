<template>
  <div class="h-full" :style="{ backgroundImage: getBackgroundImage}"> 
    <div class="container mx-auto py-8 lg:py-16 px-4 lg:px-8">
      <h3
        class="
          font-semibold
          lg:text-3xl
          text-2xl text-mau-primary-900
          lg:text-left
          text-center
        "
      >
        Advocate with Us!
      </h3>
      <h4
        class="
          lg:text-xl
          text-lg text-mau-primary-700
          mt-1
          lg:text-left
          text-center
          xl:pr-36
          2xl:pr-96
        "
      >
        We are always looking for volunteers, colaborators, and members to join
        the cause
      </h4>
      <div
        class="
          flex flex-col
          md:flex-row
          md:justify-center
          items-center
          space-y-12
          md:space-y-0 md:space-x-12
        "
      >
        <!-- isButton is required -->
        <SimpleThumbnailCard
          :is-button="true"
          :is-long="true"
          text-button="Vacancies"
          image="/img/homepage/Home_Vacancies.jpg"
        />
        <SimpleThumbnailCard
          :is-button="true"
          :is-long="true"
          text-button="Collaborate with MAU"
          image="/img/homepage/Home_Collaborate.jpg"
        />
        <SimpleThumbnailCard
          :is-button="true"
          :is-long="true"
          text-button="Be a Member"
          image="/img/homepage/Home_Be A Member.jpg"
        />
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