<script setup lang="ts">
type PropsDefinition = {
  src: string,
  alt?: string,
}

const props = defineProps<PropsDefinition>()
</script>

<template>
  <div 
    class="image-item grid"
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
  
  &.grid {
    width: 100%;
    margin-bottom: 0;
    
    .image-wrapper {
      position: relative;
      padding: 0 0 100% 0;
      margin: 0;
      
      img {
        border-radius: 4px;
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        aspect-ratio: 1;
        object-position: center;
      }
    }
  }
}
</style>