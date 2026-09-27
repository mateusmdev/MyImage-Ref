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
		<!-- <button></button> -->
  	<nav>
    	<ul>
        <li v-for="(item, index) in headerItemList" :key="index">
					<HeaderItem 
						:name="item.name" 
						:alt="item.alt" 
						:icon="item.icon"
						:isActive="states.activeLinkIndex === index"
						@click.prevent="states.activeLinkIndex = index"
					>
					</HeaderItem>
				</li>
    	</ul>
  	</nav>
	</header>
</template>

<style scoped lang="scss">
header {
	border-right: 2px solid #e8e8e8;
  width: 180px;
	padding: 0.7rem;
	position: fixed;
	height: 100%;
	position: relative;

	.toggle-btn {
		position: absolute;
		right: -35px;
		top: 1%;
		width: 20px;
		height: 20px;
		border: 1px solid #e8e8e8;
		border-radius: 50%;
		background-color: #e8e8e8;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	li {
		margin-bottom: 0.7rem;
	}
}
</style>