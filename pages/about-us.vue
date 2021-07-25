<template>
  <div>
    <PageHero
      title="About Us"
      description="Monsters Among Us is a Malaysian youth combating  child sexual abuse (CSA) through advocacy and community involvement."
      bg-image="kid-hero.jpg"
    />
    <PageSplitSection img='kid-hero.jpg'>
      <h3 class="text-xl md:text-2xl text-mau-primary-700 font-semibold mb-6">
        Our Story
      </h3>
      <p class="text-sm md:text-md text-mau-primary-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        egestas, velit a interdum pulvinar, enim ante tempus dui, in convallis
        nunc ligula eu ligula. Nunc porta ipsum nibh. Fusce ut placerat magna.
      </p>
    </PageSplitSection>

    <PageSplitSection img='kid-hero.jpg' :reverse='true'>
      <h3 class="text-xl md:text-2xl text-mau-primary-700 font-semibold mb-6">
        Our Story
      </h3>
      <p class="text-sm md:text-md text-mau-primary-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        egestas, velit a interdum pulvinar, enim ante tempus dui, in convallis
        nunc ligula eu ligula. Nunc porta ipsum nibh. Fusce ut placerat magna.
      </p>
    </PageSplitSection>
  </div>
</template>

<script>
export default {}
</script>