<template>
	<div class="index-page">
	  <HeaderSection />
	  <main class="index-page__main">
		<div class="index-page__container container">
		  <h1 class="index-page__title title-h1">Most active users</h1>
		  <UserList />
		</div>
	  </main>
	</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, defineAsyncComponent } from 'vue';
  
  /**
   * Главная страница приложения.
   * @component App
   * @description Корневой компонент приложения, отображающий заголовок и список наиболее активных пользователей.
   */
  export default defineComponent({
	name: 'App',
	components: {
	  /**
	   * Асинхронный компонент заголовка.
	   * @component HeaderSection
	   */
	  HeaderSection: defineAsyncComponent(() => import('./components/Header.vue')),
	  /**
	   * Асинхронный компонент списка пользователей.
	   * @component UserList
	   */
	  UserList: defineAsyncComponent(() => import('./components/users/UserList.vue')),
	},
  });
  </script>