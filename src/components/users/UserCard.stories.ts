import { Meta, StoryFn } from '@storybook/vue3';
import UserCard from './UserCard.vue';
import { User } from '@/types/types';

export default {
  title: 'Components/UserCard',
  component: UserCard,
  parameters: {
    docs: {
      description: {
        component: 'Компонент UserCard отображает информацию о пользователе, включая фотографию, имя и email.',
      },
    },
  },
  argTypes: {
    user: {
      control: 'object',
      description: 'Объект пользователя',
    },
  },
} as Meta<typeof UserCard>;

const Template: StoryFn<typeof UserCard> = (args) => ({
  components: { UserCard },
  setup() {
    return { args };
  },
  template: '<UserCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  user: {
    name: {
      first: 'John',
      last: 'Doe',
    },
    email: 'john.doe@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  } as User,
};

export const LongName = Template.bind({});
LongName.args = {
  user: {
    name: {
      first: 'Александр',
      last: 'Константинопольский',
    },
    email: 'alexander.konstantinopolsky@verylongdomain.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  } as User,
};

export const NoImage = Template.bind({});
NoImage.args = {
  user: {
    name: {
      first: 'Jane',
      last: 'Smith',
    },
    email: 'jane.smith@example.com',
    picture: {
      large: '', // Пустая строка для имитации отсутствия изображения
    },
  } as User,
};