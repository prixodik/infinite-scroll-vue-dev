<template>
  <div class="user-block">
    <div class="user-block__img">
      <img :src="user.picture.large" alt=""/>
    </div>
    <h3 class="user-block__title title-h5">{{ user.name.first }} {{ user.name.last }}</h3>
    <div class="user-block__email">{{ user.email }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { User } from '@/types/types';

/**
 * @vue
 * @component UserCard
 * @description A component that displays a user card
 */
export default defineComponent({
  name: 'UserCard',
  props: {
    /**
     * The user object
     */
    user: {
      type: Object as () => User,
      required: true,
    },
  },
});
</script>