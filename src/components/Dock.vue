<script setup lang="ts">
import { reactive, type Component } from 'vue'
import MansorySvg from './../components/icons/MansorySvg.vue'
import CardSvg from './../components/icons/CardSvg.vue'
import GridSvg from './../components/icons/GridSvg.vue'

type ButtonType = {
  viewName: string,
  icon: Component
}

const buttonViewList: ButtonType[] = [
  {
    viewName: 'mansory',
    icon: MansorySvg,
  },
  {
    viewName: 'card',
    icon: CardSvg,
  },
  {
    viewName: 'grid',
    icon: GridSvg,
  },
]

type EmitDefinition = {
  changeViewMode: [viewMode: string]
}

const emit = defineEmits<EmitDefinition>()

const states = reactive({
  currentViewMode: 'mansory'
})

const methods = {
  handleClick(currentItem: ButtonType) {
    states.currentViewMode = currentItem.viewName
    emit('changeViewMode', currentItem.viewName)
  }
}

</script>

<template>
  <div>
    <button 
      v-for="(item, index) in buttonViewList" :key="index"
      @click="methods.handleClick(item)"
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