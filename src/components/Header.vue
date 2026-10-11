<script setup lang="ts">
import HeaderItem from './HeaderItem.vue';
import HomeSvg from './icons/HomeSvg.vue';
import AlbumSvg from './icons/AlbumSvg.vue';
import SettingsSvg from './icons/SettingsSvg.vue';

import { reactive } from 'vue'

const headerItemList = [
	{
		name: 'Home',
		alt: 'a home icon',
		icon: HomeSvg,
		path: '/'
	},
	{
		name: 'Albums',
		alt: 'an album icon',
		icon: AlbumSvg,	
		path: '/albums'
	},
	{
		name: 'Settings',
		alt: 'a setting icon',
		icon: SettingsSvg,	
		path: '/settings'
	}
]

type EmitDefinition = {
	toggleMenu: [isOpen: boolean]
}

const emit = defineEmits<EmitDefinition>()

const states = reactive({
	activeLinkIndex: 0,
	isOpen: false,
})

const methods = {
	toggleSideBar () {
		states.isOpen = !states.isOpen
		emit('toggleMenu', states.isOpen)
	}
}
</script>

<template>
	<header 
		:class="{ 'is-closed': !states.isOpen }"
	>
		<button 
			class="toggle-btn"
			:class="{ 'is-open': states.isOpen }"
			@click="methods.toggleSideBar"
		>
			<div></div>
			<div></div>
			<div></div>
		</button>
  	<nav>
    	<ul>
        <li v-for="(item, index) in headerItemList" :key="index">
					<HeaderItem 
						:name="item.name" 
						:alt="item.alt" 
						:icon="item.icon"
						:isActive="states.activeLinkIndex === index"
						@click.prevent="states.activeLinkIndex = index"
						:class="{'short-version': !states.isOpen}"
						:path="item.path"
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
	transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);

	&.is-closed {
		width: 75px;
	}

	.toggle-btn {
		z-index: 5;
		position: absolute;
		right: -50px;
		top: 1.8%;
		width: 32px;
		height: 25px;

		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;

		padding: 3px 3px;
		border: none;
		outline: transparent;
		background: transparent;
		color: #060608;

		cursor: pointer;

		&:focus-visible {
			outline: 2px solid currentColor;
			outline-offset: 4px;
		}

		div {
			width: 100%;
			height: 3px;
			flex-shrink: 0;
			background-color: currentColor;
			border-radius: 999px;

			translate: 0 0;
			rotate: 0deg;

			transition:
				translate 300ms cubic-bezier(0.4, 0, 0.2, 1),
				rotate 300ms cubic-bezier(0.4, 0, 0.2, 1),
				opacity 300ms ease;
		}

		&.is-open {
			div:nth-child(1) {
				translate: 0 8px;
				rotate: 45deg;
			}

			div:nth-child(2) {
				opacity: 0;
			}

			div:nth-child(3) {
				translate: 0 (-8px);
				rotate: -45deg;
			}
		}
	}

	li {
		margin-bottom: 0.7rem;
	}
}
</style>