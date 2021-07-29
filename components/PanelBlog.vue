<template>
  <section class="bg-mau-primary-50 h-full my-2">
    <div class="container mx-auto">
      <p
        class="
          font-medium
          xl:text-4xl
          text-2xl text-mau-primary-700
          my-5
          sm:mx-12
          ml-10
          md:text-left
          text-center
        "
      >
        Gotta Read This!
      </p>

      <div
        class="
          grid
          md:grid-cols-2
          2xl:grid-cols-3
          px-24
          sm:-mx-24
          -mx-8
          gap-4 gap-1
        "
      >
        <div class="py-5">
          <CardsAdvancedThumbnail
            :isBlog="true"
            :isLarge="true"
            content=" Testing 123"
            author="Fahim Aqil"
            date="12/02/2021"
          />
        </div>

        <div class="py-5">
          <CardsAdvancedThumbnail
            :isLarge="true"
            content=" Testing 123"
            author="Fahim Aqil"
            date="12/02/2021"
          />
        </div>
        <div class="py-5">
          <CardsAdvancedThumbnail
            :isLarge="true"
            content=" Testing 123"
            author="Fahim Aqil"
            date="12/02/2021"
          />
        </div>
        <div class="py-5">
          <CardsAdvancedThumbnail
            :isLarge="true"
            content=" Testing 123"
            author="Fahim Aqil"
            date="12/02/2021"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>