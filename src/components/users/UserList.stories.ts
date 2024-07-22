import { Meta, StoryFn } from '@storybook/vue3';
import UserList from './UserList.vue';
import { ref } from 'vue';

export default {
  title: 'Components/UserList',
  component: UserList,
  parameters: {
    docs: {
      description: {
        component: 'Компонент списка пользователей. Получает данные из API и отображает их в виде списка с бесконечной прокруткой.',
      },
    },
  },
} as Meta<typeof UserList>;

const Template: StoryFn<typeof UserList> = () => ({
  components: { UserList },
  setup() {
    const users = ref(generateMockUsers(10));
    const loading = ref(false);

    const fetchUsers = async () => {
      console.log('fetchUsers called');
      // Имитация загрузки данных
      loading.value = true;
      await new Promise(resolve => setTimeout(resolve, 1000));
      users.value = [...users.value, ...generateMockUsers(5)];
      loading.value = false;
    };

    const updateLastObservedElement = () => {
      console.log('updateLastObservedElement called');
    };

    return { users, loading, fetchUsers, updateLastObservedElement };
  },
  template: '',
});

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  //loading: true,
};

// Вспомогательная функция для генерации моковых пользователей
function generateMockUsers(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    name: { first: `User${index + 1}`, last: 'Doe' },
    email: `user${index + 1}@example.com`,
    picture: { large: `https://randomuser.me/api/portraits/men/${index + 1}.jpg` },
  }));
}
