<script setup lang="ts">
type PropsDefinition = {
  color?: string
}

const props = defineProps<PropsDefinition>()
</script>

<template>
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7778 0V7.66667H23V0M12.7778 23H23V10.2222H12.7778M0 23H10.2222V15.3333H0M0 12.7778H10.2222V0H0V12.7778Z" :fill="props.color || '#858587'"/>
  </svg>
</template>