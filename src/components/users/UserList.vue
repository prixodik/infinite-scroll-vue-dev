<template>
  <div class="index-page__list">
    <div class="index-page__list-item" v-for="user in users" :key="user.email">
      <UserCard :user="user" />
    </div>

    <div v-if="loading" class="index-page__loading title-h4">Loading...</div>

    <svg class="svg-shape" width="0" height="0" viewBox="0 0 196 196">
      <clipPath id="clip-path-after" clipPathUnits="objectBoundingBox">
        <path
          d="M0.444,0.014 C0.481,-0.001,0.524,-0.001,0.561,0.014 L0.806,0.116 C0.844,0.131,0.874,0.161,0.889,0.199 L0.991,0.444 C1,0.481,1,0.524,0.991,0.561 L0.889,0.806 C0.874,0.844,0.844,0.874,0.806,0.889 L0.561,0.991 C0.524,1,0.481,1,0.444,0.991 L0.199,0.889 C0.161,0.874,0.131,0.844,0.116,0.806 L0.014,0.561 C-0.001,0.524,-0.001,0.481,0.014,0.444 L0.116,0.199 C0.131,0.161,0.161,0.131,0.199,0.116 L0.444,0.014">
        </path>
      </clipPath>
    </svg>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, watch, nextTick, defineAsyncComponent } from 'vue';
//import UserCard from './UserCard.vue';

/**
 * @interface {User},
 * @description User interface
 */
import { User, APIUser } from '@/types/types';

export default defineComponent({
  name: 'UserList',
  components: {
    // Динамический импорт компонента UserCard
    UserCard: defineAsyncComponent(() => import('./UserCard.vue')),
  },
  setup() {
    const users = ref<User[]>([]);
    const loading = ref(false);
    let page = 1;
    let observer: IntersectionObserver;
    let lastObservedElement: Element | null = null;

    const fetchUsers = async (page: number) => {
      loading.value = true;
      try {
        const response = await fetch(`https://randomuser.me/api/?page=${page}&results=12`);
        const data = await response.json();

        // формируем результат только из данных которые соответствуют интерфейсу ${User}
        const transformedData = data.results.map((user: APIUser) => ({
          name: {
            first: user.name.first,
            last: user.name.last,
          },
          picture: {
            large: user.picture.large,
          },
          email: user.email,
        }));
        // Добавляем новые данные в существующий массив без создания нового
        users.value.push(...transformedData);
        await nextTick(); // Ждем, пока DOM обновится
        updateLastObservedElement();
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        loading.value = false;
      }
    };

    const updateLastObservedElement = () => {
      if (lastObservedElement && lastObservedElement instanceof Element) {
        observer?.unobserve(lastObservedElement);
      }
      const list = document.querySelectorAll('.index-page__list-item');

      if (list.length > 0) {
        lastObservedElement = list[list.length - 1];
        observer?.observe(lastObservedElement);
      }
    };

    onMounted(() => {
      fetchUsers(page);

      // Настройка Intersection Observer для отслеживания видимости элементов
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !loading.value) {
            page += 1;
            fetchUsers(page);
          }
        });
      }, { threshold: 1.0 });

      // Наблюдение за последним элементом, если он существует
      watch(users, () => {
        updateLastObservedElement();
      });
    });

    onBeforeUnmount(() => {
      if (observer) observer.disconnect();
    });

    return {
      users,
      loading,
    };
  },
});
</script>
