<script setup lang="ts">
type PropsDefinition = {
  color?: string
}

const props = defineProps<PropsDefinition>()
</script>

<template>
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 10.2222H10.2222V0H0M0 23H10.2222V12.7778H0M12.7778 23H23V12.7778H12.7778M12.7778 0V10.2222H23V0" :fill="props.color || '#858587'"/>
  </svg>
</template>