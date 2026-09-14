<script setup lang="ts">
import HeaderItem from './HeaderItem.vue';
import HomeSvg from './icons/HomeSvg.vue';

import { reactive } from 'vue'

const headerItemList = [
	{
		name: 'Inicio',
		alt: 'a home icon',
		icon: HomeSvg
	},
	{
		name: 'Inicio',
		alt: 'a home icon',
		icon: HomeSvg	
	}
]

const states = reactive({
	activeLinkIndex: 0
})
</script>

<template>
	<header>
  	<nav>
    	<ul>
        <li v-for="(item, index) in headerItemList" :key="index">
					<HeaderItem 
						:name="item.name" 
						:alt="item.alt" 
						:icon="item.icon"
						:isActive="states.activeLinkIndex === index"
						@click="states.activeLinkIndex = index"
					>
					</HeaderItem>
				</li>
    	</ul>
  	</nav>
	</header>
</template>

<style scoped lang="scss">
header {
	border-right: 2px solid #F4F4F6;
  width: 180px;
	padding: 0.7rem;

	li {
		margin-bottom: 0.7rem;
	}
}
</style>