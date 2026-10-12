<script setup lang="ts">
type PropsDefinition = {
  src: string,
  alt?: string,
  viewMode: string
}

const props = defineProps<PropsDefinition>()
</script>

<template>
  <div 
    class="image-item"
    :class="viewMode"
  >
    <div class="image-wrapper">
      <img 
        :src="props.src" 
        :alt="props.alt ? props.alt : `This image doesn't have a description`"
        loading="lazy"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-item {
  width: 100%;
  padding: 0;
  break-inside: avoid;
  margin-bottom: 0.3rem;
  
  .image-wrapper {
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left top;
      border-radius: 4px;
    }
  }
  
  &.card {
    width: calc(20% - 0.4rem);
    margin-bottom: 0.4rem;

    .image-wrapper {
      // padding: 0 0 56.25% 0; -- Reference and Consultation
      position: relative;
      padding: 0 0 56.25% 0;
      margin: 0;

      img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        aspect-ratio: 1;
      }
    }
  }
}
</style>