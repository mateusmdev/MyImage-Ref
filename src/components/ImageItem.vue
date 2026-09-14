<script setup lang="ts">
type PropsDefinition = {
  src: string,
  alt?: string
}

const props = defineProps<PropsDefinition>()
</script>

<template>
  <div class="image-item">
    <div class="image-wrapper">
      <img 
        :src="props.src" 
        :alt="props.alt ? props.alt : `This image doesn't have a description`"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-item {
  padding: 0;

  .image-wrapper {
    //position: relative;
    //padding: 0 0 56.25% 0;
    //margin: 0;

    img {
      
    /*
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      aspect-ratio: 1;
      */
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left top;
    }
  }
}
</style>