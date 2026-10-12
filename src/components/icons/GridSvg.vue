<script setup lang="ts">
type PropsDefinition = {
  color?: string
}

const props = defineProps<PropsDefinition>()
</script>

<template>
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.25 23H23V17.25H17.25M17.25 14.375H23V8.625H17.25M8.625 5.75H14.375V0H8.625M17.25 5.75H23V0H17.25M8.625 14.375H14.375V8.625H8.625M0 14.375H5.75V8.625H0M0 23H5.75V17.25H0M8.625 23H14.375V17.25H8.625M0 5.75H5.75V0H0V5.75Z" :fill="props.color || '#858587'"/>
  </svg>
</template>