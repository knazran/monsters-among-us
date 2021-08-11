<template>
  <div class="bg-mau-primary-100 h-full">
    <div class="container mx-auto py-8 lg:py-16 px-4 lg:px-8">
      <h3
        class="
          font-medium
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
          font-light
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
          mt-10
          space-y-12
          md:space-y-0 md:space-x-12
        "
      >
        <!-- isButton is required -->
        <SimpleThumbnailCard
          :is-button="true"
          :is-long="false"
          text-button="Vacancies"
          image="/img/advocate/activity.jpg"
        />
        <SimpleThumbnailCard
          :is-button="true"
          :is-long="true"
          text-button="Collaborate with MAU"
          image="/img/advocate/forum.jpg"
        />
        <SimpleThumbnailCard
          :is-button="true"
          :is-long="false"
          text-button="Be a Member"
          image="/img/advocate/together.jpg"
        />
      </div>
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