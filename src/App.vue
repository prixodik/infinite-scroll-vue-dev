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

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeaderSection: defineAsyncComponent(() => import('./components/Header.vue')),
    UserList: defineAsyncComponent(() => import('./components/users/UserList.vue')),
  },
});
</script>