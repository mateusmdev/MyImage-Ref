<script setup lang="ts">
import { reactive } from 'vue'
import MansorySvg from './../components/icons/MansorySvg.vue'
import CardSvg from './../components/icons/CardSvg.vue'
import GridSvg from './../components/icons/GridSvg.vue'

const buttomViewList = [
  {
    viewName: 'mansory-view',
    icon: MansorySvg,
  },
  {
    viewName: 'card-view',
    icon: CardSvg,
  },
  {
    viewName: 'grid-view',
    icon: GridSvg,
  },
]

const states = reactive({
  currentViewMode: 'mansory-view'
})

</script>

<template>
  <div>
    <button 
      v-for="(item, index) in buttomViewList" :key="index"
      @click="states.currentViewMode = item.viewName"
    >
      <component 
        :is="item.icon"
        :color="states.currentViewMode === item.viewName ? '#060608' : '#858585'"
      />
    </button>
  </div>
</template>

<style scoped lang="scss">
div {
  width: 150px;
  padding: 0.5rem 0.08rem;
  background-color: #f4f4f6;
  display: flex;
  justify-content: space-around;

  button {
    border: none;
    outline: none;
    width: 25px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>