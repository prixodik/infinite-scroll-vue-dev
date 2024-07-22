<template>
	<div class="user-block">
	  <div class="user-block__img">
		<img :src="user.picture.large" :alt="user.name.first + ' ' + user.name.last"/>
	  </div>
	  <h3 class="user-block__title title-h5">{{ user.name.first }} {{ user.name.last }}</h3>
	  <div class="user-block__email">{{ user.email }}</div>
	</div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { User } from '@/types/types';
  
  /**
   * @component UserCard
   * @description Компонент для отображения карточки пользователя. 
   * Показывает фотографию, имя и email пользователя.
   */
  export default defineComponent({
	name: 'UserCard',
	props: {
	  /**
	   * Объект пользователя
	   * @type {User}
	   * @required
	   */
	  user: {
		type: Object as () => User,
		required: true,
	  },
	},
  });
  </script>