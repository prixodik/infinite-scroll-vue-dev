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
import { User, APIUser } from '@/types/types';

/**
 * Компонент списка пользователей с бесконечной прокруткой.
 * @component
 * @example
 * <UserList />
 * @see {@link https://randomuser.me/api/ | Random User API} - Документация API для получения случайных пользователей.
 */
export default defineComponent({
  name: 'UserList',
  components: {
    /**
     * Асинхронный компонент карточки пользователя.
     * @component
     */
    UserCard: defineAsyncComponent(() => import('./UserCard.vue')),
  },
  setup() {
    /**
     * Массив пользователей.
     * @type {import('vue').Ref<User[]>}
     */
    const users = ref<User[]>([]);

    /**
     * Флаг загрузки пользователей.
     * @type {import('vue').Ref<boolean>}
     */
    const loading = ref(false);

    /**
     * Текущий номер страницы для загрузки пользователей.
     * @type {number}
     */
    let page = 1;

    /**
     * Инстанс Intersection Observer для отслеживания последнего элемента списка.
     * @type {IntersectionObserver | null}
     */
    let observer: IntersectionObserver | null = null;

    /**
     * Последний наблюдаемый элемент списка.
     * @type {Element | null}
     */
    let lastObservedElement: Element | null = null;

    /**
     * Функция для получения пользователей с API.
     * @param {number} page - Номер страницы.
     * @returns {Promise<void>}
     */
    const fetchUsers = async (page: number): Promise<void> => {
      loading.value = true;
      try {
        const response = await fetch(`https://randomuser.me/api/?page=${page}&results=12`);
        const data = await response.json();

        /**
         * Преобразование данных API в формат, используемый компонентом.
         * @param {APIUser} user - Пользователь из API.
         * @returns {User} Преобразованный пользователь.
         */
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

        users.value.push(...transformedData);
        await nextTick();
        updateLastObservedElement();
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        loading.value = false;
      }
    };

    /**
     * Обновление последнего наблюдаемого элемента для Intersection Observer.
     */
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

      // Настройка Intersection Observer для бесконечной прокрутки
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !loading.value) {
            page += 1;
            fetchUsers(page);
          }
        });
      }, { threshold: 1.0 });

      // Наблюдение за изменениями в списке пользователей
      watch(users, () => {
        updateLastObservedElement();
      });
    });

    /**
     * Хук жизненного цикла: перед размонтированием компонента.
     */
    onBeforeUnmount(() => {
      if (observer) observer.disconnect();
    });

    return {
      users,
      loading,
      fetchUsers,
      updateLastObservedElement,
    };
  },
});
</script>
